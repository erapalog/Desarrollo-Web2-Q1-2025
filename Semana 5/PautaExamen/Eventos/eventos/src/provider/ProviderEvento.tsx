'use client'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import {eventoContext} from '../context/EventoContext'
import { Evento } from '@/modelos/Evento';

interface Vista{
    children: ReactNode
}
export default function ProviderEvento({children}: Vista) {

    const [evento, setEvento] = useState<Evento[]>([]);
    const [eventoConfirmado, setEventoConfirmado]= useState<Evento[]>([]);

    useEffect(() => {
      listarEventos();

    }, []);

    async function listarEventos(){
            const resp= await fetch('http://localhost:5000/eventos')
            const data= await resp.json()

            setEvento(data)
    }
  
    async function agregarEvento (evento: Evento) {
    
        let resp;

        //alert(evento.Id)
       
      if(evento.Id==0){

         resp= await fetch('http://localhost:5000/eventos',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(evento)
          })
      }
      else{
        resp= await fetch('http://localhost:5000/eventos/'+evento.Id,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(evento)
          })

          
      }
      listarEventos()
      if(resp){
        alert('Agregado Correctamente')
      }
      else{
        alert('Ocurrio un error')
      }

    };
  
    async function actualizarEvento  (evento: Evento)  {

        const resp= await fetch('http://localhost:5000/eventos/'+evento.Id,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(evento)
          })

          if(resp){
            alert('Agregado Correctamente')
          }
          else{
            alert('Ocurrio un error')
          }
    };
  
    async function eliminarEvento (id: number)  {
      
        const resp= await fetch('http://localhost:5000/eventos/'+id,{
            method:'DELETE',
            headers:{
                'content-type':'application/json'
            },
          })

          listarEventos()
          if(resp){
            alert('elimnado Correctamente')
          }
          else{
            alert('Ocurrio un error')
          }
    };
  
   async function restaurarEvento(updatedEvent: Evento){

   }

   async function eventosConfirmador() {
    setEventoConfirmado(evento.filter((item) => item.estado === 1));
  }

  useEffect(()=>{
    eventosConfirmador()
  },[evento])
  return (
    
    <eventoContext.Provider value={{
        evento, setEvento,
        listarEventos,agregarEvento,
        actualizarEvento,eliminarEvento,restaurarEvento,
        eventoConfirmado,
        eventosConfirmador,
        setEventoConfirmado


    }}>
        {children}
    </eventoContext.Provider>
  )
}

export function useEventoContext(){
    return useContext(eventoContext)
}
