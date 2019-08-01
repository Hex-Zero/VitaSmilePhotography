import React from "react"
import TopCarousel from "../components/TopCarousel"
import Cards from "../components/Cards"
import Weddings from "../assets/contentTXT/Weddings.js"
import baby from "../assets/contentTXT/baby.js"
import SideNavigation from "../components/SideNavigation"
import styled from "styled-components"
import portraitText from "../assets/contentTXT/portrait"
import partyText from "../assets/contentTXT/party"
import { WeddingArray, ParentsArray, PortraitArray, PartyArray } from "../assets/Arrays"

const Home = () => {
  return (
    <Styled>
      <SideNavigation />
      <TopCarousel style={{ marginTop: "56px" }} id="Weddings" src={WeddingArray} />
      <Cards name="Weddings" content1={Weddings} title1="Wedding Photograpy Peterborough" />

      <TopCarousel id="Party" src={PartyArray} />
      <Cards name="Parties and Events" content1={partyText} title1="Party Photogray Peterborough" />

      <TopCarousel id="BabyShowers" src={ParentsArray} />
      <Cards
        name="Newborn, Mathernity and Family"
        content1={baby}
        title1="Newborn Photography Peterborough"
      />

      <TopCarousel id="Portrait" src={PortraitArray} />
      <Cards name="Portrait" content1={portraitText} title1="Portrait Photography Peterborough " />
    </Styled>
  )
}
const Styled = styled.div`
  margin: 0 auto;
  width: 66.6%;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`

export default Home
