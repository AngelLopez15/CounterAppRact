// con la funcion describe podemos agrupar pruebas
describe('Pruebas en el archivo demo.test.js', ()=>{
    // test es un metodo
    // el primer parametro es un string donde debemos describir que es lo que
    // se esta probando.
    // el segundo parametro es un callback donde se ejecuta la prueba
    test('deben ser iguales los string', () => {
        
        // 1.inicialización
        const mensaje = 'Hola mundo'
        // 2.estimulo
        const mensaje2 = `Hola mundo`

        // 3.Observar el comportamiento
        expect(mensaje).toBe(mensaje2)
        // con toBe es como si estuvieramos haciendo ===
    })
})
