import React, { useEffect, useState } from "react";

import leftArrow from "../assets/images/vectorleft.svg";
import rightArrow from "../assets/images/vectorright.svg";

function Slideshow ({slides}){
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(slides.length)

    useEffect(()=> {
        setLength(slides.length)
    }, [slides])

    const next = () => {
        const lastSlide = currentIndex === slides.length -1;
        const newIndex = lastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const prev = () => {
        const firstSlide = currentIndex === 0;
        const newIndex = firstSlide ? slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);
    }

    return (
        <div className="carousel">
            <div className="carousel__wrapper">
                {length> 1 &&(
                    <button onClick={prev} className="left__arrow">
                        <img src={leftArrow} alt="Flèche gauche" className="left__arrow--image" />
                    </button>
                )}
                <div className="carousel__wrapper--content">
                    <div className="carousel__content">
                        {slides.map((slide, index) => (
                             <img src={slide} alt="hébergement" 
                             key={index} 
                             style={{transform:`translateX(-${currentIndex * 100}%)`,transition:`700ms ease-in-out`}}
                             className="carousel__content--image"/>
                            ))
                        }
                        <p className="carousel__content--compter">{currentIndex+1}/{slides.length}</p>
                    </div>
                </div>
                {length > 1 && (
                   <button onClick={next} className="right__arrow">
                        <img src={rightArrow} alt="Flèche droite" className="right__arrow--image" />
                    </button> 
                )}
            </div>
        </div>
    )
}
export default Slideshow