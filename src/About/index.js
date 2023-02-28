import React from "react";
import './about.css';
import { FaBookOpen, FaExclamation } from "react-icons/fa"


function About() {
    return (
        <section className="about-us" id="AboutSection">
            <div className="about-us__container">
                <div alt={'One Piece'} className="about-us__img"></div>
                <p className="about-us__p">Enjoy a wide variety of mangas with us!</p>

                <ul className="about-us__service">
                    <li className="about-us__service-item">
                        <div>
                            <FaExclamation className="fa-exclamation" />
                            <span>Read a variety of mangas/manhwa</span>
                        </div>

                    </li>
                    <li className="about-us__service-item">
                        <div>
                            <FaBookOpen className="fa-book-open" />
                            <span>with a high quality resolution!</span>
                        </div>

                    </li>
                </ul>
            </div>
        </section>
    )
}



export { About }