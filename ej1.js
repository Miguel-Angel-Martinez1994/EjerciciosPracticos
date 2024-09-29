/*EJERCICIO 1 */
/*Escribe una función que reciba un array de números y devuelva la suma de todos los elementos.*/

let array=[1,2,3,7,8,9];

const accion=()=>{
   const suma= array.reduce(function(acumulador,num){
        return acumulador+num;
    },0)

    document.write(
        `La suma del array es ${suma}`
    )
}

accion();