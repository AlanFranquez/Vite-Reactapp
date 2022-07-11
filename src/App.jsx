import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [contador, setContador] = useState(0)
  // console.log(contador)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi world</h1>
        <p>{contador}</p>
        
        <button onClick={() => {setContador(contador - 1)}}>Restar</button>
        <button onClick={() => {setContador(0)}}>Volver a 0</button> 
        <button onClick={() => {setContador(contador +1 )}}>Sumar</button>
      </header>
    </div>
  )
}

export default App
