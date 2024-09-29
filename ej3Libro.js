/*EJERCICIO 3*/
/*Crea un array de objetos que representen libros, cada uno con las propiedades titulo, autor, y anio. Escribe una función que reciba el array y devuelva solo los libros publicados después del año 2000.*/

let libros=[
    {
        titulo:"Harry Potter",
        autor:"JK Rowling",
        anio:2000
    },
    {
        titulo:"El Quijote",
        autor:"Miguel de Cervantes",
        anio:1536
    },
    {
        titulo:"Manolito Gafotas",
        autor:"Elvira Lindo",
        anio:2001
    }
];

const publicado=()=>{
    libros.forEach(item=>{
        if(item.anio>=2000){
            console.log(item.titulo);
        }
    });
}

publicado();