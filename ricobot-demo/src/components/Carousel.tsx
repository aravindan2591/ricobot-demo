import React, { useState } from "react";
import classNames from "classnames";
import slides from "../data/slides";
import "./Carousel.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Utility function to handle thumbnail click
  const handleThumbnailClick = (index: number) => {
    setCurrentSlide(index);
  };

  // Get the current slide data
  const currentSlideData = slides[currentSlide] || slides[0];

  return (
    <div className="carousel-container">
      {/* Slide Section */}
      <div className="carousel-slide">
        {/* Background Image */}
        <div
          className="slide-background"
          style={{
            backgroundImage: `url(${currentSlideData?.background })`,
          }}
        ></div>

        {/* Foreground Image */}
        <div
          className="slide-foreground"
          style={{
            backgroundImage: `url(${currentSlideData?.foreground })`,
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
            className={classNames("thumbnail-wrapper", { active: index === currentSlide })}
            key={slide.id || index}
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
