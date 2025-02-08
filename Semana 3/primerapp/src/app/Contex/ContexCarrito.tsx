import { createContext } from "react";
import { Producto } from "../Modelos/Producto";

export const ContextCarrito = createContext({
    producto:[] as Producto[],
    setProducto: (producto: Producto[]) =>{},
    productoCarrito: [] as Producto[],
    setProductoCarrito: (producto: Producto[]) =>{},
    agregarCarrito: (producto: Producto) =>{}    

})