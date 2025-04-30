import React from 'react';
import moon from '../../assets/moon.png'
import './Moon.css';

export default function Moon() {
  return (
    <div>
    
        <div className="orbit-container md:w-[600px] md:h-[600px] lg:h-[880px] lg:w-[880px] w-96 h-96 m-auto">
            <div className="orbit orbit-1"></div>
            <div className="orbit orbit-2"></div>
            <div className="orbit orbit-3"><img src={moon}  /></div>
            <div className="orbit orbit-4"></div>
            <div className="moon"></div>
            <div className="text-box">AAAAAAAAAAAAAAAAAA</div>
        </div>
    </div>
  )
}
