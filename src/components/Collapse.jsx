import React, { useState } from "react";
import arrow from "../assets/images/Vector.svg";

function Collapse({textTitle, textDescription }){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="collapse">
            <button className="collapse__button" onClick={() => setIsOpen(!isOpen)}>
                <h3 className="collapse__button--title">{textTitle}</h3>
                <img className={`collapse__button--arrow ${isOpen}`} 
                src={arrow} 
                alt="Flèche"/> 
            </button>
            {
                <div className={`collapse__description ${isOpen ? 'open' : 'closed'}`}>{
                    Array.isArray(textDescription)? (
                        <ul className="collapselist">
                            {textDescription.map((equipement, index)=>(
                                <li className="collapselist__item" key={`collapselist-${index}`}>
                                    {equipement}
                                </li>
                            ))}
                        </ul>
                    ):
                    (
                        <p className="collapsetext">{textDescription}</p>
                    )}
                </div>
            }
        </div> 
    )
}
export default Collapse