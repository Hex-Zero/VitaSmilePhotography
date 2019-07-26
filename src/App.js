import React from "react"
import "./App.css"
import Navigation from "./components/Navigation"
import TopCarousel from "./components/TopCarousel"
import Cards from "./components/Cards"
import Weddings from "./assets/contentTXT/Weddings.js"

const App = () => {
  return (
    <>
      <Navigation />
      <TopCarousel />
      <Cards header="Weddings" content={Weddings} />
      <TopCarousel />
      <Cards header="Birthdays" content={Weddings} />
    </>
  )
}

export default App
