import React from "react";

function Card ({image, title, alt}){
    return (
        <figure className="card">
            <img src={image} alt={alt} className="card__image"/>
            <div className="card__background"></div>
            <figcaption className="card__figcaption">
                <h2 className="card__figcaption--title">{title}</h2>
            </figcaption>
        </figure>
    )
}

export default Card