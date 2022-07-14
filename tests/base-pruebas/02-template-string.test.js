import { getSaludo } from "../../src/base-pruebas/02-template-string"



describe('Pruebas sobre el template string', () => { 

    test('getSaludo debe de retornar "Hola Alan"', () => { 

        const name = 'Alan'
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`)


     })

 })