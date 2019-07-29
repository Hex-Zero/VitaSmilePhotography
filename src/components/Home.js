import React from "react"
import TopCarousel from "../components/TopCarousel"
import Cards from "../components/Cards"
import Weddings from "../assets/contentTXT/Weddings.js"
import SideNavigation from "../components/SideNavigation"

const Home = () => {
  return (
    <>
      <SideNavigation />
      <TopCarousel style={{ marginTop: "56px" }} id="Weddings" />
      <Cards name="Weddings" content={Weddings} />
      <TopCarousel id="Birthdays" />
      <Cards name="Birthdays" content={Weddings} />
      <TopCarousel id="Party" />
      <Cards name="Party" content={Weddings} id="Footer" />
      <TopCarousel id="BabyShowers" />
      <Cards name="BabyShowers" content={Weddings} />
    </>
  )
}

export default Home
