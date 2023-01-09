import React from "react";

function Collapse({text}){
    return (
        <section className="collapse">
            <button className="collapse__button"></button>
            <p></p>

            <div className="collapse__container">
                <ul>
                    <li>{text}</li>
                </ul>

            </div>
            
        </section>
    )
}
export default Collapse