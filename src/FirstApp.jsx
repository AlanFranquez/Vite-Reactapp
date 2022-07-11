import React from 'react'

// const obj = {
//     nombre: 'Alan',
//     age: 20
// }

// Siempre que se pueda intentar poner las funciones y variables por fuera de la función para mejorar el rendimiento

// function Hola(a,b) {
//     return a+b
// }

function FirstApp({titulo, subtitulo}) {


  return (
    <>
    {/* <h1>{Hola(1,4)}</h1> */}
    {/* <code>{JSON.stringify(obj)}</code> */}
   
    <h1>{titulo}</h1>
    <h2>{subtitulo +1}</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi accusamus impedit quaerat itaque harum, soluta laborum eaque, et tenetur dolores nulla vel rem voluptatum minus rerum vitae quae, veritatis voluptatibus?</p>
    </>
  )
}

export default FirstApp