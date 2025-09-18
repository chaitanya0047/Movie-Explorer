import React from 'react';
import CircularGallery from '../Components/CircularGallery'; // Make sure this path is correct

const Tribute = () => {
  return (
    <section className="movie-section">
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
          font="400 32px Figtree"
        />
      </div>
    </section>
  );
};

export default Tribute;