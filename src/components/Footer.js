import React from "react";
import styled from "styled-components";
import reactlo from "../assets/reactlogo.png";
const Footer = () => {
  return (
    <Styled>
      <img src={reactlo} alt="React" />
    </Styled>
  );
};
const Styled = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto;
  background: linear-gradient(
    0deg,
    rgba(1, 2, 97, 0.92) 0%,
    rgba(4, 5, 117, 1) 20%,
    rgb(0, 26, 212) 100%
  ) !important;
  height: 45px;
  align-content: center;
  text-align: center;
  a:link {
    text-decoration: none;
    border-radius: 5px;
  }
  a {
    margin-right: 14px;
    text-align: end;
    margin-bottom: 0;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }
  #Hex {
    margin-left: 4px;
    text-decoration: none;
    font-family: "Lobster", cursive;
    border-color: gold;
    border-style: solid;
    background-color: gold;
    color: rgba(248, 236, 221, 1);
  }
  #Zero {
    text-decoration: none;
    font-family: "Lobster", cursive;
    border-color: gold;
    border-style: solid;
    background-color: rgba(248, 236, 221, 1);
    color: gold;
  }
  img {
    margin-left: 14px;
    margin-bottom: 3px;
    padding: 3px 0px;
    width: 30px;
    height: 30px;
    padding-right: 4px;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  @media only screen and (min-width: 1040px) {
    width: 1040px;
  }
`;
export default Footer;
