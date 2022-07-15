import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Prueba con objetos', () => { 

    test('la función USContext debe retornar un objeto', () => { 


        const clave = 'Buenas';
        const edad = 123

        const obj = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        // console.log(obj)

        const user = usContext({clave, edad})
        // console.log(user)

        expect(obj).toEqual(user)

    })

})