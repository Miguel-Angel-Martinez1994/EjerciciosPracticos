/*EJERCICIO 6*/
/*Hacer un programa que:

ingreso de un numero por teclado
Muestre por pantalla si ese numero es de 1 cifra 2 cifras o 3 cifras.*/

const pedir=()=>{
    const num=parseInt(prompt("Ingrese numero"));

    if(num<10 && num>0){
        document.write(
            `${num} tiene 1 cifra`
        )
    }else if(num<100){
        document.write(
            `${num} tiene 2 cifras`
        )
    }else if(num<1000){
        document.write(
            `${num} tiene 3 cifras`
        )
    }

}

pedir();