import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

export default function SeatGeek(props) {
    const { url, venue, performers, stats, title } = props.sGD;
    const noTicketStr = "No tickets currently available from this Vendor"

    return (
        <div>
            <Card style={{ width: '20rem' }}>
                <a href={url}><Card.Img variant="top" src={`${performers[0].image}`} /></a>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <hr></hr>
                    <a href={`https://google.com/maps/search/${venue.name_v2} ${venue.city} ${venue.country}`} target="_blank" without rel="noreferrer">
                        <span> @ {venue.name_v2}</span>
                    </a>
                    <Card.Text>
                        Price of Tickets:
                     </Card.Text>
                    {
                        stats.average_price == null ?
                            <span style={{ color: 'red' }}>
                                {noTicketStr}
                            </span> :
                            <div >
                                <Row>
                                    <Col for="low">Low</Col>
                                    <Col for="low">Average</Col>
                                    <Col for="low">High</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button href={url} variant="success">${stats.lowest_price}</Button>
                                    </Col>
                                    <Col>
                                        <Button href={url} name="averagePrice" variant="primary">${stats.average_price}</Button>
                                    </Col>
                                    <Col>
                                        <Button href={url} variant="danger">${stats.highest_price}</Button>
                                    </Col>
                                </Row>
                            </div>
                    }
                </Card.Body>
            </Card>

        </div>
    )
}
