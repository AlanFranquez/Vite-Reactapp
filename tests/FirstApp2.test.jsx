import { render, screen } from "@testing-library/react"
import { title } from "process";
import FirstApp from "../src/FirstApp"

describe('Pruebas sobre FirstApp', () => {

    const titulo = 'Hola Mundo'
    const subtitulo = 'prueba'

    test('Debe de hacer match con el snapshot', () => {

        const {container} = render(<FirstApp titulo={titulo}/>)

        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar el mensaje "Hola Mundo"', () => {

        
        render(<FirstApp titulo={titulo}/>)
        expect(screen.getByText(titulo)).toBeTruthy()
        //screen.debug()
    });

    test('Debe de mostrar el titulo en un h1', () => {

        render(<FirstApp titulo={titulo}/>);
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(titulo)

    });

    test('Debe de mostrar el subtitulo enviado por las props', () => {
        render(<FirstApp titulo={titulo} subtitulo={subtitulo}/>);

    expect(screen.getAllByText(subtitulo).length).toBe(2);
    });
    
})