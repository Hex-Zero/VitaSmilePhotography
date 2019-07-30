import React from "react"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"
import weddingIcon from "../assets/sideIcons/marriage.png"
import dummy from "../assets/sideIcons/dummy.png"
import party from "../assets/sideIcons/party.png"
import portrait1 from "../assets/sideIcons/portrait1.png"

const SideNavigation = () => {
  const scrollList = ["#Weddings", "#Party", "#BabyShowers", "#Portrait"]
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
          className="btn btn-indigo"
          // onClick={() => scroll("up")}
          // href={scrollList[state === 0 ? 0 : state - 1]}
          href={scrollList[0]}
          offset="56">
          <img src={weddingIcon} alt="" />
        </AnchorLink>
        <AnchorLink
          as="button"
          className="btn btn-indigo"
          // onClick={() => scroll("down")}
          // href={scrollList[state === arrayLength ? arrayLength : state + 1]}
          href={scrollList[1]}
          offset="56">
          <img className="imgStyle" src={party} alt="" />
        </AnchorLink>
        <AnchorLink
          as="button"
          className="btn btn-indigo btnStyle"
          // onClick={() => scroll("down")}
          // href={scrollList[state === arrayLength ? arrayLength : state + 1]}
          href={scrollList[2]}
          offset="56">
          <img className="imgStyle" src={dummy} alt="" />
        </AnchorLink>
        <AnchorLink
          as="button"
          className="btn btn-indigo btnStyle"
          // onClick={() => scroll("down")}
          // href={scrollList[state === arrayLength ? arrayLength : state + 1]}
          href={scrollList[3]}
          offset="56">
          <img className="imgStyle" src={portrait1} alt="" />
        </AnchorLink>
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
  z-index: 3001;

  .btn {
    border: solid 1px #1f0352;
    background-color: rgba(255, 255, 255, 0.9);
    width: 43px;
    height: 43px;
  }
`
export default SideNavigation
