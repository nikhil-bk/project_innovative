import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.css"

export default function Carousel2({ slides }) {

    return (
        <Carousel data-bs-theme="light" >
            {slides.map((slide, idx) => (
                <Carousel.Item interval={2000}>
                    <img
                       style={{ width: "100%", height: "60vh" }}
                        src={slide}
                        alt={`slide ${idx.toString()}`}
                    />
                 

                </Carousel.Item>
            ))}


        </Carousel>
    );
}
