import React from "react"
import styled from "styled-components"
import { FaFacebookSquare } from "react-icons/fa"
import instaIcon from "../assets/sideIcons/instagram.png"
import instaDark from "../assets/sideIcons/instaDark.png"

const SocialMedia = () => {
  return (
    <Styled>
      <a
        className="facebook"
        href="https://www.facebook.com/vitasmilephotography/"
        target="_blank"
        rel="noopener noreferrer">
        <FaFacebookSquare size={43} />
      </a>
      <a
        className="instagram"
        href="https://urlgeni.us/instagram/vita.smile"
        target="_blank"
        rel="noopener noreferrer">
        i
      </a>
    </Styled>
  )
}

const Styled = styled.div`
  .facebook {
    width: 44px;
    display: block;
    position: fixed;
    right: 1px;
    top: 503px;
  }
  .instagram {
    -webkit-text-fill-color: transparent;
    width: 44px;
    padding: 11px;
    display: block;
    position: fixed;
    right: 0;
    top: 547px;
    background: url(${instaIcon});
    background-size: 41px;
    background-repeat: no-repeat;
  }
  .instagram:hover {
    background: url(${instaDark});
    background-size: 41px;
    background-repeat: no-repeat;
  }
  .a {
    padding-right: 10px;
  }
`

export default SocialMedia
