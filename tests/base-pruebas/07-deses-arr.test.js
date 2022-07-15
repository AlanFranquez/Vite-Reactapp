import { number } from "prop-types";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => {

    test('Debe de retornar un string y un número', () => {

        const [letras, numeros] = retornaArreglo();

        console.log(letras)
        console.log(numeros);

        expect(letras).toBe('ABC');
        expect(numeros).toBe(123);

        // tipo de dato
        expect(typeof letras).toBe('string')
        expect(typeof numeros).toBe('number')


        // Haciendo la evaluación del tipo de dato pero con jest.
        expect(letras).toEqual(expect.any(String))
        expect(numeros).toEqual(expect.any(Number))

    })
})