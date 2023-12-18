import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {

    const isAuthenticated = localStorage.getItem('authToken');

    if(isAuthenticated){
        return children
    }


  return <Navigate to="/signup" replace={true} ></Navigate>
};

export default PrivateRoute;
