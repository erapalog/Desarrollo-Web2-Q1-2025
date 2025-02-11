const express = require('express')
const Producto = require('./Models/Producto')


const app = express()

app.use(express.json())

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
            res.status(500).json({'mensjae':'Registro no encontrado'})
        }
        
    } catch (error) {
        res.status(500).json({'Error':'Ocurrio un error en la peticion'})
    }
})



app.listen(5000,()=>{
    console.log('ejecutando en puerto 5000')
})
