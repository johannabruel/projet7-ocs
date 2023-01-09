import React from "react";

function Banner({image, text}){
    return (
        <section className="banner">
            <img src={image} alt="Bannière accueil" className="banner__image" />
            <div className="banner__background"></div>
            <h1 className="banner__text">{text}</h1>
        </section>
    )
}

export default Banner