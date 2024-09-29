/*EJERCICIO 2*/
/*Crea un objeto que represente un producto con las propiedades nombre, precio, y disponible (un booleano).

Escribe una función que imprima la información del producto solo si está disponible.*/

let producto ={
    nombre:"producto1",
    precio:20,
    disponible:true
}

const mostrar =()=>{
   
        if(producto.disponible){
            document.write(
                `El producto ${producto.nombre} esta disponible`
            )
        }
}

mostrar();