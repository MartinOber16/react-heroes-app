import React from 'react';
import { mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: () => <span>Saliendo de aqui</span>,
}))

describe('Pruebas en <PrivateRoute />', () => {
    
    const contextValue = {
        user: {
            logged: true,
            name: 'Martin'
        }
    }

    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('debe de mostrar el componente si está autenticado y guardar localStorage', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/']}>
                     <PrivateRoute>
                         <h1>Private Component</h1>
                     </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper.text().trim() ).toBe('Private Component');
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/');
    })

    test('debe de bloquear el componente si no está autenticado', () => {
        
        const contextValue = {
            user: {
                logged: false,
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/']}>
                     <PrivateRoute>
                         <h1>Private Component</h1>
                     </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper.find('span').exists() ).toBe(true);
        expect( wrapper.text().trim() ).toBe('Saliendo de aqui');

    });
    
})
