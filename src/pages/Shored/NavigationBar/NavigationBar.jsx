import React, { useCallback, useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Nav className="mx-auto  fw-bold">
            <Link className="text-decoration-none p-2 text-black" to={"/category/0"}>
              Home
            </Link>
            <Link className="text-decoration-none p-2 text-black">About</Link>
            <Link className="text-decoration-none p-2 text-black">Career</Link>
          </Nav>

          {user && (
            <Nav.Link className="nav-manu" href="#deets">
              <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
              <h6>{user.displayName}</h6>
            </Nav.Link>
          )}

          {user ? (
            <Button variant="secondary">Logout</Button>
          ) : (
            <Link to={"/login"}>
              {" "}
              <Button variant="secondary">Login</Button>
            </Link>
          )}
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
