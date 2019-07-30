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
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
          <Button variant="primary">Go somewhere</Button>
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
