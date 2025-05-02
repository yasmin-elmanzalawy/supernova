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
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 1000, // Speed of auto-scroll (in ms)
    draggable: true, // Enable dragging
    speed: 1500, // Speed of transition (in ms)
    cssEase: 'ease', // Smooth transition easing
    swipeToSlide: true, // Enables dragging directly to the next slide
    touchThreshold: 10, // Minimum touch distance to trigger swipe
    arrows: false, // Remove arrows
    centerMode: false, // Disable center mode to avoid interference with dragging
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 images on medium screens
          autoplay: true, // Ensure autoplay is enabled on medium screens
          autoplaySpeed: 2000, // Consistent autoplay speed
          speed: 1500, // Smooth transition on medium screens
          draggable: true, // Ensure dragging is enabled on medium screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, // Show 2 images on small screens
          draggable: true, // Ensure dragging is enabled on small screens
          autoplay: true, // Ensure autoplay is enabled on small screens
          autoplaySpeed: 2000, // Consistent autoplay speed on small screens
          speed: 1500, // Smooth transition on small screens
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className="carousel-slide" key={idx}>
            <img src={img} alt="client logo" className="carousel-img m-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
