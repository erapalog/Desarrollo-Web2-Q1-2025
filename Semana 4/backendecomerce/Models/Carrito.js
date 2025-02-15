const {DataTypes} = require('sequelize')
const sequelize = require('../db/Connection')

const Carrito =sequelize.define('Carrito',{
    IdCarrito:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    IdProducto:{
        type: DataTypes.INTEGER
    },
    PrecioTotal:{
        type:DataTypes.FLOAT
    },
    Estado:{
        type:DataTypes.INTEGER
    }
},
    {
        tableName:'Carrito',
        timestamps:false
    
    }
);

module.exports= Carrito;