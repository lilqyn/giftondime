import React, { useState, useEffect } from 'react';
// import images from './images'
import './Slideshow'

const Slideshow = () => {
  // Array of image filenames
  const images = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, );

  // Handlers for manual navigation
  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  return (
    <div style={{ 
      width: '500px', 
      height: '300px', 
      position: 'relative', 
      overflow: 'hidden', 
      margin: 'auto' 
    }}>
      {/* Image display */}
      <img
        src={require(`${images[currentIndex]}`)}
        alt={`Slide ${currentIndex + 1}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />

      {/* Prev Button */}
      <button
        onClick={handlePrev}
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
          borderRadius: '50%'
        }}
      >
        &#8592;
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
          borderRadius: '50%'
        }}
      >
        &#8594;
      </button>
    </div>
  );
};

export default Slideshow;