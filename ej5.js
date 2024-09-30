/*EJERCICIO 5*/
/*Hacer un programa que:

Solicite al usuario el ingreso por teclado de 3 notas.
Saque la media de las notas.
Muestre por pantalla
    si la nota es menor que 5 'SUSPENSO'
    si la nota es mayor o igual 5 y menor que 7 'APROBADO'
    si es mayor o igual que 7 y menor o igual que 10 'sobresaliente'*/

const notas =()=>{
    let vueltas=parseInt(prompt("Cantidad de notas que va agregar"));
    let media=0;
    for(let i=0;i<vueltas;i++){
        const nota=parseInt(prompt("Agregue nota "));
        if(nota<5){
            media = media+ nota;
            document.write(
                `<p>La nota ${i} esta suspenso</p>`
            )
        }else if(nota>=5 && nota<7){
            media = media+ nota;
            document.write(
                `<p>La nota ${i} esta aprobado</p>`
            )
        }else if(nota>=7 && nota<=10){
            media = media + nota;
            document.write(
                `<p>La nota ${i} esta sobresaliente</p>`
            )
        }
    }
    media =media/vueltas;
    document.write(
        `La media de la clase es ${media}`
    )
}

notas();