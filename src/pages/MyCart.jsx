import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MyCart = () => {
  return (
    <>
    <Navbar/>
    <div className='card-cart'>
      <div className='row'>
        <img src='https://cdn.avo.africa/2022/11/14/12/16/dab25928-92f1-4038-ba5e-2789c7b98437' alt=''/>
        <div className='title-cart'>Samsung Galaxy A73</div>
        <div className='price-cart'>R10 490.00</div>
        <button className='btn-cart'>Delete</button>
      </div>

      <div className='row'>
        <div className='total-cart'>Total :<span> R40 000.00</span></div>
        <div className='total-number-cart'></div>
        <button className='btn-cart'>Confirm</button>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default MyCart
