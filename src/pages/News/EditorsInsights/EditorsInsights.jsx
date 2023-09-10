import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { default as E_I_pic1, default as E_I_pic2, default as E_I_pic3 } from '../../../assets/1.png';



const EditorsInsights = () => {

  return (
    <>
      <Row xs={1} md={2} lg={3} className="g-4 mt-4">
          <Col >
            <Card>
              <Card.Img variant="top" src={E_I_pic2} />
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
          <Col >
            <Card>
              <Card.Img variant="top" src={E_I_pic3} />
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
          <Col >
            <Card>
              <Card.Img variant="top" src={E_I_pic1} />
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

export default EditorsInsights;
