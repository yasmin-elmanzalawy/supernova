import React, { useRef, useEffect } from 'react';
import './ClientCarousel.css';
import gb from '../../assets/gb.png';
import playhera from '../../assets/playhera.png';
import frenzy from '../../assets/frenzy.png';
import games from '../../assets/games.png';
import arena from '../../assets/arena.png';
import esportsga from '../../assets/esportsga.png';
import tealflamingo from '../../assets/tealflamingo.png';

export default function ClientCarousel() {
  const logos = [gb, playhera, frenzy, games, arena, esportsga, tealflamingo];
  const repeatedLogos = [...logos, ...logos];  // Duplicate logos to create infinite loop effect

  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
    containerRef.current.classList.add('grabbing');
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    containerRef.current.classList.remove('grabbing');
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    containerRef.current.classList.remove('grabbing');
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Scroll speed multiplier
    containerRef.current.scrollLeft = scrollLeft.current - walk;

    // Check if the user reached the end or start, and teleport the scroll position
    const scrollPosition = containerRef.current.scrollLeft;
    const totalWidth = containerRef.current.scrollWidth / 2;

    if (scrollPosition <= 0) {
      containerRef.current.scrollLeft = totalWidth - 1;  // Jump to the end
    } else if (scrollPosition >= totalWidth) {
      containerRef.current.scrollLeft = 1;  // Jump to the start
    }
  };

  useEffect(() => {
    // If dragging is false, reset scroll to keep infinite scroll working smoothly
    const container = containerRef.current;
    container.addEventListener('scroll', () => {
      if (container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollWidth / 2 - 1;
      } else if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 1;
      }
    });
  }, []);

  return (
    <div
      className="carousel-wrapper no-scrollbar"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {repeatedLogos.map((logo, index) => (
        <div key={index} className="carousel-item">
          <img src={logo} alt={`Client ${index % logos.length}`} />
        </div>
      ))}
    </div>
  );
}
