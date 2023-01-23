import React, { useState } from "react";
import arrow from "../assets/images/Vector.svg";

function Collapse({textTitle, textDescription }){
    const [open, setOpen] = useState(false);
    return (
        <div className="collapse">
            <button className="collapse__button">
                <h3 className="collapse__button--title">{textTitle}</h3>
                <img className={`collapse__button--arrow ${open}`} 
                onClick={() => setOpen(!open)} 
                src={arrow} 
                alt="Flèche"/> 
            </button>
            {
                open && <div className="collapse__description">{
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
                        <p>{textDescription}</p>
                    )}
                </div>
            }
        </div> 
    )
}
export default Collapse