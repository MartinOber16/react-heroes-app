import React, { useContext } from 'react';
// v6
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

// export const LoginScreen = ( { history } ) => {
export const LoginScreen = () => {

    const { dispatch } = useContext( AuthContext );

    const navigate = useNavigate();

    const handleLogin = () => {
        
        const lastPath = localStorage.getItem('lastPath') || '/';

        const data = { name: 'Martin' };
        const action = {
            type: types.login,
            payload: data,
        }

        dispatch( action );

        // history.push('/');
        // history.replace(lastPath);
        navigate(lastPath, {
            replace: true
        });
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
