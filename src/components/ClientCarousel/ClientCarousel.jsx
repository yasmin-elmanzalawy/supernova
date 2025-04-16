import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// ClientCarousel.js
import React from 'react';
import Slider from 'react-slick';
import gb from '../../assets/gb.png';
import playhera from '../../assets/playhera.png';
import frenzy from '../../assets/frenzy.png';
import games from '../../assets/games.png';
import arena from '../../assets/arena.png';
import esportsga from '../../assets/esportsga.png';
import tealflamingo from '../../assets/tealflamingo.png';
import './ClientCarousel.css';

export default function ClientCarousel() {
  const logos = [gb, playhera, frenzy, games, arena, esportsga, tealflamingo];

  const settings = {
    infinite: true,            // Enable infinite looping
    slidesToShow: 5,           // Number of logos shown at once
    slidesToScroll: 1,         // Number of logos scrolled at once
    speed: 3000,                // Speed of transition between slides
    autoplay: true,            // Enable autoplay
    autoplaySpeed: 0,       // Delay between slides (in ms)
    draggable: true,           // Allow dragging
    cssEase: 'linear', 
    arrows:false,        // Smooth transition effect
    pauseOnHover: true,
    draggable: true,                   // Pause autoplay when mouse hovers over carousel
    responsive: [
      {
        breakpoint: 1024,       // For screens <= 1024px (tablets)
        settings: {
          slidesToShow: 3,      // Show 3 logos at a time on tablet
        },
      },
      {
        breakpoint: 600,        // For screens <= 600px (phones)
        settings: {
          slidesToShow: 1,      // Show 1 logo at a time on phones
        },
      },
    ],
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div className="flex items-center justify-center">
            <div key={index} className="carousel-item">
            <img src={logo} alt={`Client ${index}`} />
          </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
