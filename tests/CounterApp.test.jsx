import {fireEvent, render, screen} from '@testing-library/react'
import CounterApp from '../src/CounterApp'


describe('Pruebas en el <CounterApp/>', () => {

    test('Debe de hacer match con el snapshot', () => {

        const {container} = render(<CounterApp value={10}/>);

        expect(container).toMatchSnapshot();

    });

    test('Debe de mostrar el valor inciial de 100 en <CounterApp value={100}', () => {

        render(<CounterApp value={100}/>);

        expect(screen.getByText('100')).toBeTruthy();

        // expect(screen.getByRole('heading', {level:2}).innerHTML).toContain('100');

    });

    test('Debe de incrementar con el botón +1', () => {

        // Eventos en las pruebas
        render(<CounterApp value={10}/>);

        // Pasamos el evnto que queremos que haga y seleccionamos la etiqueta
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();


    });

    test('Debe de decrementar con el botón -1', () => {

        // Eventos en las pruebas
        render(<CounterApp value={10}/>);

        // Pasamos el evnto que queremos que haga y seleccionamos la etiqueta
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();


    });


    test('Debe de funcionar el botón de reset (otro metodo con los botones)', () => {

        render(<CounterApp value={10}/>)
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));

        // fireEvent.click(screen.getByText('RESET'));

        // EL aria label en el jsx me permite ponerle el mismo nombre al name
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))

        expect(screen.getByText(10)).toBeTruthy()
    })

})