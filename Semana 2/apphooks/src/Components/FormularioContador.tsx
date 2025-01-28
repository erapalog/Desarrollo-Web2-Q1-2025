import React, { useEffect, useState } from 'react'



//Necesito si la cantidad de letras ingesadas es menor que 10, el texto se va mostrar en color amarill0
// es mayor que 10 y menor que 50 el texto se va mostrar en color verde
// mayor que 50 el texto se va mostrar en color rojo

//Un contador de letras

export default function FormularioContador() {
    //compuesta  nombreApellido, nombrePersona

  const [texto,setTexto]= useState("")
  const [contadorLetras, setContadorLetras] = useState(0);

  useEffect(()=>{
    const contarPalabras = texto.length
    setContadorLetras(contarPalabras)

  },[texto]);


  const manejarTexto=(e:any)=>{
    setTexto(e.target.value)
  }
  
  return (
    <div>

        <h1>Contador de letras</h1>

        <textarea name="letras" id="letras" rows={15} cols={50}        
        placeholder='Ingresar una palabra'
        value={texto}

        onChange={manejarTexto}
        
        >

        </textarea>

        <h2>Cantidad de palabras {contadorLetras}</h2>
    </div>
  )
}
