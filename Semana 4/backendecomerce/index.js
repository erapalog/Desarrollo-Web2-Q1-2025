const express = require('express')
const Producto = require('./Models/Producto')
const Carrito = require('./Models/Carrito')
const cors= require('cors')
const { where } = require('sequelize')

const app = express()

app.use(express.json())

app.use(cors());

//Tipo de respuesta **
//json
//text
//documento
//xml
//ejecute

//Punto de entrada **
//http:/localhost/producto

//Metodo de comunicacion
//GET  ---> extra informacion (no recibe Body)
//POST ---> insertar informacion (si recibe body)
//PUT   --> actualizar informacion
//DELETE ---> Eliminar informacion

//Codigo de respuesta
//200 exitososa
//500 una peticion tiene erro
//400 cuando no existe informacion
//401 cuando no tiene autorizacion
//402 se rechazo

//Response y el request

//Response: el servicio (endpoint) me responde o devuelve hacia el cliente
//Request: El cliente enviar para realizar una peticion




app.get('/producto',async (req, res) =>{

    try {
        //SELECT *FROM PRODUCTO
        const producto = await Producto.findAll();

        res.status(200).json(producto)
        
    } catch (error) {
        res.status(500).json({'Error':'Ocurrio un error en la peticion'})
    }
})

app.post('/producto', async (req,res)=>{
    try {

        console.log(req.body);

        //insert into producto (id,nombre, precio,isv,img) values ('','','','','')
        const producto = await Producto.create(req.body);

        res.status(200).json(producto)
        
    } catch (error) {
        res.status(500).json({'Error':'Ocurrio un error en la peticion'})
    }
})

app.put('/producto/:id', async (req,res)=>{

       
    try {

        const [updated]= await Producto.update(req.body,{
            where: {id: req.params.id}
        })

        if(updated){
            res.status(200).json({'mensjae':'Registro actualizado'})
        }
        else{
            res.status(400).json({'mensjae':'Registro no encontrado'})
        }
        
    } catch (error) {
        res.status(500).json({'Error':'Ocurrio un error en la peticion'})
    }
})




app.post('/carrito', async (req,res)=>{
    try {

        console.log(req.body);

        //insert into carrito (?,?,?) values ('','','','','')
        const carrito = await Carrito.create(req.body);

        res.status(200).json(carrito)
        
    } catch (error) {
        res.status(500).json({'Error':'Ocurrio un error en la peticion'})
    }
})

app.delete('/carrito/:idproducto', async (req,res)=>{
    try {

        console.log(req.body);

        //delete from carrito where idproducto=?
        const deleted = await Carrito.destroy({
            where: { IdProducto: req.params.idproducto }
        });

        res.status(200).json({'Mensaje':'Eliminado Correctamente'})
        
    } catch (error) {
        res.status(500).json({'Error':'Ocurrio un error en la peticion'})
    }
})

app.put('/carrito/actualizar-estado', async (req, res) => {
    try {
        // Actualizar todos los elementos cuyo estado sea 0
        const resultado = await Carrito.update(
            { Estado: 1 }, // Nuevo estado (bolleat true false, 0 y 1)
            { where: { Estado: 0 } } // Condición: solo actualiza donde estado sea 0
        );

        if (resultado[0] === 0) {
            return res.status(404).json({ mensaje: "No hay elementos con estado 0 para actualizar" });
        }

        res.status(200).json({ mensaje: "Carrito actualizado correctamente", filasActualizadas: resultado[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Ocurrió un error en la petición" });
    }
});

app.listen(5000,()=>{
    console.log('ejecutando en puerto 5000')
})
