import React from 'react'

export default function Saludos() {

  var nombre='Erick'

  //var nombre: string= 'Erick';

  function cambiarNombrePorEdad(){
    nombre=3;
    return nombre;
  }


  function suma(a,b){
        return a+b;
  }

  return (
    <div>
        <p>Este es un saludo desde una pagina hijo</p>
        <p>Nombre de persona{nombre}</p>
        <p>NUmero desde la funcion {cambiarNombrePorEdad()}</p>
        <p>La suma de los valres es {suma(3,2)}</p>
    </div>
  )
}
