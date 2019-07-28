import React, { useState } from "react"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import styled from "styled-components"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import AnchorLink from "react-anchor-link-smooth-scroll"

const SideNavigation = () => {
  const scrollList = ["#Weddings", "#Birthdays", "#Party", "#BabyShowers"]
  const [state, setstate] = useState(0)
  const arrayLength = scrollList.length - 1
  const scroll = d => {
    if (d === "down" && state !== arrayLength) {
      setstate(state + 1)
    } else if (d === "up" && state !== 0) {
      setstate(state - 1)
    }
  }

  return (
    <Styled>
      <ButtonGroup vertical>
        <AnchorLink
          as="button"
          className="btn btn-warning"
          onClick={() => scroll("up")}
          href={scrollList[state === 0 ? 0 : state - 1]}
          offset="56">
          <FaAngleUp />
        </AnchorLink>
        <AnchorLink
          as="button"
          className="btn btn-warning"
          onClick={() => scroll("down")}
          href={scrollList[state === arrayLength ? arrayLength : state + 1]}
          offset="56">
          <FaAngleDown />
        </AnchorLink>
      </ButtonGroup>
    </Styled>
  )
}
const Styled = styled.div`
  position: fixed;
  top: 380px;
  right: 0;
  z-index: 3001;

  .btn {
    border: solid 1px gray;
    background-color: rgba(0, 0, 0, 0.09);
    width: 40px;
    height: 40px;
  }
`
export default SideNavigation
