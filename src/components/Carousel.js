import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.css"

export default function CarouselComponent({ slides }) {

  return (
    <Carousel data-bs-theme="light" >
      {slides.map((slide, idx) => (
        <Carousel.Item interval={3000}>
          <img
            style={{ width: "100%" }}
            className="laptop-device"
            src={slide}
            alt={`slide ${idx.toString()}`}
          />
          <img
            style={{ width: "100%" }}
            className="mobile-device"
            src={slide}
            alt={`slide ${idx.toString()}`}
          />
          <Carousel.Caption style={{ width: 'fit-content top-30 left-10' }}>
            <div className="text box-shadow-3 bg-dark p-3 opacity-75 d-flex flex-column justify-content-center" style={{ width: 'fit-content' }}>
              <h4 >Let US take charge of all YOUR Electrical needs</h4>
              <p >With a Class-1 Electrical Contractor and Panel Board Manufacturers</p>
            </div>

          </Carousel.Caption>
        </Carousel.Item>
      ))}


    </Carousel>
  );
}
