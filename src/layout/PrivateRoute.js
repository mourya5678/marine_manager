import React from 'react';
import { Navigate } from 'react-router-dom';
import { pipGetAccessToken } from '../auth/Pip';
import { pageRoutes } from '../routes/PageRoutes';

const PrivateRoute = ({ children }) => {
    const isAuth = pipGetAccessToken();
    return isAuth ? children : <Navigate to={pageRoutes?.login} />
};

export default PrivateRoute;