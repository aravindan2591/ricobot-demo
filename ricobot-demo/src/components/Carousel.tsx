import React, { useState } from "react";
import slides from "../data/slides";
import "./Carousel.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleThumbnailClick = (index: number) => {
    setCurrentSlide(index);  // Update the currentSlide state to highlight the clicked thumbnail
  };

  return (
    <div className="carousel-container">
      {/* Slide Section */}
      <div className="carousel-slide">
        <div
          className="slide-background"
          style={{
            backgroundImage: `linear-gradient(
                rgba(0, 0, 0, 0.75) 75%, 
                #000000 100%
              ),
              linear-gradient(
                to right,
                rgba(37, 45, 55, 0) 40%,
                #000000 72.92%,
                #09101A 100%
              ),
              url(${slides[currentSlide]?.background || "/assets/images/fallback.png"})`,
          }}
        ></div>

        {/* Slide Content */}
        <div className="slide-content">
          <div className="slide-text">
            <h4 className="section-title">MORE FROM <br />RICO THE DOG</h4>
            <div className="ribbon">RICO IS BACK!</div>
            <h1 className="slide-title">RICOBOT</h1>
            <p className="slide-description">
              Charge into a brand-new supersized adventure with RICO across <br />
              50 exciting and diverse worlds, available now on PS5!
            </p>
            <a
              href="https://playstation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="learn-more-btn"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>

      {/* Thumbnails Section */}
      <div className="thumbnail-container">
        {slides.map((slide, index) => (
          <div
            className={`thumbnail-wrapper ${index === currentSlide ? "active" : ""}`}
            key={slide.id}
            onClick={() => handleThumbnailClick(index)}
            role="button"
            tabIndex={0}
            aria-label={`Thumbnail for slide ${index + 1}`}
          >
            <img
              src={slide.thumbnail}
              alt={slide.title}
              className="thumbnail"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
