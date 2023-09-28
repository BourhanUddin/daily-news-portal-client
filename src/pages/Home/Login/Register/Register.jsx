import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Add validation checks here
    if (!name || !email || !password) {
      console.log("Please fill in all required fields");
      return;
    }
    // You can also add more specific validation checks, such as email format validation
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailPattern.test(email)) {
      console.log("Invalid email format");
      return;
    }

    try {
      // Attempt to create a new user with Firebase Authentication
      const result = await createUser(email, password);

      // Registration successful
      const createdUser = result.user;
      console.log("Registration successful", createdUser);

      // You can navigate to a different page or show a success message here.
    } catch (error) {
      // Handle registration errors
      console.log("Registration failed", error);
    }
  };
  // console.log(name, email, photo, password);
  // createUser(email, password)
  //   .then((result) => {
  //     const createdUser = result.user;
  //     console.log(createdUser);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

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
        <Form.Group className="mb-3">
          <Form.Label>Photo URl</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter Your photo URL"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
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
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
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
