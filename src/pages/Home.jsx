import React from "react";
import { Link } from "react-router-dom";

import Banner from "../components/Banner";
import Card from "../components/Card";

import logements from "../assets/api/logements.json";

import imageBanner from "../assets/images/banner.jpg";

function HomePage() {
    return (
        <main>
            <Banner image={imageBanner} text="Chez vous, partout et ailleurs"/>
            
            <section className="cards">
                <div className="articles">
                    {logements.map((logement)=>{
                        return (
                            <article key={logement.id} className="article">
                                <Link to={`/logements/${logement.id}`} className="article__link">
                                    <Card title={logement.title} image={logement.cover} alt={logement.title}/>
                                </Link>
                            </article>
                        )
                    })}
                </div>
            </section>

        </main>
    );
};

export default HomePage;