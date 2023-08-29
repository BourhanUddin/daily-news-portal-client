import moment from "moment";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import logo from "../../../assets/logo2.png";
import './Header.css';
const Header = () => {
  return (
    <Container>
      <div className="div text-center">
        <img className="mt-4" src={logo} alt="" />
        <h5 className="mt-2 text-secondary">
          Your Source for Today's News, Tomorrow's Insights.
        </h5>
        <h4>{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</h4>
      </div>
      <div className="d-flex mt-5 bg-secondary rounded-1 p-1">
        <Button variant="danger p-1 ">Latest</Button>
        <Marquee speed={90}>
          <h5 className="text-white ">
            Stay tuned for more details as we uncover the latest revelations in
            this groundbreaking discovery. Our dedicated team is working around
            the clock to bring you the most accurate and up-to-date information
          </h5>
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto fw-bold">
            <Nav.Link className="nav-manu"  href="#features">Home</Nav.Link>
            <Nav.Link className="nav-manu" href="#pricing">About</Nav.Link>
            <Nav.Link className="nav-manu" href="#career">Career</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="nav-manu" href="#deets">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="secondary">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
};

export default Header;
