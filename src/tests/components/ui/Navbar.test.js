import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
// import '@testing-library/jest-dom';

import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

describe('Pruebas en <Navbar />', () => {
    
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Pedro'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={ <Navbar /> } />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    // afterEach(() => {
    //     jest.clearAllMocks();
    // });

    test('debe de mostrarse correctamente', () => {
     
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Pedro');

    });

    test('debe de llamar el logout y el usar history', () => {
        
        wrapper.find('button').prop('onClick')();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.logout
        });

        expect( mockNavigate ).toHaveBeenCalledWith('/login', { replace: true });

    })
    
})
