/*var contenedor = document.getElementById('contenedor');
console.log(contenedor);
var divs = contenedor.getElementsByTagName('div');
var parrafos = divs[0].getElementsByTagName('p');
var parrafo= parrafos[0];
var contenido = document.createTextNode('Hola Mundo');
parrafo.appendChild(contenido);
var div2 = divs[1];
var parrafo2 = document.createElement('p');
var contenidoParrafo2 = document.createTextNode('Este es el texto del segundo párrafo');
parrafo2.appendChild(contenidoParrafo2);
div2.appendChild(parrafo2);*/
var Links = document.getElementsByTagName('a');
var numberLinks = Links.length;
console.log('El número de enlaces es: ' + numberLinks);
console.log('La dirección del penúltimo enlace es: ' + Links[numberLinks - 2].href);
var counter = 0;
for (let index = 0; index < numberLinks; index++) {
    if (Links[index].href == 'http://prueba/') {
        counter =counter + 1;        
    }  
}
console.log('El número de enlaces a http://prueba/ es: ' + counter);
var parrafos = document.getElementsByTagName('p');
var parrafo3 = parrafos[2];
var numberLinksParrafo3 = parrafo3.getElementsByTagName('a').length;
console.log('El número de enlaces en el tercer párrafo es: ' + numberLinksParrafo3);
