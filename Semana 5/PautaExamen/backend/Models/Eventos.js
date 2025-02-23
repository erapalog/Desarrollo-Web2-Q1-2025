const {DataTypes} = require('sequelize')
const sequelize = require('../db/Connection')

const Eventos =sequelize.define('Eventos',{
    Id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING
    },
    direccion:{
        type:DataTypes.STRING
    },
    fechaInicio:{
        type:DataTypes.DATE
    },
    fechaFinal:{
        type:DataTypes.DATE
    },
    estado:{
        type:DataTypes.INTEGER
    },
    comentario:{
        type:DataTypes.STRING
    }
},
    {
        tableName:'Eventos',
        timestamps:false
    
    }
);

module.exports= Eventos;