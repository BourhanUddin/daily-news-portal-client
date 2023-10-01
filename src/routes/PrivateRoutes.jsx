import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <div className="mt-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to={"/login"} replace></Navigate>;
};

export default PrivateRoutes;
/**
 * Steps for private route
 * 1.Check user is logged in or not
 * 2.if user is logged in , then allow them to visit the route
 * 3. Else redirect the user to the login page
 * 4. set up the private router
 * 5. handle loading
 */
