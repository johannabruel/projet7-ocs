import React, { useState } from "react";
import arrow from "../assets/images/Vector.svg";

function Collapse({textTitle, textDescription }){
    /* Création d'un Hook d'état
    avec création d'un state "open" et fonction pour mettre à jour ce state avec comme valeur initial False */
    const [open, setOpen] = useState(false);

    return (
        <div className="collapse">
            <button className="collapse__button">
                <h3 className="collapse__button--title">{textTitle}</h3>
                <img className={`collapse__button--arrow ${open}`} onClick={() => setOpen(!open)} src={arrow} alt="Flèche"/> 
            </button>

            {
                /* Si le collapse est true alors affichage de la description */
                open && <div className="collapse__description">{
                    Array.isArray(textDescription)? (
                        <ul className="collapselist">
                            {textDescription.map((equipement, index)=>(
                                <li className="collapselist__item" key={index}>
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