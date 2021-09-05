/*
Nota del document.querySelector
Si el selector coincide con un ID y este ID es usado erróneamente 
varias veces en el documento, 
devuelve el primer elemento encontrado.
*/



/*
const miTitulo=document.querySelector('h1');
miTitulo.textContent='¡Hola Mundo!';

const miParrafo=document.querySelector('p');
miParrafo.textContent="XD";
*/
let nombreDeLaVariable;
/*
//comentarios
===  igualdad, devuelve true/false
*/
//condicionales
/*
let helado = 'chocolate';
if (helado === 'chocolate') {
  alert('¡Sí, amo el helado de chocolate!');
} else {
  alert('Awwww, pero mi favorito es el de chocolate...');
}
//funciones
function multiplica(num1,num2) {
    let resultado = num1 * num2;
    return resultado;
  }
let mult=multiplica(0.8,4)
  alert(mult);
*/
  //Eventos
//al parecer no puedo realizar este evento y el de cambiador de imagen
//de manera separada, por eso los uno en el cambiador de img
/*
 let miImg= document.querySelector('img')
 miImg.onclick = function() {
    let miSource=miImg.getAttribute('src');
    if(miSrc === 'images/leon-chico.jpg'){
        alert('¡grrrrrr!');
    }
    else{
        alert('hola');
    }
}
*/


/*lo de arriba es lo mismo que lo de abajo, pero más corto
let miIMG = document.querySelector('img');
miIMG.onclick = function(){};
*/
//cambiador de imagenes
let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/leon-chico.jpg') {
      miImage.setAttribute('src','images/universo.jpg');
      alert('¡grrrrrr!');
    } else {
      miImage.setAttribute('src', 'images/leon-chico.jpg');
      alert('hola');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');
function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    //si no se introduce un nombre/ nombre=null, entonces se vuelve
    //a llamar a la función desde el principio
    if(!miNombre){
        estableceNombreUsuario();
    }
    else{
    // Luego, llamarás la API localStorage, que nos permite almacenar datos en el navegador y recuperarlos luego. 
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Bienvenido a mi página, ' + miNombre;
    }
}

//si el elemento 'nombre' no existe, lo crea con la función de arriba
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
/*
Si ya existe (como por ejemplo cuando el usuario ya ingresó al sitio)
, se recupera el dato del nombre usando getItem() y se fija 
mediante textContent del título a la cadena, más el nombre del usuario, 
como hiciste dentro de estableceNombreUsuario().
*/
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Bienvenido de nuevo, ' + nombreAlmacenado;
}
//para que el usuario pueda cambiar su nombre
miBoton.onclick = function() {
    estableceNombreUsuario();
}