import React from "react";

import redstar from "../assets/images/redstar.svg";
import greystar from "../assets/images/greystar.svg";

function Rating({rating}){
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="rating">
            {stars.map((star) => rating >= star ? (
                <img key={star.toString()} src={redstar} alt="symbole étoile" className="rating__image"/>
            ):(
                <img key={star.toString()} src={greystar} alt="symbole étoile" className="rating__image" />
            )
            )}
        </div>
    )
}

export default Rating