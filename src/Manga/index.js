import React from "react";
import './manga.css';
import { FaStar } from "react-icons/fa"


function Manga({ mangaDetails }) {
  return (
    <section className="manga-section" id="MangaSection">
      <div className="manga-section__container">
        <h2 className="manga-section__title">Manga recommendations</h2>
        <ul className="manga-section__ul">
          {
            mangaDetails.map((item,index) => (
              <li className="manga-section__items" key={index}>
                <a className="manga-section__link" href={item.url} target="_blank" rel="noreferrer">
                  <div className="manga-section__container-state">
                  <FaStar className="manga-section__fa-star"/>
                  <h3 className="manga-section__score">{item.score}</h3>
                  </div>
                  <img src={item.images.webp.image_url} alt={item.title} className="manga-section__img"></img>
                </a>
                  <h3 className="manga-section__mangaTitle" title={item.title}>{item.title}</h3>
                  
              </li>
            ))
          }

        </ul>
      </div>
    </section>
  );
}

export { Manga }
