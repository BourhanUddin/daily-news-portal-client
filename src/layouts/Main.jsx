import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shored/Footer/Footer";
import Header from "../pages/Shored/Header/Header";
import LeftNav from "../pages/Shored/LeftNav/LeftNav";
import NavigationBar from "../pages/Shored/NavigationBar/NavigationBar";
import RightNav from "../pages/Shored/RightNav/RightNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Container>
        <Row>
          <Col lg={3}>
               <LeftNav></LeftNav>
            </Col>
          <Col lg={6}>
            <Outlet></Outlet>
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
