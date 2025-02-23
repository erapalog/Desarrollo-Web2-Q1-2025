import { createContext } from "react";
import {Evento} from '../modelos/Evento'

export const eventoContext=createContext({
    evento: [] as Evento[],
    setEvento: (evento: Evento[])=>{},
    listarEventos:()=>{},
    agregarEvento:(evento: Evento)=>{},
    actualizarEvento:(evento: Evento)=>{},
    eliminarEvento:(id:number)=>{},
    restaurarEvento:(evento: Evento)=>{},
    eventoConfirmado: [] as Evento[],
    setEventoConfirmado:(evento: Evento[])=>{},
    eventosConfirmador :()=>{}
})