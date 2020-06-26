import heroes from "../../base/data/heroes"
import { getHeroeByIdAsync } from "../../base/09-promesas"

describe('pruebas con promesas', () => {
    test('getHeroeByIdAsync debe retornar un heroe async', (done) => {
        const id=1
        getHeroeByIdAsync(id)
            .then(heroe =>{
                expect(heroe).toBe(heroes[0])
                // done se ocupa para indicar cuando se ha terminado la tarea
                // en el caso de las promesas que si no el test terminara ya que
                // no esperara la respues y dara resultados erroneos
                done()
            })
    })
    
    test('debe de obtener un error si el heroe del id no existe', (done) => {
        const id=10
        getHeroeByIdAsync(id)
            .catch(error=>{
                expect(error).toBe('No se pudo encontrar el héroe')
                done()
            })
    })
    
})
