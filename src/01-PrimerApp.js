// Los nombres de los archivos de los componentes suelen
// tener el formato de camelCase y sus promeras letras de
// cada palabra estan capitalizadas (en mayuscula)
// ejemplo PrimeraApp.js

// Hay dos tipos de componentes. Los que estan basados en 
// clases (class) y los que estan basados en funciones (const)

// Lo ideal es que se hagan solo con funciones por que asi
// nos los recomienda el mismo React
// Estos componentes basados en funciones se llaman: functional components
// antes se llamaban styles functional components por que no se podia
// no podian manejar el estado pero eso cambio con la introduccion de los hooks
// Importante entre los styles components y los functional components SI cambia
// la manera de hacer el codigo
import React from 'react'

// esto es una functional components
const PrimeraApp = () =>{
    const saludo = 'Hola Mundo desde un const'

    return (
        <>
            <h1>{saludo}</h1>
            <p>Mi primer aplicación web</p>
        </>
    )
}

export default PrimeraApp 