import React from "react"
import "./App.css"
import Navigation from "./components/Navigation"
import TopCarousel from "./components/TopCarousel"
import Cards from "./components/Cards"
import Weddings from "./assets/contentTXT/Weddings.js"
import SideNavigation from "./components/SideNavigation"

const App = () => {
  return (
    <>
      <Navigation />
      <TopCarousel style={{ marginTop: "56px" }} id="Weddings" />
      <Cards name="Weddings" content={Weddings} />
      <TopCarousel id="Birthdays" />
      <Cards name="Birthdays" content={Weddings} />

      <SideNavigation />
    </>
  )
}

export default App
