import React from 'react'
import tweeter   from "../resources/tweeter.svg"
import facebook   from "../resources/facebook.svg"
import instagram   from "../resources/instagram.svg"
import linkedin   from "../resources/linkedin.svg"


const Footer = () => {
  return (
    <footer className='h-[58px] bg-[#1DBEB4] w-full bottom-0  fixed text-white flex flex-row justify-between items-center px-10 '> 
        <p >©2021 Digital Booking</p>
        <div className='hidden md:block'>
            <ul className='flex flex-row'>
                <li className='mx-[10px]'><img src={facebook}  alt='facebook'></img></li>
                <li className='mx-[10px]'><img src={linkedin}  alt='linkedin'></img></li>
                <li className='mx-[10px]'><img src={tweeter}   alt='tweeter'></img></li>
                <li className='mx-[10px]'><img src={instagram} alt='instagram'></img></li>
            </ul>
        </div>
    </footer>
    
  )
}

export default Footer