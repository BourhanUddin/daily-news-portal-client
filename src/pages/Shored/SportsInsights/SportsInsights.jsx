import React from "react";
import { default as sports_pic1, default as sports_pic2, default as sports_pic3 } from "../../../assets/1.png";
import { Card, Col, Row } from "react-bootstrap";
const SportsInsights = () => {
  return (
    <>
      <Row xs={1} md={2} lg={1} className="g-4 mt-2">
        <Col>
          <Card>
            <Card.Img variant="top" src={sports_pic1} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={sports_pic2} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={sports_pic3} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SportsInsights;
