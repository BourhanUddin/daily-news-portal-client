import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import bg from '../../../assets/bg.png';
import Qzone from "../Qzone/Qzone";

const RightNav = () => {
  const {auth} = useContext(AuthContext);
  const handleSignInWithGoogle=()=>{
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth , provider )
    .then((result=>{
      const user = result.user;
      console.log(user);
    }))
    .catch((error=>{
      console.log(error.message);
    }))
  }
  return (
    <>
      <div className="text-left mt-5 border rounded p-3">
        <p className="fw-bold">Login With</p>
        <Button onClick={handleSignInWithGoogle} className="text-center px-4" variant="outline-secondary">
          <span className="pe-2"> <FaGoogle /></span>
          Login With Google
        </Button>
        <Button className="text-center mt-2 px-4" variant="outline-secondary">
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
      <div className="">
        <img src={bg} alt=""  />
      </div>
    </>
  );
};

export default RightNav;
