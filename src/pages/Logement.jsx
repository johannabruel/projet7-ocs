import React from "react";
import { useParams } from "react-router";

import logements from "../assets/api/logements.json"
import Collapse from "../components/Collapse";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Tags from "../components/Tags";

function Logement() {
    const { logementId } = useParams();
    const logement = logements.find((logement)=>logement.id ===logementId)
    const {title, location, host, rating, description, equipments}= logement;
    
    return (
        <main className="containerLogement">
            <section className="logement">
                <div className="logement__header">
                    <h1 className="logement__header--title">{title}</h1>
                    <h2 className="logement__header--location">{location}</h2>
                    <div className="logement__header--tags">
                        {logement.tags.map((tag, index)=>(
                            <Tags key={`logement_tag-${index}`} textTag={tag}/>
                        ))}
                    </div>
                </div>
                <div className="logement__plus">
                    <Host host={host}/>
                    <Rating rating={rating}/>
                </div>
                
            </section>
            
            <section>
                <Collapse textTitle={"Description"} textDescription={description}/>
                <Collapse textTitle={"Equipements"} textDescription={equipments}/>
            </section>
        </main>
    );
};

export default Logement;