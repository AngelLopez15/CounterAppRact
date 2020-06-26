import React from 'react';
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp'


describe('Pruebas en el <CounterApp />', () => {
    let wrapper = shallow(<CounterApp />)
    // para reinicializar antes de que haga una prueba
    beforeEach(()=>{
        wrapper= shallow(<CounterApp />)
    })

    test('se debe mostar el <CounterApp /> correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostar el valor por defecto 100', () => {
        const wrapper = shallow(<CounterApp value={100} />)
        const counterText = wrapper.find('p').text().trim()
        expect(counterText).toBe('100')
    })
    
    test('debe de incrementar con el boton de +1', () => {
        // simulando el evento click
        // se ocupo at(0) por que como los botones no tienen id y todos
        // son iguales entonces debemos acceder por si posicion en el DOM
        wrapper.find('button').at(0).simulate('click')
        const counterText = wrapper.find('p').text().trim()
        // console.log(counterText)
        expect(counterText).toBe('1')
    })
    
    test('debe decrementar con el boton de -1', () => {
        wrapper.find('button').at(2).simulate('click')
        const counterText = wrapper.find('p').text().trim()
        expect(counterText).toBe('-1')
    })
    
    test('debe de colocar el valor por default', () => {
        const wrapper = shallow(<CounterApp value={0} />)
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(1).simulate('click')
        const counterText = wrapper.find('p').text().trim()
        expect(counterText).toBe('0')
    })
})
