import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas con 11-async-await', () => {

    test('getImagen debe de retornar un error si no tenemos API KEy', async() => {

        
        const resp = await getImagen()

        // expect(typeof url).toBe('string');
        expect(resp).toBe('No se encontró la imagen');
    })

})