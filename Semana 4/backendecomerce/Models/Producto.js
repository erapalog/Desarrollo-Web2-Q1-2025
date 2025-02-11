const {DataTypes} = require('sequelize')
const sequelize = require('../db/Connection')

const Producto =sequelize.define('Producto',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING
    },
    precio:{
        type:DataTypes.FLOAT
    },
    isv:{
        type:DataTypes.FLOAT
    },
    img:{
        type:DataTypes.STRING
    }
},
    {
        tableName:'Producto',
        timestamps:false
    
    }
);

module.exports= Producto;