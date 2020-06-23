import React from 'react'
// importando PropTypes 
import PropTypes from 'prop-types'

// esto es una functional components
// desestructurando la propiedad (properties) y asignandole un
// valor por default
const PrimeraApp = ({saludo, subtitulo}) =>{
    
    return (
        <>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </>
    )
}

// aplicando los proptypes
PrimeraApp.propTypes ={
    // poniendo tipo de datos a la propiedad
    saludo: PropTypes.string.isRequired
    // si no se pone isRequiered entonces estamos
    // diciendo que la propiedad es opcional
    // con isRequiered le ordenamos que es obligatorio
}

// poniendo un DefaultProp para en este caso 
// un subtitulo
PrimeraApp.defaultProps={
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp 