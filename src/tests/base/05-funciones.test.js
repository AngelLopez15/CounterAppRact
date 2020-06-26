import {getUser, getUsuarioActivo} from '../../base/05-funciones'

describe('Pruebas en 05-funciones', () => {
    
    test('getUser debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser()
        expect(user).toEqual(userTest)
    })
    
    //getUsuarioActivo debe de retornar  un objeto
    test('getUsuarioActivo debe retornar un objeto y recibir un parametro', () => {
        const nombre='Angel'
        
        const userTest = (nombre)=>({
            uid: 'ABC567',
            username: nombre
        })

        const user = getUsuarioActivo(nombre)

        expect(user).toEqual(userTest(nombre))

    })

})