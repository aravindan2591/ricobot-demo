import React, { useState } from "react";
import slides from "../data/slides"; // Import slide data
import "./Carousel.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  return (
    <div className="carousel-container">
      {/* Main Content */}
      <div className="carousel-wrapper">
        <button className="prev-btn" onClick={prevSlide}>
          ❮
        </button>
        <div
          className="carousel-content"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="carousel-slide"
              style={{
                backgroundImage: `url(${slide.background})`,
              }}
            >
              <div className="carousel-text">
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="next-btn" onClick={nextSlide}>
          ❯
        </button>
      </div>

      {/* Thumbnails */}
      <div className="carousel-thumbnails">
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.thumbnail}
            alt={slide.title}
            onClick={() => setCurrentSlide(index)}
            className={currentSlide === index ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
