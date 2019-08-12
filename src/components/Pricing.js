import React from 'react'
import styled from 'styled-components'
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import voucher from '../assets/Pricing/vaucherWithRibbon.jpg'
const Pricing = () => {
	return (
		<Styled>
			<Card>
				<Card.Body>
					<h2>Pricing Table</h2>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>Photo Shoot</th>
								<th>Duration</th>
								<th>Hourly Rate</th>
								<th>Photo Amount</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Wedding</td>
								<td>2-4 hours</td>
								<td>70£</td>
								<td>20</td>
							</tr>
							<tr>
								<td>Family</td>
								<td>60-90 minutes</td>
								<td>85£</td>
								<td>20</td>
							</tr>
							<tr>
								<td>Maternity</td>
								<td>60-90 minutes</td>
								<td>85£</td>
								<td>20</td>
							</tr>
							<tr>
								<td>NewBorn</td>
								<td>60 minutes</td>
								<td>85£</td>
								<td>15</td>
							</tr>
							<tr>
								<td>Portrait</td>
								<td>1-2 hours</td>
								<td>85£</td>
								<td>15</td>
							</tr>
							<tr>
								<td>Event</td>
								<td>1-2 hours</td>
								<td>85£</td>
								<td>15</td>
							</tr>
							<tr>
								<td>Party</td>
								<td>1-2 hours</td>
								<td>85£</td>
								<td>15</td>
							</tr>
							<tr>
								<td>Mini-Shoots</td>
								<td>30-40 minutes</td>
								<td>set 65£</td>
								<td>15</td>
							</tr>
						</tbody>
					</Table>
					<br />
					<p>All photographs come loaded in a USB memory stick with no extra charges.</p>
					<hr />
					<p>
						Vouchers are a great gift for any occasion. Gift your love one's an
						opportunity to save their favorite moments. Gift Vouchers are available for
						every event and can be ordered over the phone. Vouchers can be sent to you
						by mail or picked up at my studio.
					</p>
					<Card.Img variant='top' src={voucher} />
					<hr />
				</Card.Body>
			</Card>
		</Styled>
	)
}
const Styled = styled.div`
	display: flexbox;
	justify-content: center;
	margin-top: 57px;
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
		.table {
			width: 100%;
		}
	}
	@media only screen and (min-width: 1040px) {
		.card {
			width: 1040px;
		}
	}
`

export default Pricing
