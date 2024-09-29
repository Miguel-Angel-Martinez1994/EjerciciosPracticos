/*EJERCICIO 5*/
/*Hacer un programa que:

Solicite al usuario el ingreso por teclado de 3 notas.
Saque la media de las notas.
Muestre por pantalla
    si la nota es menor que 5 'SUSPENSO'
    si la nota es mayor o igual 5 y menor que 7 'APROBADO'
    si es mayor o igual que 7 y menor o igual que 10 'sobresaliente'*/

const notas =()=>{
    for(let i=0;i<3;i++){
        const nota=parseInt(prompt("Agregue nota "));
        if(nota<5){
            document.write(
                `<p>La nota ${i} esta suspenso</p>`
            )
        }else if(nota>=5 && nota<7){
            document.write(
                `<p>La nota ${i} esta aprobado</p>`
            )
        }else if(nota>=7 && nota<=10){
            document.write(
                `<p>La nota ${i} esta sobresaliente</p>`
            )
        }
    }
}

notas();