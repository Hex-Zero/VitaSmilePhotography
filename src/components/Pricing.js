import React from "react"
import styled from "styled-components"
import Table from "react-bootstrap/Table"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import voucher from "../assets/Pricing/vaucherWithRibbon.png"
const Pricing = () => {
  return (
    <Styled>
      <Card>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Event</th>
                <th>Duration</th>
                <th>Hourly Rate</th>
                <th>Photos Per Hour</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Weddings</td>
                <td>2-6 hours</td>
                <td>120£</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Parties</td>
                <td>1-2 hours</td>
                <td>80£</td>
                <td>8</td>
              </tr>
              <tr>
                <td colSpan="2">Baby Showers</td>
                <td>90£</td>
                <td>9</td>
              </tr>
            </tbody>
          </Table>
          <hr />
          <Card.Img variant="top" src={voucher} />
        </Card.Body>
      </Card>
    </Styled>
  )
}
const Styled = styled.div`
  display: flexbox;
  justify-content: center;
  margin-top: 70px;
  width: 100%;
  text-align: center;

  .table {
    margin: 0 auto;
    width: 66.6%;
  }

  .card {
    width: 66.6%;
  }

  @media only screen and (max-width: 767px) {
    .card {
      width: 100%;
    }
  }
`

export default Pricing
