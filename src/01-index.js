import React from 'react'
import ReactDOM from 'react-dom'
// importando el componenete por default
import PrimeraApp from './PrimeraApp'
// importando archivos css importante poner la extension
// de lo contrario react no sabra si es un css o un js
import './index.css'
const divRoot = document.querySelector('#root')
// se renderiza el componenete. por convencion se deja un
// espacio antes del "/" para mostar que ese es un componente
ReactDOM.render(<PrimeraApp saludo = 'Hola Mundo' /> , divRoot)
