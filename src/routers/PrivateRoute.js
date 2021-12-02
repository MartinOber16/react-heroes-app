import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
// v6: Navigate x Redirect 
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

// v5
// export const PrivateRoute = ({
//     isAuthenticated,
//     component: Component,
//     ...rest
// }) => {
// v6
export const PrivateRoute = ({ children }) => {
    
    //localStorage.setItem('lastPath', rest.location.pathname + rest.location.search)

    // return (
    //     <Route { ...rest }
    //         component={
    //             ( props ) => (
    //                 ( isAuthenticated )
    //                     ? <Component { ...props } />
    //                     : <Navigate to="/login" />
    //             )
    //         }
    //     />
    // )

    const { user } = useContext(AuthContext);
    const { pathname, search} = useLocation();

    localStorage.setItem('lastPath', pathname + search);

    return user.logged
        ? children
        : <Navigate to="/login" />

}

// PrivateRoute.protoTypes = {
//     isAuthenticated: PropTypes.bool.isRequired,
//     component: PropTypes.func.isRequired,
// }