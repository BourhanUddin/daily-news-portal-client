import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container className="mt-5 w-50">
      <h4 className="text-center">Login your account </h4>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo URl</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter Your photo URL"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            name="accept"
            label="Accept Terms & Conditions"
          />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Register
        </Button>
        <br />
        <p>
          Already have account ?{" "}
          <span>
            <Link className="text-decoration-none text-danger" to="/login">
              Login
            </Link>
          </span>
        </p>
      </Form>
    </Container>
  );
};

export default Register;
