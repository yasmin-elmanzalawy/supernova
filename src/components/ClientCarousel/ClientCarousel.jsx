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
  const animationFrameId = useRef(null);

  const speed = 0.5;

  // Auto scroll loop
  const scroll = () => {
    if (!isDragging.current) { // only scroll when NOT dragging
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

    // Native touch event listeners to enable preventDefault on touchmove for iOS
    const onTouchStart = (e) => {
      isDragging.current = true;
      startX.current = e.touches[0].pageX - track.offsetLeft;
      scrollLeft.current = track.scrollLeft;
    };

    const onTouchMove = (e) => {
      if (!isDragging.current) return;
      const x = e.touches[0].pageX - track.offsetLeft;
      const walk = x - startX.current;
      track.scrollLeft = scrollLeft.current - walk;
      e.preventDefault(); // Prevent vertical scroll on iOS
    };

    const onTouchEnd = () => {
      isDragging.current = false;
    };

    // Add native listeners with passive: false so preventDefault works on iOS
    track.addEventListener('touchstart', onTouchStart, { passive: false });
    track.addEventListener('touchmove', onTouchMove, { passive: false });
    track.addEventListener('touchend', onTouchEnd);

    // Also add mouse event listeners for desktop dragging
    const onMouseDown = (e) => {
      isDragging.current = true;
      startX.current = e.pageX - track.offsetLeft;
      scrollLeft.current = track.scrollLeft;
    };
    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      const x = e.pageX - track.offsetLeft;
      const walk = x - startX.current;
      track.scrollLeft = scrollLeft.current - walk;
    };
    const onMouseUp = () => {
      isDragging.current = false;
    };
    const onMouseLeave = () => {
      isDragging.current = false;
    };

    track.addEventListener('mousedown', onMouseDown);
    track.addEventListener('mousemove', onMouseMove);
    track.addEventListener('mouseup', onMouseUp);
    track.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId.current);

      track.removeEventListener('touchstart', onTouchStart);
      track.removeEventListener('touchmove', onTouchMove);
      track.removeEventListener('touchend', onTouchEnd);

      track.removeEventListener('mousedown', onMouseDown);
      track.removeEventListener('mousemove', onMouseMove);
      track.removeEventListener('mouseup', onMouseUp);
      track.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div className="carousel" ref={trackRef}>
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
