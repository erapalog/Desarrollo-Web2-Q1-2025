import { createContext } from "react";

//La definiciones de lo que voy a necitar
export const ContextContador=createContext({
    contador:0,
    sumarContador: ()=>{},
    restarContador: ()=>{}
}) 