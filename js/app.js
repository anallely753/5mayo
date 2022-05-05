let encabezado1 = document.getElementById('encabezado');

console.log(encabezado1);

// let parrafo = document.getElementsByTagName('p');
// console.log(parrafo);

// let parrafo1 = document.getElementsByClassName('parrafo-rojo');
// console.log(parrafo1);

let encabezadoContenido = document.getElementById('encabezado').innerText;
console.log(encabezadoContenido);

encabezado1.style.backgroundColor = "red";

let img = document.getElementById('myImg').setAttribute('src','https://picsum.photos/200');

let parrafoF = document.getElementById('parrafoF');

parrafoF.innerHTML = 'jjlkl';


let clickme = document.getElementById('clickme');

clickme.onclick = function(){
	clickme.innerHTML = 'Ya me diste click';
	// document.getElementsByClassName('parrafo-rojo').style.color = "red";
}

