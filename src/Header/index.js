import React from "react";
import './header.css';
import { FaBars } from "react-icons/fa"


function Header({ brand , scrollTo}) {
    return (
        <header className='header'>
            <FaBars className="menuHamburguesa" onClick={()=>{
                const nav = document.getElementById('nav')
                if(nav.classList.contains('navHidden')){
                    nav.classList.add('navShow');
                    nav.classList.remove('navHidden')
                }else{
                    nav.classList.add('navHidden')
                }
            }}/>
            <nav className="navHidden" id='nav'>
                <h2 className="header__logo">{brand}</h2>
                <ul className="header__list">
                    <li className="header__list-item" onClick={()=>{scrollTo("#AboutSection")}}>About</li>
                    <li className="header__list-item" onClick={()=>{scrollTo("#MangaSection")}}>Mangas</li>
                    <li className="header__list-item" onClick={()=>{scrollTo("#FooterSection")}}>Contact</li>
                </ul>
            </nav>
        </header>
    )
}


export { Header };