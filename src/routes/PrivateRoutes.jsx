import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoutes = ({children}) => {
    const  {user}  = useContext(AuthContext);
    if(user){
        return children;
    }
    return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoutes;
/**
 * Steps for private route
 * 1.Check user is logged in or not 
 * 2.if user is logged in , then allow them to visit the route 
 * 3. Else redirect the user to the login page 
 * 4. set up the private router
 */