import React from 'react'
import Navbar from '../components/Navbar'

const MyCart = () => {
  return (
    <div>
    <Navbar/>
    <div className='fliud-container'>
    <div className='card-cart'>
      <div className='row'>
        <img src='https://cdn.avo.africa/2022/11/14/12/16/dab25928-92f1-4038-ba5e-2789c7b98437' alt=''/>
        <div className='title-cart'>Samsung Galaxy A73</div>
        <div className='price-cart'>R10 490.00</div>
        <button className='btn-cart'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg></button>
      </div>

      <div className='row'>
        <div className='total-cart'>Total :<span> R40 000.00</span></div>
        <div className='total-number-cart'></div>
        <button className='btn-cart'>Confirm</button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default MyCart
