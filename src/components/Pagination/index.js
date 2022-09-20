import './index.css'
// import BsArrowLeft from 'react-icons/bs'
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import React from 'react'

const Pagination = () => {
  return (
    <div className='main-pagination-box'>
            <div className='pagination-box'>
                    <div>Showing 1 to 6 of 10 entries</div>
                    <div className='pages-link'>
                        <div className='paginaation-icon'><BsArrowLeft /></div>
                        <div className='paginaation-icon pagin'>1</div>
                        <div className='paginaation-icon  pagin'>2</div>
                        <div className='paginaation-icon  pagin'>...</div>
                        <div className='paginaation-icon  pagin'>8</div>
                        <div className='paginaation-icon'><BsArrowRight /></div>
                    </div>
            </div>
    </div>
  )
}

export default Pagination