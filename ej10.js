/*EJERCICIO 10 */
/*Se solicitan el nombre y 2 notas de x alumnos se almacenan en un array de objetos 1º sacar la media de cada alumno y almacenarlo en el objeto del alumno correspondiente 1º devolver que alumno ha sacado la mejor media y la nota media*/

let alumnos={
    nombre:"",
    notas:[0,0],
    
    //funcion para crear nuevos alumnos, rellenando los datos correspondientes
    crear:function(nombre,nota1,nota2){
        this.nombre=nombre;
        this.notas=[nota1,nota2];
        return{
            nombre:this.nombre,
            notas:this.notas
        }
    }
}

const arrayAux=[];

//ToDO: Funcion que pida al usuario cuantos alumnos quiere introducir para la comparacion, le pondra nombre a los alumnos y le pondra 2 notas, devolvera un array comparador
const cantidadAlum=()=>{
    //especificamos los x alumnos
    let cant_alumnos = parseInt(prompt("Cuantos alumnos quiere calificar??"));

    //console.log(alumnos);

    //vamos introduciendo los alumnos, con sus nombres y ntas
    for(let i=0;i<cant_alumnos;i++){
        let nombre=prompt("Nombre del alumno");
        let notaFirst=parseInt(prompt("Primera nota alumno"));
        let notaSecond=parseInt(prompt("Segunfo nota alumno"));
        
       let newAlumno=alumnos.crear(nombre,notaFirst,notaSecond);

       //console.log(newAlumno);
        arrayAux.push(newAlumno);
        console.log(arrayAux);
    }
    //console.log(arrayAux);
    updateAlum();
}


//ToDO: Funcion que en base al array auxiliar, sacara la media de dicho alumno y lo guardara en un objeto CLONADO de alumno con su media actualizada
const updateAlum=()=>{

      //clonamos el objeto alumnos para poder trabajar con el sin modificarlo
    const alumnoConMedia={
        ...alumnos
    }

    let auxMediaGlobal=0;
    let contador=0;
    let notaAlta=0;

    arrayAux.forEach(element => {
        //guardamos el tamaño del array de las notas
        let tamaño=alumnoConMedia.notas;
        
        //calculamos la suma total de las notas
        let suma = tamaño.reduce(function(acumulador,nota){
            acumulador+nota;
            if(notaAlta<nota){
                notaAlta=nota;
            }
        },0);

        //media del alumno
        let mediaAlum= suma/tamaño;

        //creamos la media en el objeto clonado y asignamos mediaAlum como su resultado
        alumnoConMedia.media=mediaAlum;


        auxMediaGlobal +=alumnoConMedia.media
        contador++;

        document.write(
            `<p>La media del alumno ${alumnoConMedia.nombre} es: ${alumnoConMedia.media}</p>`
        );
    });

    auxMediaGlobal =auxMediaGlobal/contador;

    document.write(
        `<p>La media global es ${auxMediaGlobal} y la nota mas alta ha sido ${notaAlta}</p>`
    );
    
   // medias(alumnoConMedia);
}

//toDO: Funcion que comparara las medias del array auxiliar mostrando la media mas alta y una media de las medias
const medias=(items)=>{

    /*items.forEach(elements =>{
        let tamaño= arrayAux.notas;
        for(let i=0;i<tamaño.length;i++){

        }
    })*/

}

cantidadAlum();