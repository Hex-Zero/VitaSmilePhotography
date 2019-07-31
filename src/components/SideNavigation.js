import React from "react"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Weddings from "../assets/sideIcons/marriage.png"
import BabyShowers from "../assets/sideIcons/dummy.png"
import Party from "../assets/sideIcons/party.png"
import Portrait from "../assets/sideIcons/portrait1.png"

const SideNavigation = () => {
  const scrollList = ["#Weddings", "#Party", "#BabyShowers", "#Portrait"]
  const icons = [Weddings, Party, BabyShowers, Portrait]
  let index = -1
  return (
    <Styled>
      <ButtonGroup vertical>
        {scrollList.map(current => {
          index++
          return (
            <AnchorLink
              key={current.slice(1)}
              as="button"
              className="btn btn-indigo"
              href={current}
              offset="56">
              <img src={icons[index]} alt={current.slice(1)} />
            </AnchorLink>
          )
        })}
      </ButtonGroup>
    </Styled>
  )
}
const Styled = styled.div`
  .btn-info {
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;
  }
  .imgStyle {
    width: 19px;
  }
  img {
    width: 16px;
  }
  position: fixed;
  top: 380px;
  right: 0;
  z-index: 30;

  .btn {
    border: solid 1px #1f0352;
    background-color: rgba(255, 255, 255, 0.9);
    width: 43px;
    height: 43px;
  }
`
export default SideNavigation
