import React from "react";

import './home.css';


function Home({brand}){
    return(
        <section className="home">
            <div className="home__Logo"></div>
            <h1 className="home__title">{brand}</h1>
            <div className="home__scroll-arrow"></div>
            <div className="home__scroll-arrow"></div>
        </section>
    )   
}

export { Home }