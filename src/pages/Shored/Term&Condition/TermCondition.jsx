import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const TermCondition = () => {
  return (
    <Container>
      <h3 className="text-center mt-4">Terms and Conditions </h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
        vitae blanditiis quae necessitatibus cupiditate ullam eaque repudiandae
        dicta dolor. Aliquam laboriosam ducimus vel doloremque? Exercitationem
        quod iusto non praesentium! Quaerat delectus impedit corporis magni
        dolor. Quia architecto provident laudantium quis dolores dolorem,
        asperiores consectetur explicabo, nostrum, ipsam dignissimos ut animi!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
        vitae blanditiis quae necessitatibus cupiditate ullam eaque repudiandae
        dicta dolor. Aliquam laboriosam ducimus vel doloremque? Exercitationem
        quod iusto non praesentium! Quaerat delectus impedit corporis magni
        dolor. Quia architecto provident laudantium quis dolores dolorem,
        asperiores consectetur explicabo, nostrum, ipsam dignissimos ut animi!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
        vitae blanditiis quae necessitatibus cupiditate ullam eaque repudiandae
        dicta dolor. Aliquam laboriosam ducimus vel doloremque? Exercitationem
        quod iusto non praesentium! Quaerat delectus impedit corporis magni
        dolor. Quia architecto provident laudantium quis dolores dolorem,
        asperiores consectetur explicabo, nostrum, ipsam dignissimos ut animi!
      </p>
      <p>
        Go back to{" "}
        <Link
          style={{ textDecoration: "none", color: "", fontSize: "bold" }}
          to={"/register"}
        >
          Register
        </Link>{" "}
      </p>
    </Container>
  );
};

export default TermCondition;
