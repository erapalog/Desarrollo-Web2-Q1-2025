import { createContext } from "react";
import { Producto } from "../Modelos/Producto";

export const ContextCarrito = createContext({
    producto:[] as Producto[],
    //setProducto: (producto: Producto[]) =>{}
})