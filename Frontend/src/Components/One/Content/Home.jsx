import React from 'react'
import "./Home.css"
import heart from '/src/Image/heart.png';
import frontImage from '/src/Image/front.png';
import pizzImage from '/src/Image/pizza.png';
import orderitem from '/src/Image/order.png';
import medal from '/src/Image/medal.png';
import house from '/src/Image/house.png';
import cooking from '/src/Image/cooking.png';
import deliveryScooter from '/src/Image/delivery-bike.png';


const Home = () => {
  return (
    <>
      <main id='home-main'>
        <div className="main-left">
          <div className="left-top">
            <p >
              <h1 className='text-3xl text-center text-white'>Savor Signature Dishes Every Time, With Lighting-<star className="flex align-center gap-4 justify-center"><b className='border-b-2 border-solid border-orange-600'>Fast-delivery</b><img src={pizzImage} className='w-8' alt="" /></star> to Your Door-step!</h1>
            </p>
          </div>
          <div className="left-bottom">

          </div>
        </div>
        <div className="main-right p-0">
          <img src={heart} alt="heart" id='heart' />
          <div className="delivery-info flex items-center ">
            <img src={deliveryScooter} alt="delivery" id='delivery-scooter' />
            <span>Fast Deliver</span>
          </div>
          <img src={frontImage} alt="frontImage" id='frontImage' />
        </div>
      </main>
    </>
  )
}

export default Home