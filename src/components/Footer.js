import React from "react"
import styled from "styled-components"
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <Styled>
      <FaFacebookSquare size={32} /> Facebook <FaInstagram size={32} /> Instagram{" "}
      <FaTwitter size={32} /> Twitter
    </Styled>
  )
}

const Styled = styled.div`
  background-color: #f8f8f8;
  border-top: 1px solid #e7e7e7;
  text-align: center;
  padding: 20px;
  height: 75px;
  width: 100%;
`

export default Footer
