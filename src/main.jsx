import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'
import CounterApp from './CounterApp'
import FirstApp from './FirstApp';


ReactDOM.createRoot(document.getElementById('root')).render (
    <React.StrictMode>
        <CounterApp value={10}/>

        {/* <FirstApp titulo='Hola, soy un titulo'/> */}
    </React.StrictMode>
)