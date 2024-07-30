import React from 'react'
import './Footer.css'
import instagrame from '/src/Image/icons8-instagram-24.png';
import twitterx from '/src/Image/icons8-twitterx-24.png';
import snapchat from '/src/Image/icons8-snapchat-32.png';
import Appstore from '/src/Image/AppStore.png';
import PlayStore from '/src/Image/PlayStore.png';

const Footer = () => {
  return (
    <>
      <main className="footer" id="footer">

        <footer>
          <div className="left-footer flex flex-col gap-16">
            <div className="footer-logo text-orange-500 flex items-center">
              <h2>3EIGHT</h2><span className="material-symbols-outlined text-orange-500">
                restaurant_menu
              </span>
            </div>
          </div>
          <div className="middle-footer flex gap-20">
            <section className='flex flex-col items-center '>
              <h3 className='relative right-1'>
                Company
              </h3>
              <ul className='flex flex-col'>
                <li className='relative right-4'>About</li>
                <li className='relative right-4'>Career</li>
                <li className='relative right-4'>Mobile</li>
              </ul>
            </section>
            <section className='flex flex-col items-center '>
              <h3 className='relative right-1'>
                Contact
              </h3>
              <ul className='flex flex-col'>
                <li>Help'FAQ</li>
                <li className='relative right-3'>Press</li>
                <li className='relative right-1'>Affilates</li>
              </ul>
            </section>
            <section className='flex flex-col items-center '>
              <h3 className='relative right-3'>
                More
              </h3>
              <ul className='flex flex-col'>
                <li className='relative' style={{ left: 2 }}>Airlinefees</li>
                <li className='relative right-2'>Aurline</li>
                <li className='relative left-1'>Low Meme</li>
              </ul>
            </section>
          </div>
          <div className="right-footer flex flex-col items-center">
            <div className="right-footer-top flex items-center gap-4 relative">
              <img src={instagrame} alt="" className='bg-gray-900 cursor-pointer p-1 rounded-full' />
              <img src={twitterx} alt="" className='bg-gray-900 cursor-pointer p-1 rounded-full' />
              <img src={snapchat} alt="" className='bg-gray-900 cursor-pointer p-1 rounded-full' />
            </div>
            <div className="right-footer-left">
              <label className='text-gray-600 text-xs relative left-2'>
                Discover Our App
              </label>
              <div className="right-footer-img flex items-center">
                <img src={PlayStore} alt="" className='w-36' />
                <img src={Appstore} alt="" className='w-36' />
              </div>
            </div>
          </div>

        </footer>
        <div className="credit-website text-white text-xs text-center bg-black">
          All right reserved to dilshan 2024
        </div>
      </main>
    </>
  )
}

export default Footer