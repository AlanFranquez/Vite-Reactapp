import Proptypes from 'prop-types';
import { useState } from 'react';

const CounterApp = ({value}) => {
    
    // console.log('prueba')
    // Cuando el estado cambia, TODO EL COMPONENTE SE VUELVE A EJECUTAR
    


    const [contador, setContador] = useState(value)

    // cuando
    const handleAdd = () => {
        setContador(contador + 1);

        // Otra forma de hacerlo sin usar el valor del contador
        // setContador((c) => c+1)
    }

    const handleSubtract = () => {
        setContador(contador - 1)
    }

    const handleReset = () => {
        setContador(value)
    }    
    return (
        <>
        <h1>CounterApp</h1>
        <h2> { contador } </h2>


        <button onClick={handleSubtract}>-1</button>


        <button aria-label='btn-reset' onClick={handleReset}>RESET</button>

        <button onClick={handleAdd}>
            +1
        </button>

        {/* Si necesitaramos ponerle un value extra se haría así
        <button onClick={(e) => handleAdd(e, 'hi')}>
            +1
        </button>

        */}

       

        

        
    </>
  )
}

CounterApp.proptypes = {
    value: Proptypes.number.isRequired
}



export default CounterApp