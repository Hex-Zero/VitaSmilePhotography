import React, { useState } from "react"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"
import weddingIcon from "../assets/sideIcons/marriage.png"
import birthdayIcon from "../assets/sideIcons/birthday-cake.png"
import dummy from "../assets/sideIcons/dummy.png"
import party from "../assets/sideIcons/party.png"

const SideNavigation = () => {
  const scrollList = ["#Weddings", "#Birthdays", "#Party", "#BabyShowers"]
  //   const [state, setstate] = useState(0)
  //   const arrayLength = scrollList.length - 1
  //   const scroll = d => {
  //     if (d === "down" && state !== arrayLength) {
  //       setstate(state + 1)
  //     } else if (d === "up" && state !== 0) {
  //       setstate(state - 1)
  //     }
  //   }

  return (
    <Styled>
      <ButtonGroup vertical>
        <AnchorLink
          as="button"
          className="btn btn-warning"
          // onClick={() => scroll("up")}
          // href={scrollList[state === 0 ? 0 : state - 1]}
          href={scrollList[0]}
          offset="56">
          <img src={weddingIcon} alt="" />
        </AnchorLink>
        <AnchorLink
          as="button"
          className="btn btn-warning"
          // onClick={() => scroll("down")}
          // href={scrollList[state === arrayLength ? arrayLength : state + 1]}
          href={scrollList[1]}
          offset="56">
          <img src={birthdayIcon} alt="" />
        </AnchorLink>
        <AnchorLink
          as="button"
          className="btn btn-warning"
          // onClick={() => scroll("down")}
          // href={scrollList[state === arrayLength ? arrayLength : state + 1]}
          href={scrollList[2]}
          offset="56">
          <img src={party} alt="" />
        </AnchorLink>
        <AnchorLink
          as="button"
          className="btn btn-warning"
          // onClick={() => scroll("down")}
          // href={scrollList[state === arrayLength ? arrayLength : state + 1]}
          href={scrollList[3]}
          offset="56">
          <img src={dummy} alt="" />
        </AnchorLink>
      </ButtonGroup>
    </Styled>
  )
}
const Styled = styled.div`
  img {
    width: 14px;
  }
  position: fixed;
  top: 380px;
  right: 0;
  z-index: 3001;

  .btn {
    border: solid 1px hsl(60, 59%, 51%);
    background-color: rgba(0, 0, 0, 0.09);
    width: 40px;
    height: 40px;
  }
`
export default SideNavigation
