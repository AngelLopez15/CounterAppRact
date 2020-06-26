import {getImagen} from "../../base/11-async-await"
describe('Pruebas con Async-Await y fetch', () => {
    test('debe retornar el url de la magen', async () => {
        const url = await getImagen()
        expect(url.includes('https://')).toBe(true)
    })
    
})
