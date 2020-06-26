import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from '../../base/data/heroes'

describe('pruebas en funcion heroes', ()=>{
    test('debe retornar un heroe por id', () => {
        // la primer parte son los datos reales de las funciones
        const id = 1
        const heroe = getHeroeById(id)
        // la segunda parte son los datos "clones" para comparar y hacer la prueba
        const heroesData = heroes.find(h => h.id===id)
        // Se comparan el dato "real" con el "clon" para verificar que sean iguales
        expect(heroe).toEqual(heroesData)

    })

    test('debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)

        const heroesData = heroes.filter( h => h.owner===owner)
        expect(heroes).toEqual(heroesData)
    })
    
    test('debe retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner)
        expect(heroes.length).toBe(2)
    })
})