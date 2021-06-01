// https://reactrouter.com/web/guides/quick-start
import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AuthContext } from '../auth/authContext';

export const AppRouter = () => {

    const { user } = useContext( AuthContext );

    return (
        <Router>
            <div>
                <Switch>
                    {/* <Route exact path="/login" component={ LoginScreen } /> */}
                    <PublicRoute 
                        component={ LoginScreen } 
                        exact path="/login" 
                        isAuthenticated={ user.logged }
                    />

                    {/* <Route path="/" component={ DashboardRoutes } /> */}
                    <PrivateRoute 
                        component={ DashboardRoutes } 
                        isAuthenticated={ user.logged }
                        path="/" 
                    />
                </Switch>
            </div>
        </Router>
    )
}

