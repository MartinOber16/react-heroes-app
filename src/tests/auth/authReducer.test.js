import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types";


describe('Pruebas en authReducer', () => {
    
    test('debe retornar el estado por defecto', () => {
        
        const state = authReducer({ logged: false }, {});
        expect( state ).toStrictEqual({ logged: false });

    })
    
    test('debe autenticar y colocar el name del usuario', () => {
        
        const action = {
            type: types.login,
            payload: {
                name: 'Martin'
            }

        }

        const state = authReducer({ logged: false }, action );
        expect( state ).toStrictEqual( { 
            logged: true,
            name: 'Martin'
        });

    })
    
    test('debe borrar el name del usuario y logged en false', () => {

        const action = {
            type: types.logout,
        }

        const state = authReducer({ logged: false }, action );
        expect( state ).toStrictEqual( { logged: false });
    })
    

})
