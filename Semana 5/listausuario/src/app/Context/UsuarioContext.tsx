import { createContext } from "react";
import { Usuario } from "../Models/Usuario";

export const usuarioContext= createContext({
    usuario: [] as Usuario[],
    setUsuario: (usuario:Usuario[]) =>{},
    agregarUsuario: (usuario : Usuario ) =>{},
    actualizarUsuario: (id:number,nombre:string, email:string) =>{},
    eliminarUsuario:(id:number)=>{}
})