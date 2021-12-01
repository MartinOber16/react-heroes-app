// https://gist.github.com/Klerith/566b484ac6fe46c8fa949e61df671a18
import React, { useContext } from 'react'
// v6: useNavigate x useHistory
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const { user, dispatch } = useContext( AuthContext );

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.setItem('lastPath', window.location.pathname + window.location.search);
        
        navigate('/login');

        dispatch({
            type: types.logout
        });

    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        // activeClassName="active"
                        // className="nav-item nav-link" 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}` }
                        // exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        // activeClassName="active"
                        // className="nav-item nav-link" 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}` }
                        // exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        // activeClassName="active"
                        // className="nav-item nav-link" 
                        className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}` }
                        // exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info"> 
                        { 
                            (user.logged) && user.name
                        }
                    </span>

                    <button 
                        className="nav-item nav-link btn" 
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}