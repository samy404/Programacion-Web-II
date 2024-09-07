///Importaciones dependencias o de ortos componentes.
import react from 'react';


//declaracion de la funcion 
export const Primercomponente = ()=>{

    // Variables locales o estaticas 
let nombre = "Samuel";
let web = "http://samuelloaiza.edu.mx";
///Declaracion de objetos
let usuario = {
nombre: "Samuel",
apellido: "loaiza",
edad: 30,
profesion: "Desarrollador web"
};


return(
<div>
    <h2>Este es mi primer componente</h2>
    <hr/>
    <p>Este es mi primer componente en React !!!</p>
    <ul>
        <li>React</li>
        <li>Angular</li>
        <li>Vue</li>
        <li>Laravel</li>
        <li>Django</li>
        <li>Node.js</li>
    </ul>
    <hr/>

    <ul>
        <li>Mi nombre es: {nombre}</li>
        <li>Mi web es: {web}</li>
    </ul>
    <hr/>

    <h3>Mostrando datos del objeto</h3>

    <ul>
        <li><strong>Nombre:</strong> {usuario.nombre}</li>
        <li><strong>apellido:</strong> {usuario.apellido}</li>
        <li><strong>edad:</strong> {usuario.edad}</li>
        <li><strong>profesion:</strong> {usuario.profesion}</li>
        
    </ul>


</div>
);
};