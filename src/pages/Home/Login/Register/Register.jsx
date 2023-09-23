import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
    
  const handleRegister= event=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email,photo,password);
    createUser(email, password)
    .then(result=>{
      const createdUser = result.user;
      console.log(createdUser);
    })
    .catch(error=>{
      console.log(error);
    })
  }


  return (
    <Container className="mt-5 w-50">
      <h4 className="text-center">Login your account </h4>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Photo URl</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter Your photo URL"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" >
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
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" >
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
