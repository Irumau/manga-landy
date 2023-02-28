import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { Header } from "../Header/";
import { Home } from "../Home/index"
import { About } from "../About";
import { Manga } from "../Manga";
import { Loading } from "../Loading";
import { Footer } from "../Footer";

gsap.registerPlugin(ScrollToPlugin);

function App() {
  // Connection with the API
  const API = 'https://api.jikan.moe/v4/manga?limit=10&min_score=9&type=manga'
  const mangaData = async (url) => {
    const response = await fetch(url)
    const data = await response.json();
    return data;
  }

  //Animation with GSAP this function is send like a parameter for Header component
  const scrollTo = (sectionName) => {
    gsap.to(window, { duration: 1, scrollTo: { y: sectionName } })
    const nav = document.getElementById('nav')
    nav.classList.add('navHidden')
    nav.classList.remove('navShow')
  }

  // States for save the mangaDetails from API
  const [mangaDetails, setMangaDetails] = React.useState([]);
  //State for make a loading screen
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const fetchDataImg = async () => {
      const MangaFetchData = await mangaData(API)
      const manga = MangaFetchData.data;
      setMangaDetails(manga);
    }
    fetchDataImg();
  }, [])

  if (loading) {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
    return (
      <Loading brand={'MangaLandy'} />
    )
  }
  else {
    return (
      <React.Fragment>
        <Header brand={'MangaLandy'} scrollTo={scrollTo} />
        <Home brand={'MangaLandy'} />
        <About />
        <Manga mangaDetails={mangaDetails} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
