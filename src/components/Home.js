import React from "react";
import TopCarousel from "../components/TopCarousel";
import Cards from "../components/Cards";
import Weddings from "../assets/contentTXT/Weddings.js";
import baby from "../assets/contentTXT/baby.js";
import SideNavigation from "../components/SideNavigation";
import styled from "styled-components";
import portraitText from "../assets/contentTXT/portrait";
import partyText from "../assets/contentTXT/party";
import eventText from "../assets/contentTXT/event";
import maternityText from "../assets/contentTXT/maternity";
import familyText from "../assets/contentTXT/family";
import {
  WeddingArray,
  PartyArray,
  ParentsArray,
  PortraitArray
} from "../assets/Arrays";

const Home = () => {
  return (
    <Styled>
      <SideNavigation />
      <TopCarousel id="Weddings" src={WeddingArray} />
      <Cards
        name="Weddings"
        content1={Weddings}
        title1="Wedding Photography Peterborough"
      />
      <TopCarousel id="Party" src={PartyArray} />
      <Cards
        name="Parties and Events"
        title1="Party Photography Peterborough"
        content1={partyText}
        devider1={true}
        title2="Event Photography Peterborough"
        content2={eventText}
      />
      <TopCarousel id="BabyShowers" src={ParentsArray} />
      <Cards
        name="Newborn, Maternity and Family"
        title1="Newborn Photography Peterborough"
        content1={baby}
        devider1={true}
        title2="Maternity Photography Peterborough"
        content2={maternityText}
        devider2={true}
        title3="Family Photography Peterborough"
        content3={familyText}
      />
      <TopCarousel id="Portrait" src={PortraitArray} />
      <Cards
        name="Portrait"
        content1={portraitText}
        title1="Portrait Photography Peterborough "
      />
    </Styled>
  );
};
const Styled = styled.div`
  margin: 0 auto;

  padding-top: 109px;
  width: 66.6%;
  @media only screen and (max-width: 767px) {
    padding-top: 91px;
    width: 100%;
  }
  @media only screen and (min-width: 1040px) {
    width: 1040px;
  }
`;

export default Home;
