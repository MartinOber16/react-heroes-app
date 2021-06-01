import React, { useContext } from 'react';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = ( { history } ) => {

    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {
        
        const lastPath = localStorage.getItem('lastPath') || '/';

        const data = { name: 'Martin' };
        const action = {
            type: types.login,
            payload: data,
        }

        dispatch( action );

        //history.push('/');
        history.replace(lastPath);
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
