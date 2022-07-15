import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funcioines', () => { 

    test('getUser debe de retornar un objeto', () => { 
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        
        const user = getUser();

        // Recordar que cuando queremos pasar un objeto hay que utilizar toEqual y no toBe
        expect(testUser).toEqual(user)


     });


     test('Prueba del toEqual', () => { 

        const obj1 = {
            nombre: 'alan',
            edad: 20
        }

        const obj2 = {
            nombre: 'alan',
            edad: 20
        }

        expect(obj1).toEqual(obj2)

      });

      test('getUsuarioActivo debe retornar un objeto', () => { 

        const name = 'Alan'

        const testUser = {
                uid: 'ABC567',
                username: name
        }

        const user = getUsuarioActivo(name);
        console.log(user)

        expect(testUser).toEqual(user)


        

       });


})