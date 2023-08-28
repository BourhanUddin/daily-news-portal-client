import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/Shored/Footer/Footer";
import Header from "../pages/Shored/Header/Header";
import LeftNav from "../pages/Shored/LeftNav";
import RightNav from "../pages/Shored/RightNav/RightNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}>
               <LeftNav></LeftNav>
            </Col>
          <Col lg={6}>
            <h2>main content coming soon ...!</h2>
          </Col>
          <Col lg={3}>
                <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
