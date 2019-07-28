import React from "react"
import Navigation from "./components/Navigation"
import TopCarousel from "./components/TopCarousel"
import Cards from "./components/Cards"
import Weddings from "./assets/contentTXT/Weddings.js"
import SideNavigation from "./components/SideNavigation"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <SideNavigation />
      <Navigation />
      <TopCarousel style={{ marginTop: "56px" }} id="Weddings" />
      <Cards name="Weddings" content={Weddings} />
      <TopCarousel id="Birthdays" />
      <Cards name="Birthdays" content={Weddings} />
      <TopCarousel id="Party" />
      <Cards name="Party" content={Weddings} id="Footer" />
      <TopCarousel id="BabyShowers" />
      <Cards name="BabyShowers" content={Weddings} />
      <Footer />
    </>
  )
}

export default App
