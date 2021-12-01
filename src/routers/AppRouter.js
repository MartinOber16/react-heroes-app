// https://reactrouter.com/web/guides/quick-start
import React from 'react';
import {
    BrowserRouter, // v6: No hace falta renombrarlo
    Routes, // v6: Routes x Switch
    Route, // v6
  } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
//import { AuthContext } from '../auth/authContext';

export const AppRouter = () => {

    //const { user } = useContext( AuthContext );

    return (
        <BrowserRouter>
            <Routes>
                {/* <Route exact path="/login" component={ LoginScreen } /> */}
                {/* v5 */}
                {/* <PublicRoute 
                    component={ LoginScreen } 
                    exact path="/login" 
                    isAuthenticated={ user.logged }
                /> */}
                {/* v6 */}
                <Route path="/login" element={ 
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>
                } />

                {/* v5 */}
                {/* <Route path="/" component={ DashboardRoutes } /> */}
                {/* <PrivateRoute 
                    component={ DashboardRoutes } 
                    isAuthenticated={ user.logged }
                    path="/" 
                /> */}
                {/* v6 */}
                <Route path="/*" element={ 
                    <PrivateRoute>
                        <DashboardRoutes />
                    </PrivateRoute>
                } />

            </Routes>
        </BrowserRouter>
    )
}

