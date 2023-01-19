import React from "react";
import { Navigate, useParams } from "react-router-dom";

import Logements from "../assets/api/logements.json"
import Collapse from "../components/Collapse";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Slideshow from "../components/Slideshow";
import Tags from "../components/Tags";

function Logement() {
    const { logementId } = useParams(); // Récupère ID 
    const logementArray= Logements.filter((element)=>element.id ===logementId); // Recherche de l'objet dans BD
    
   const logement= logementArray.length === 1 ? logementArray[0] : null; // Vérifie si correspond a un seul logement sinon null
    window.scrollTo(0,0);
    
    return logement ? ( // Si le logement existe
        <main className="containerLogement">
            <section>
                <Slideshow slides={logement.pictures}/>
            </section>
            <section className="logement">
                <div className="logement__header">
                    <h1 className="logement__header--title">{logement.title}</h1>
                    <h2 className="logement__header--location">{logement.location}</h2>
                    <div className="logement__header--tags">
                        {logement.tags.map((tag, index)=>(
                            <Tags key={`logement_tag-${index}`} textTag={tag}/>
                        ))}
                    </div>
                </div>
                <div className="logement__plus">
                    <Host host={logement.host}/>
                    <Rating rating={logement.rating}/>
                </div>
                
            </section>
            
            <section className="collapseLogement">
                <div className="collapseLogement__container">
                    <Collapse textTitle={"Description"} textDescription={logement.description} />
                </div>
                <div className="collapseLogement__container">
                    <Collapse textTitle={"Equipements"} textDescription={logement.equipments} />
                </div>
            </section>
        </main>
    ) :
    ( //Si le logement n'existe pas, redirection sur la page error
        <Navigate to="/error" />
    );
    
    
};

export default Logement;