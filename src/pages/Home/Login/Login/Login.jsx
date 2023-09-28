import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    if (!email || !password) {
      console.log("please enter both email and password");
      return;
    }
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate("/category/0");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container className="mt-5 w-50">
      <h4 className="text-center">Login your account </h4>
      <Form onSubmit={handleLogin}>
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
        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>
        <br />
        <p>
          Don't have account ?
          <span>
            <Link className="text-decoration-none text-danger" to="/register">
              Register
            </Link>
          </span>
        </p>
      </Form>
    </Container>
  );
};

export default Login;
