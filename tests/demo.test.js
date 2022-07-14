describe('Pruebas en <DemoComp />', () => { 

    test('Esta prueba no debe de fallar', () => {
        
        // 1 - Inicialización
        const message1 = 'Hola Mundo'
        
        // 2 - Estímulo
        const message2 = message1.trim()

        // 3 - Observar el comportamiento esperado
        // Expect mensaje 1, y to Be que sea igual
        expect(message1).toBe(message2)
        
    })

})