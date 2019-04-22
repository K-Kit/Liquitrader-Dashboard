import React, { useContext } from "react"
import { Link } from "gatsby"
import { useTheme } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Grid from "../../node_modules/@material-ui/core/Grid/Grid"
import Card from "../../node_modules/@material-ui/core/Card/Card"
import Paper from "../../node_modules/@material-ui/core/Paper/Paper"
import CardHeader from "../../node_modules/@material-ui/core/CardHeader/CardHeader"
import CardContent from "../../node_modules/@material-ui/core/CardContent/CardContent"
import withTheme from "@material-ui/core/es/styles/withTheme"
import {Line, Bar} from 'react-chartjs-2';
import {barData, lineData, dashboard_placeholder} from "../data"
import Table from "../../node_modules/@material-ui/core/Table/Table"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import AppContext  from "../context/appcontext"
import Typography from '@material-ui/core/Typography';

const StyledCard = styled(Card)`
    //width: 100%;
    border: 0;
    display: flex;
    position: relative;
    word-wrap: break-word;
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
    margin-top: -8px;
    //margin-right: 15px;
    border-radius: 3px;
    border-color: black;
    background: ${props => props.theme.palette.primary.main};
    z-index: 3000;
    margin-bottom: -20px;   
`
const StyledImage = styled.img`
      color: hsl(204, 33%, 88%);
      display: inline-block;
      font-size:36px;
      font-weight:300;
      line-height:56px;
      margin:10px 10px 4px;
      text-align:center;
      width: 36px;
      
`

const StyledCardHeader = styled.div`
    color: #d7e3eb;
    margin: 0 15px;
    padding: 0;
    position: absolute;
`

const CardBody = styled.div`
    padding: 16px 24px 0px 8px;
    position: relative;
    text-align: right;
    //float: right;
`
const StyledPaper = styled(Paper)`
  overflow: auto;
  padding: 16px;
  width: 100%;
`
const IndexPage = props => {
  const appcontext = useContext(AppContext)
  console.log('context', appcontext)
  return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          {/*<StyledPaper>*/}
          <Button color={"primary"} onClick={appcontext.toggleDark}>Swap theme</Button>
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
            {/*<Grid container item lg={6} spacing={16} justify={"flex-start"}  styles={{height:"auto", width: "100%", padding: 0, margin: 0}}>*/}
              <Grid item md={6} xs={12}>
                <StyledCard>
                  <StyledCardHeader>
                    <CardIcon theme={appcontext.theme}>
                      <StyledImage src={props.data.placeholderImage.publicURL} />
                    </CardIcon>
                  </StyledCardHeader>
                  <CardBody>
                    <Typography variant={'subtitle1'}> Available Balance </Typography>
                    <Typography variant={'subtitle2'}> 1.57405005 BTC </Typography>
                    <Typography variant={'caption'}> $7954.48</Typography>
                  </CardBody>
                </StyledCard>
              </Grid>
              <Grid item md={6} xs={12}>
                <StyledCard>
                  <StyledCardHeader>
                    <CardIcon theme={appcontext.theme}>
                      <StyledImage src={props.data.placeholderImage.publicURL} />
                    </CardIcon>
                  </StyledCardHeader>
                  <CardBody>
                    <Typography variant={'subtitle1'}> Available Balance </Typography>
                    <Typography variant={'subtitle2'}> 1.57405005 BTC </Typography>
                    <Typography variant={'caption'}> $7954.48</Typography>
                  </CardBody>
                </StyledCard>
              </Grid>
              <Grid item md={6} xs={12}>
                <StyledCard>
                  <StyledCardHeader>
                    <CardIcon theme={appcontext.theme}>
                      <StyledImage src={props.data.placeholderImage.publicURL} />
                    </CardIcon>
                  </StyledCardHeader>
                  <CardBody>
                    <Typography variant={'subtitle1'}> Available Balance </Typography>
                    <Typography variant={'subtitle2'}> 1.57405005 BTC </Typography>
                    <Typography variant={'caption'}> $7954.48</Typography>
                  </CardBody>
                </StyledCard>
              </Grid>
              <Grid item md={6} xs={12}>
                <StyledCard>
                  <StyledCardHeader>
                    <CardIcon theme={appcontext.theme}>
                      <StyledImage src={props.data.placeholderImage.publicURL} />
                    </CardIcon>
                  </StyledCardHeader>
                  <CardBody><Typography variant={'subtitle1'}> Available Balance </Typography>
                    <Typography variant={'subtitle2'}> 1.57405005 BTC </Typography>
                    <Typography variant={'caption'}> $7954.48</Typography>
                  </CardBody>
                </StyledCard>
              </Grid>

            {/*</Grid>*/}

            <Grid item md={6} lg={3} xs={12}>
              <StyledCard>
                <StyledCardHeader>
                  <CardIcon theme={appcontext.theme}>
                    <StyledImage src={props.data.placeholderImage.publicURL} />
                  </CardIcon>
                </StyledCardHeader>
              </StyledCard>
            </Grid>
            <Grid item md={6} lg={3} xs={12}>
              <StyledCard>
                <StyledCardHeader>
                  <CardIcon theme={appcontext.theme}>
                    <StyledImage src={props.data.placeholderImage.publicURL} />
                  </CardIcon>
                </StyledCardHeader>
              </StyledCard>
            </Grid>
            <Grid item lg={6}  xs={12}>
              <StyledCard>
                <Line data={lineData} />
                <CardContent>Cumulative Profit</CardContent>
              </StyledCard>
            </Grid>

            <Grid item lg={12} xs={12}>
              <StyledCard>

                <Grid container alignItems={"stretch"} alignContent={"stretch"}>
                  <Grid item lg={6} xs={12}>
                    <Table />
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
            {/*<Link to="/page-2/">Go to page 2</Link>*/}
          </Grid>
          {/*</StyledPaper>*/}
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
