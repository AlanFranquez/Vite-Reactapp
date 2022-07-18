import { render } from "@testing-library/react"
import { title } from "process";
import FirstApp from "../src/FirstApp"

describe('Pruebas sobre FirstApp', () => {

    // test('Debe de hacer match con el snapshot', () => {


    //     const titulo = 'Hola, soy Alan'

    //     const {container} = render(<FirstApp titulo={titulo} />)

    //     expect(container).toMatchSnapshot()
    // });

    test('Debe de mostrar el titulo en un h1', () => {
        const titulo = 'Hola, soy Alan'

        const {container, getByText, getByTestId} = render(<FirstApp titulo={titulo} />)

        expect(getByText(titulo)).toBeTruthy();

        // Para evaluar si hay un titulo, manera no recomendada
        // const h1 = container.querySelector('h1');

        // // toContain que cnotenga el titulo, indiferentemente de los espacios
        // expect(h1.innerHTML).toContain(titulo)

        expect(getByTestId('test-title').innerHTML).toContain(titulo);


    });

    test('Debe de mnostrar el subtitulo enviado por props', () => {

        const titulo = 'Hola, soy Alan'
        const subtitulo = 'prueba'

        const {getAllByText} = render(<FirstApp titulo={titulo} subtitulo={subtitulo} />)

        // Si hay más de un subtitulo repetido
        expect(getAllByText(subtitulo).length).toBe(2);

    })

})