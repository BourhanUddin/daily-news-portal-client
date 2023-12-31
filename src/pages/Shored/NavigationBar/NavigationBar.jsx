import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut =()=>{
    logOut()
    .then()
    .catch(error =>console.log(error));
  }
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Nav className="mx-auto  fw-bold">
            <Link className="text-decoration-none p-2 text-black" to={"/category/0"}>
              Home
            </Link>
            <Link className="text-decoration-none p-2 text-black">Career</Link>
            <Link to={"/about"} className="text-decoration-none p-2 text-black">About</Link>
          </Nav>

          {user && (
            <Nav.Link className="nav-manu" href="#deets">
              <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
              <h6>{user.displayName}</h6>
            </Nav.Link>
          )}

          {user ? (
            <Button onClick={handleLogOut} variant="secondary">Logout</Button>
          ) : (
            <Link to={"/login"}>
              <Button variant="secondary">Login</Button>
            </Link>
          )}
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
