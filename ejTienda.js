
/*Ejercicio: Gestión de una tienda de productos
Descripción:

Estás a cargo de una tienda que vende varios productos. La tienda tiene un inventario que contiene información sobre cada producto, incluyendo el nombre del producto, la cantidad en stock y el precio por unidad. El objetivo es implementar varias funciones que permitan:

Mostrar todos los productos disponibles en la tienda.
Añadir un producto nuevo al inventario.
Actualizar la cantidad de un producto existente.
Calcular el total de ventas si un cliente compra múltiples productos.
Eliminar productos que estén agotados del inventario.*/

/*Realizar pseudocodigo*/

/*
    Inicio
        -Muestra un menu en el que pide al usuario que introduzco un numero, de tal forma
            1.Mostrar productos que esten en la base de datos
            2.Añadir un producto nuevo a la base de datos
            3.Actualizar los datos de un producto en especifico
            4.Carrito que sumara todos los precios de los productos en dicho carrito, en sus diferentes cantidades
            5.Borrar producto de la base de datos
            6.Salir
        -La primera opcion mostrara en el DOM un listado de los productos en la base de datos junto con su nombre, precio y cantidad
        -La segunda opcion mostrara un formulario que pedira los datos necesarios para añadir a la base de datos un nuevo producto
        -La tercera opcion, dejara actualizar unos datos especificos de un producto en especifico, como por ejemplo la cantidad de este producto, se buscara cada producto por su ID asociado como primary key
        -La cuarta opcion que sera un carrito, sera un array que guardara cantidad y precio de los productos elegidos, si hay mas de un producto del mismo tipo, se multiplicara el precio por la cantidad, para luego sumar todos los precios totales y se mostrara en el DOM el precio total
        -La opcion de borrar, borra el producto asociado al ID dado
        -La ultima opcion sirve para salir del menu y poner fin al programa
    FIN

*/