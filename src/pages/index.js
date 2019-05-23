import React, { useContext } from "react"
import { Link } from "gatsby"
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Grid from "../../node_modules/@material-ui/core/Grid/Grid"
import Card from "../../node_modules/@material-ui/core/Card/Card"
import {Line, Bar} from 'react-chartjs-2';
import {barData, lineData, dashboard_placeholder} from "../data"
import {StateContext} from "../context"
import Typography from '@material-ui/core/Typography';
import CardTable from "../components/TableCard/tablecard";

const StyledCard = styled(Card)`
    //width: 100%;
    display: flex;
    position: relative;
    font-size: .875rem;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
    margin-bottom: 30px;
    border-radius: 6px;
    flex-direction: column;
    overflow: visible !important;
    height: 100%;
`

const CardIcon = styled.div`
    float: left;
    padding: 4px;
    margin: -16px 16px -16px 16px;
    //margin-right: 15px;
    border-radius: 3px;
    border-color: black;
    background: ${props => props.theme.palette.primary.main};
    z-index: 3000;
    width: fit-content;
    ::after {
      content: "";
      clear: both;
      display: table;
    }
`
const StyledImage = styled.img`
      display: inline-block;
      font-size:36px;
      font-weight:300;
      line-height:56px;
      margin:10px 10px 4px;
      text-align:center;
      width: 54px;
`

const StyledCardHeader = styled.div`
    color: #d7e3eb;
    margin: 0 15px 0 0 ;
    padding: 0;
    position: absolute;
`

const CardBody = styled.div`
    padding: 16px 16px 0px 8px;
    position: relative;
    text-align: right;
`

const ValueCard = ({title, main, sub, data}) => {
  const context = useContext(StateContext);

  return(
    <Grid item md={6} xs={12}>
      <StyledCard>

        <StyledCardHeader>
          <CardIcon theme={context.theme}>
            <StyledImage src={data.placeholderImage.publicURL} />
          </CardIcon>
        </StyledCardHeader>

        <CardBody>
          <Typography variant={'subtitle1'}> {title} </Typography>
          <Typography variant={'subtitle2'}> {main} </Typography>
          <Typography variant={'caption'}> {sub} </Typography>
        </CardBody>
      </StyledCard>
    </Grid>
  )
}

const IndexPage = props => {
  const context = useContext(StateContext)
  const dash = context.dashboard
  const groupdata = !dash ? []:[
    {
      title: 'Available '+ dash.market + ' Balance',
      main: dash.quote_balance,
      sub: ''
    },
    {
      title: 'Total Assumed Value',
      main: dash.total_pending_value,
      sub: ''
    },
    {
      title: 'Current Value',
      main: dash.total_current_value,
      sub: ''
    },
    {
      title: 'Total Profit',
      main: dash.quote_balance,
      sub: dash.total_profit_percent
    },
  ]
  return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          {/*<StyledPaper>*/}
          <Button color={"primary"} onClick={context.toggleDark}>Swap theme</Button>
          <Grid container spacing={24}  justify={"space-evenly"}>

            {/* cum profit Line chart card */}
            <Grid item xs={12}>
              <StyledCard>
                <Line data={lineData} />
                <CardBody>
                  <Typography variant={"h6"}>
                    Cumulative Profit
                  </Typography>
                </CardBody>
              </StyledCard>
            </Grid>

            {/* group of 4 small cards */}
            {groupdata.map(item => {
              return (
                <ValueCard
                  {...item}{ ...props}
                />
              )
            })}

            {/*</Grid>*/}

            <Grid item md={6}  xs={12}>
              <StyledCard>
                  <CardIcon theme={context.theme}>
                    <StyledImage src={props.data.placeholderImage.publicURL} />
                  </CardIcon>
                <CardBody>
                  <CardTable
                    data={dash && dash.market_conditions}
                    columns={[
                      "Condition",
                      {
                        name: "Status",
                        options: {
                          filter: false,
                          customBodyRender: value => <span style={{color: value == 'True' ? "green": "red"}}> {value} </span>
                        }
                      },
                      ]}
                    title={"Market Conditions"}
                  />
                </CardBody>
              </StyledCard>
            </Grid>
            <Grid item md={6} xs={12}>
              <StyledCard>

                  <CardIcon theme={context.theme}>
                    <StyledImage src={props.data.placeholderImage.publicURL} />
                  </CardIcon>
                <CardBody>

                  <CardTable
                    data={dash && dash.recent_sales}
                    columns={[
                      {
                        name: "symbol",
                        label: "Symbol"
                      },
                      {
                        name: "gain",
                        label: "Gain",
                        options: {
                          filter: false,
                          customBodyRender: value => <span style={{color: value > 0 ? "green": "red"}}> {value.toFixed(2)} </span>
                        }
                      },
                    ]}
                    title={"Recent Sales"}
                  />
                </CardBody>
              </StyledCard>
            </Grid>

            <Grid item lg={12} xs={12}>
              <StyledCard>

                <Grid container alignItems={"stretch"} alignContent={"stretch"} spacing={16}>
                  <Grid item lg={6} xs={12}>
                    <CardTable
                      data={dash && dash.market_conditions}
                      columns={[
                        "Condition",
                        {
                          name: "Status",
                          options: {
                            filter: false,
                            customBodyRender: value => <span style={{color: value == 'True' ? "green": "red"}}> {value} </span>
                          }
                        },
                      ]}
                      title={"Market Conditions"}
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <Bar
                      data={barData}
                      width={"100%"}
                      height={250}
                      options={{
                        maintainAspectRatio: false
                      }}
                    />
                  </Grid>
                </Grid>
              </StyledCard>
            </Grid>
          </Grid>
      </Layout>
  )
}

export default (IndexPage)

export const pageQuery = graphql`
  query {
    placeholderImage: file(absolutePath: { regex: "/white/eth.svg/" }) {
    relativePath
    absolutePath

    publicURL
  }
}
`
