import moment from "moment";
import React from "react";
import { Button, Container } from "react-bootstrap";
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
     
    </Container>
  );
};

export default Header;
