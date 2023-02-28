import React from "react";
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import logo from "../img/Mangalandy.png"

import './footer.css';


function Footer() {
    return (
        <footer className="footer-section" id="FooterSection">
            <div className="footer-section__container">
                <img className="footer-section__logo" src={logo} alt="MangaLandyLogo"></img>
                <h3 className="footer-section__thanks"><a href="https://jikan.moe/">Jikan</a></h3>
                <ul className="footer-section__list">
                    <li className="footer-section__redes ">
                        <a href="https://www.linkedin.com/in/mauricio-vera-6b621b248/" target="_blank" rel="noreferrer">
                            <FaLinkedin className="footer-section__redes-icon"/> Linkedin
                        </a>
                    </li>
                    <li className="footer-section__redes">
                        <a href="https://github.com/Irumau" target="_blank" rel="noreferrer">
                            <FaGithub className="footer-section__redes-icon"/> GitHub
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export { Footer }