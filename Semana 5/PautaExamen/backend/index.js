const express = require('express')
const Eventos = require('./Models/Eventos')
const cors= require('cors')
const { where } = require('sequelize')

const app = express()

app.use(express.json())

app.use(cors());



app.get('/eventos',async (req, res) =>{

    try {
        const evento = await Eventos.findAll();

        res.status(200).json(evento)
        
    } catch (error) {
        res.status(500).json({'Error':'Ocurrio un error en la peticion'})
    }
})

app.post('/eventos', async (req,res)=>{
    try {

        console.log(req.body);

        const evento = await Eventos.create(req.body);

        res.status(200).json(evento)
        
    } catch (error) {
        res.status(500).json({'Error':'Ocurrio un error en la peticion'})
    }
})

app.put('/eventos/:Id', async (req,res)=>{

    console.log(req.params.Id)
    try {

        const [updated]= await Eventos.update(req.body,{
            where: {id: req.params.Id}
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






app.delete('/eventos/:id', async (req,res)=>{
    try {

        console.log(req.body);

        const deleted = await Eventos.destroy({
            where: { id: req.params.id }
        });

        res.status(200).json({'Mensaje':'Eliminado Correctamente'})
        
    } catch (error) {
        res.status(500).json({'Error':'Ocurrio un error en la peticion'})
    }
})



app.listen(5000,()=>{
    console.log('ejecutando en puerto 5000')
})
