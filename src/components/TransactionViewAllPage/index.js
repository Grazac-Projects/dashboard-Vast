import './index.css';
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import React, { useEffect, useState } from 'react'
import Table from '../Table/Table';
import { getTransactionHistory } from '../../api/Transactiondetails';

const TransactionViewAllPage = ({ data }) => {
  const [trasaction, setTransaction] = useState(false) 
  useEffect(() => {
    (async () => {
     let data = await getTransactionHistory()
     setTransaction(data);
    })();

  },[])
  
  // const [trasaction, setTransaction] = useState(false) ;
  return (
    <>
    <div className='customer-heading-main-all'>
    <div className='customer-listall-heading'>
    <div  className="customerlist-para"><p>Transaction List</p></div>
      <div className='customer-heading-items'><input type='text' placeholder='Search'/> <FiSearch className='transaction-search-icon'/>
      <div className='fiter-box'><span>Filter by Category</span> <IoIosArrowDown/></div>
      <div className='fiter-box'><span>Filter by Status</span> <IoIosArrowDown/></div>
     <div className='fiter-box'><span>Filter by Date Created</span> <IoIosArrowDown/></div>
     </div>
    </div>
   
    </div>
    {trasaction?  <Table data={trasaction}  />:'loading'}
    </>
  )
}

export default TransactionViewAllPage