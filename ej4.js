/*EJERCICIO 4*/
/* Crea un array de objetos que representen productos, con propiedades nombre, precio, y categoria.

Escribe una función que devuelva todos los productos de una categoría específica.*/

let productos=[
    {
        nombre:"producto1",
        precio:10,
        categoria:"salado"
    },
    {
        nombre:"producto2",
        precio:15,
        categoria:"dulce"
    },
    {
        nombre:"producto3",
        precio:7,
        categoria:"salado"
    }
]

const mostrar=()=>{
    productos.forEach(item=>{
        if(item.categoria=="salado"){
            document.write(
                `<p>El producto ${item.nombre} es ${item.categoria}</p>`
            )
        }
    })
}

mostrar();