import React, { useContext } from 'react';
// import PropTypes from 'prop-types';

// v6: Navigate x Redirect 
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

// v5
// export const PublicRoute = ({
//     isAuthenticated,
//     component: Component,
//     ...rest
// }) => {
// v6
export const PublicRoute = ({ children }) => {

    // return (
    //     <Route { ...rest }
    //         component={
    //             ( props ) => (
    //                 ( !isAuthenticated )
    //                     ? <Component { ...props } />
    //                     : <Navigate to="/" />
    //             )
    //         }
    //     />
    // )

    const { user } = useContext(AuthContext);

    return user.logged
        ? <Navigate to="/" />
        : children
}

// PublicRoute.protoTypes = {
//     isAuthenticated: PropTypes.bool.isRequired,
//     component: PropTypes.func.isRequired,
// }