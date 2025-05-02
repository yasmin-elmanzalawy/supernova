import React, { useRef, useEffect } from 'react';
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
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    let animationFrameId;
    let speed = 0.5;

    const scroll = () => {
      track.scrollLeft += speed;
      if (track.scrollLeft >= track.scrollWidth / 2) {
        track.scrollLeft = 0;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const startDrag = (x) => {
    isDragging.current = true;
    startX.current = x - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
  };

  const moveDrag = (x) => {
    if (!isDragging.current) return;
    const walk = x - startX.current;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const endDrag = () => {
    isDragging.current = false;
  };

  return (
    <div
      className="carousel"
      ref={trackRef}
      onMouseDown={(e) => startDrag(e.pageX)}
      onMouseMove={(e) => moveDrag(e.pageX)}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onTouchStart={(e) => startDrag(e.touches[0].pageX)}
      onTouchMove={(e) => {
        moveDrag(e.touches[0].pageX);
        e.preventDefault(); // Prevent vertical scroll on mobile
      }}
      onTouchEnd={endDrag}
    >
      <div className="carousel-track">
        {[...images, ...images].map((img, index) => (
          <div key={index} className="carousel-slide">
            <img src={img} alt="client" className="carousel-img" />
          </div>
        ))}
      </div>
    </div>
  );
}
