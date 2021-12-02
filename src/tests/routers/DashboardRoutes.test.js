import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { MemoryRouter } from 'react-router-dom';


describe('Pruebas en <DashboardRoutes />', () => {
    
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Juanito'
        }
    }

    test('debe mostrarse correctamente', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={ ['/'] }>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Juanito');
        expect( wrapper.find('h1').text().trim() ).toBe('Marvel Screen');

    });

    test('debe mostrarse correctamente DC', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={ ['/dc'] }>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h1').text().trim() ).toBe('DC Screen');

    })
    
})
