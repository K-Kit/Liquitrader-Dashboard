import MUIDataTable from "mui-datatables";
import React from "react"
import Card from "../../../node_modules/@material-ui/core/Card/Card"
import { styled } from "@material-ui/styles"
import _ from 'lodash'



const _options = {
  filter: false,
  selectableRows: false,
  print: false,
  sort: false,
  download: false,
  search: false,
  viewColumns: false,
  pagination: false,
  responsive: 'auto'
};
const StyledTable = styled(MUIDataTable)`
  width:100%;
  border: 0;
  box-shadow: none;
  margin-top: 16px !important;
`
const CardTable = ({title, data, columns, options}) =>
    <StyledTable
      title={title}
      data={data}
      columns={columns}
      options={_.merge(_options, options)}
    />

export default CardTable
