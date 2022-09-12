import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import './Table.css';
const columns = [
  { field: 'id', headerName: '#' },
  { field: 'txnid', headerName: 'TXN ID'},
  { field: 'details', headerName: 'Details'},
  {
    field: 'category',
    headerName: 'Category',
    type: 'button',
  },
  {
    field: 'type',
    headerName: 'Type',
    // description: '332 Comment',
    // sortable: false,
  },
  {
    field: 'user',
    headerName: 'User',
    // type: 'button',
  },
  {
    field: 'amount',
    headerName: 'Amount',
    // description: '999 Shared',
  },
  {
    field: 'service',
    headerName: 'Service Fee',
    // description: '415k',
  },
  {
    field: 'status',
    headerName: 'Status',
    // description: '999 Shared',
  },
  {
    field: 'date',
    headerName: 'Date',
    // description: '999 Shared',
  }
];

// const rows = [
//   { id: 1, ArticleTitle: 'Snow', PostDate: '07 June 2021', Category: '', Comment: '332 Comment', Like: '9k Likes', Shared: '999 Shared', Viewers: '415k'  },
//   { id: 2, ArticleTitle: 'Snow', PostDate: '08 June 2021', Category: '', Comment: '332 Comment', Like: '9k Likes', Shared: '999 Shared', Viewers: '415k'  },
//   { id: 3, ArticleTitle: 'Snow', PostDate: '09 June 2021', Category: '', Comment: '332 Comment', Like: '9k Likes', Shared: '999 Shared', Viewers: '415k'  },
//   { id: 4, ArticleTitle: 'Snow', PostDate: '10 June 2021', Category: '', Comment: '332 Comment', Like: '9k Likes', Shared: '999 Shared', Viewers: '415k'  },
// ];

const rows=[
  { id: 1, txnid: 'ID1fc189b0', details: 'Top Up from Bank, GTBank • 0123364774', category: 'Wallet Credit', type: 'Account Top Up', user: 'Adeola Brown, 08131977989', amount: '$1,500', service: '-', status: '', date: '10-11-2019; 10:45 AM  ' },
  { id: 2, txnid: 'ID1fc189b0', details: 'Subscription Card, ID123364774', category: '', type: 'Card Funding', user: 'Adeola Brown, 08131977989', amount: '$1,500', service_fee: '$15', status: '', date: '10-11-2019; 10:45 AM  ' },
  { id: 3, txnid: 'ID1fc189b0', details: 'Subscription Card, ID123364774', category: '', type: 'Card Debit Transaction', user: 'Adeola Brown, 08131977989', amount: '$1,500', service: '-', status: '', date: '10-11-2019; 10:45 AM  ' },
  { id: 4, txnid: 'ID1fc189b0', details: 'Subscription Card, ID123364774', category: '', type: 'Card Withdrawal', user: 'Adeola Brown, 08131977989', amount: '$1,500', service: '-', status: '', date: '10-11-2019; 10:45 AM  ' },
  { id: 5, txnid: 'ID1fc189b0', details: 'Transfer to Dada Deborah, 08123364774', category: '', type: 'P2P Transfer', user: 'Adeola Brown, 08131977989', amount: '$1,500', service: '-', status: '', date: '10-11-2019; 10:45 AM  ' },
  { id: 6, txnid: 'ID1fc189b0', details: 'Transfer to Dada Deborah, GTBank • 0123364774', category: '', type: 'Bank Transfer', user: 'Adeola Brown, 08131977989', amount: '$1,500', service: '-', status: '', date: '10-11-2019; 10:45 AM  ' },
  { id: 7, txnid: 'ID1fc189b0', details: 'Subscription Card, ID123364774', category: '', type: 'Card Funding', user: 'Adeola Brown, 08131977989', amount: '$1,500', service: '$15', status: '', date: '10-11-2019; 10:45 AM  ' },
  { id: 8, txnid: 'ID1fc189b0', details: 'Top up from Card , Subscription Card . ID123364774', category: '', type: 'Card Creation', user: 'Adeola Brown, 08131977989', amount: '-', service: '$3', status: '', date: '10-11-2019; 10:45 AM  ' },
];

export default function DataTable() {
  return (
    <div className="table" style={{ height: 550, width: "78vw", margin: "auto" }}>
    <DataGrid
    sx={{
      fontSize:'13px'
    }}
      rows={rows}
      columns={columns}
      // rowsPerPageOptions={[1]}
    />
    </div>
  );
}
