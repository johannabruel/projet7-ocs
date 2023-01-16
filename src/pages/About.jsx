import React from "react";

import Banner from "../components/Banner";

import imageBannerAbout from "../assets/images/banner-about.jpg"
import Collapse from "../components/Collapse";

import texts from "../assets/api/textData.json"

function About() {
    return (
        <main>
            <Banner image={imageBannerAbout} text=""/>
            <section className="sectionAbout">
                {texts.map((text, index)=>{
                    return (
                        <Collapse key={`collapse_about-${index}`} textTitle={text.title} textDescription={text.description}/>
                    )
                })}
            </section>
        </main>
    );
};

export default About;