import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';
import { MemoryRouter, Route, Routes } from 'react-router';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

describe('Pruebas en <LoginScreen />', () => {
    
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="/login" element={ <LoginScreen /> } />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    )

    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de realizar el dispatch y la navegación', () => {
        
        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Martin'
            }
        });
        
        expect( mockNavigate ).toHaveBeenCalledWith('/', { replace: true });

        localStorage.setItem('lastPath','/dc');
        handleClick();
        expect( mockNavigate ).toHaveBeenCalledWith('/dc', { replace: true });
    })
    
})
