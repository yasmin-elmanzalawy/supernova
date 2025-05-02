import React from 'react';
import Slider from 'react-slick';
import './ClientCarousel.css';
import gb from '../../assets/gb.png';
import playhera from '../../assets/playhera.png';
import frenzy from '../../assets/frenzy.png';
import games from '../../assets/games.png';
import arena from '../../assets/arena.png';
import esportsga from '../../assets/esportsga.png';
import tealflamingo from '../../assets/tealflamingo.png';

const images = [gb, playhera, frenzy, games, arena, esportsga, tealflamingo];

export default function ClientCarousel() {
  const settings = {
    infinite: true, // Infinite loop
    slidesToShow: 5, // Number of images visible at once
    slidesToScroll: 1,
    autoplay: true, // Auto scroll
    autoplaySpeed: 0, // Speed of auto scroll (in ms)
    draggable: true, // Enable dragging
    speed: 3000, // Speed of transition (in ms)
    arrows: false, // Remove arrows
    cssEase: 'linear', // Smooth continuous scrolling without jarring stops
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 images on medium screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, // Show 1 image on small screens
        },
      },
    ],
  };

  return (
    <div className="carousel-container ">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className='flex items-center justify-center' key={idx}>
            <img src={img} alt="client logo" className="carousel-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
