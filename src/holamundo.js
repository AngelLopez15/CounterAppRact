// importar react para poder usar sintaxis de jsx
import React from 'react'
// importar ReactDOM para poder renderizar en el navegador y
// hacer uso de todas las particularidades de los componentes
import ReactDOM from 'react-dom'

const saludo = <h1>HOLA MUNDO</h1>
const divRoot= document.querySelector('#root')

// metodo para renderizar en el navegador
// recibe dos parametros el primero el elemento a
// renderizar y el segundo es el elemento padre
// en donde se renderizara
ReactDOM.render(saludo,divRoot)