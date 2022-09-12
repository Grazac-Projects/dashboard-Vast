import React from 'react'
import Background from "../../components/Background/background";
import EachOverview from '../../components/EachOverview/eachoverview'
import TransactionOverview from '../../components/TransactionOverview/transactionoverview'
import List from '../../components/List/List';
import Table from '../../components/Table/Table'
function transaction() {
  return (
    <div>
            <Background/>
            <EachOverview props='Transaction' text='Transaction Overview'/>
            <TransactionOverview />
            <List/>
        <Table/>
    </div>
  )
}

export default transaction