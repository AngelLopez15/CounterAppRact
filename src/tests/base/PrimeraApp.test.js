import React from 'react';
import {shallow} from 'enzyme'
import PrimeraApp from '../../PrimeraApp'
import '@testing-library/jest-dom'

describe('Pruebas en <PrimeraApp />', () => {
    test('debe de mostar <PrimeraApp /> correctamente', () => {
        const saludo='Hola Mundo desde un const'
        const wrapper = shallow (<PrimeraApp saludo={saludo} />)
        
        expect(wrapper).toMatchSnapshot()
    })

    test('debe del mostrar el subtitulo envia por los Props', () => {
        const saludo='Hola Mundo desde un const'
        const subtitulo='Aqui debe ir un subtitulo'
        const wrapper = shallow (
            <PrimeraApp 
                saludo={saludo} 
                subtitulo={subtitulo}
            />
        )
        const textoParrafo = wrapper.find('p').text()
        expect(textoParrafo).toBe(subtitulo)
    })
    
})
