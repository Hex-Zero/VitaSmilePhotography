import React from "react"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import styled from "styled-components"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
const SideNavigation = () => {
  return (
    <Styled>
      <ButtonGroup vertical>
        <Button href="#Weddings" variant="light">
          <FaAngleUp />
        </Button>
        <Button href="#Birthdays" variant="light">
          <FaAngleDown />
        </Button>
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
    background-color: rgba(0, 0, 0, 0.09);
    height: 45px;
  }
`
export default SideNavigation
