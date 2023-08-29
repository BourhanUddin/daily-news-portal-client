import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
const RightNav = () => {
  return (
    <>
      <div className="text-left mt-5 border rounded p-3">
        <p className="fw-bold">Login With</p>
        <Button className="text-center px-4" variant="outline-secondary">
          {" "}
          <span className="pe-2"> <FaGoogle /></span>
          Login With Google
        </Button>
        <Button className="text-center mt-2 px-4" variant="outline-secondary">
          {" "}
          <span className="pe-2">
            <FaGithub />
          </span>
          Login With Github
        </Button>
      </div>
      <div className=" mt-4">
        <h5 className="ps-3">Find Us On</h5>
        <ListGroup as="ul">
          <ListGroup.Item as="li"><span className="pe-2"> <FaFacebook /></span>  facebook</ListGroup.Item>
          <ListGroup.Item as="li"><span className="pe-2"> <FaTwitter /></span>  Twitter</ListGroup.Item>
          <ListGroup.Item as="li"><span className="pe-2"> <FaInstagram /></span>  Instagream</ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>
    </>
  );
};

export default RightNav;
