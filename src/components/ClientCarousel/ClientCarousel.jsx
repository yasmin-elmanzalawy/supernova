import React, { useRef, useEffect } from 'react';
import './ClientCarousel.css';
import gb from '../../assets/gb.png';
import playhera from '../../assets/playhera.png';
import frenzy from '../../assets/frenzy.png';
import games from '../../assets/games.png';
import arena from '../../assets/arena.png';
import esportsga from '../../assets/esportsga.png';
import tealflamingo from '../../assets/tealflamingo.png';
import "./ClientCarousel.css";

const images = [gb, playhera, frenzy, games, arena, esportsga, tealflamingo];

export default function ClientCarousel() {
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const animationFrameId = useRef(null);
  const speed = 0.5;
  const isAutoScrolling = useRef(true);

  // Auto scroll function
  const scroll = () => {
    if (isAutoScrolling.current && !isDragging.current) {
      const track = trackRef.current;
      track.scrollLeft += speed;
      if (track.scrollLeft >= track.scrollWidth / 2) {
        track.scrollLeft = 0;
      }
    }
    animationFrameId.current = requestAnimationFrame(scroll);
  };

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(scroll);

    const track = trackRef.current;

    // Native touch handlers with passive:false
    const onTouchStart = (e) => {
      isDragging.current = true;
      isAutoScrolling.current = false; // pause auto-scroll on touch
      startX.current = e.touches[0].pageX - track.offsetLeft;
      scrollLeft.current = track.scrollLeft;
    };

    const onTouchMove = (e) => {
      if (!isDragging.current) return;
      const x = e.touches[0].pageX - track.offsetLeft;
      const walk = x - startX.current;
      track.scrollLeft = scrollLeft.current - walk;
      e.preventDefault(); // prevent native scroll on iOS
    };

    const onTouchEnd = () => {
      isDragging.current = false;
      isAutoScrolling.current = true; // resume auto-scroll
    };

    // Mouse handlers for desktop
    const onMouseDown = (e) => {
      isDragging.current = true;
      isAutoScrolling.current = false; // pause auto-scroll on drag
      startX.current = e.pageX - track.offsetLeft;
      scrollLeft.current = track.scrollLeft;
      track.style.cursor = 'grabbing';
    };

    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      const x = e.pageX - track.offsetLeft;
      const walk = x - startX.current;
      track.scrollLeft = scrollLeft.current - walk;
    };

    const onMouseUpOrLeave = () => {
      isDragging.current = false;
      isAutoScrolling.current = true; // resume auto-scroll
      track.style.cursor = 'grab';
    };

    // Attach native listeners with passive: false for touch
    track.addEventListener('touchstart', onTouchStart, { passive: false });
    track.addEventListener('touchmove', onTouchMove, { passive: false });
    track.addEventListener('touchend', onTouchEnd);

    track.addEventListener('mousedown', onMouseDown);
    track.addEventListener('mousemove', onMouseMove);
    track.addEventListener('mouseup', onMouseUpOrLeave);
    track.addEventListener('mouseleave', onMouseUpOrLeave);

    // Initial cursor
    track.style.cursor = 'grab';

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      track.removeEventListener('touchstart', onTouchStart);
      track.removeEventListener('touchmove', onTouchMove);
      track.removeEventListener('touchend', onTouchEnd);

      track.removeEventListener('mousedown', onMouseDown);
      track.removeEventListener('mousemove', onMouseMove);
      track.removeEventListener('mouseup', onMouseUpOrLeave);
      track.removeEventListener('mouseleave', onMouseUpOrLeave);
    };
  }, []);

  return (
    <div className="carousel" ref={trackRef}>
      <div className="carousel-track">
        {[...images, ...images].map((img, index) => (
          <div key={index} className="carousel-slide">
            <img src={img} alt="client" className="carousel-img" draggable={false} />
          </div>
        ))}
      </div>
    </div>
  );
}
