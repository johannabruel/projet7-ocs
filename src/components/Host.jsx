import React from "react";

function Host({host}){
    const hostSplited = host.name.split(" ");
    const [firstname, lastname] = hostSplited;

    return (
        <div className="host">
            <div className="host__name">
                <p className="host__name--firstname">{firstname.trim()}</p>
                <p className="host__name--lastname">{lastname.trim()}</p>
            </div>
            
            <img src={host.picture} alt="Hote" className="host__image" />
        </div>
    )
}

export default Host