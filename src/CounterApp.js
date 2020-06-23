import React,{useState} from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value})=>{
    // se desestructura el hoook useState dentro de los "[ ]"
    // el primer parametro es la funcion y el segundo es la forma 
    // de usar la funcion
    const [counter, setCounter] = useState(0)
    // funcion para ver el evento del click
    const handleAdd = (e)=>{
        // setCounter(counter+1) otra forma de ponerlo
        setCounter((c)=>c+1)
    }
    
    const handleSubtract = (e) => {
        // setCounter(counter-1)
        setCounter((c)=>c-1)
    }

    const handleReset = (e) => {
        // setCounter(value)
        setCounter((c)=>value)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <p>{counter}</p>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubtract}>-1</button>
        </>
    )
}

CounterApp.propTypes={
    value: PropTypes.number.isRequired
}

export default CounterApp 