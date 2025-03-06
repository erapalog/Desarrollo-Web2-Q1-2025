const { DataTypes } = require('sequelize')
const sequelize = require('../Conexion/Conexion')

const Empleado = sequelize.define('empleado',{
        EMPLOYEE_ID :{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true

        },        
        FIRST_NAME:{
            type: DataTypes.STRING
        },
        LAST_NAME:{
            type: DataTypes.STRING
        },
        EMAIL:{
            type: DataTypes.STRING
        },
        PHONE_NUMBER:{
            type: DataTypes.STRING
        },
        HIRE_DATE:{
            type: DataTypes.STRING
        },
        JOB_ID:{
            type: DataTypes.STRING
        },
        SALARY:{
            type: DataTypes.NUMBER
        },
        COMMISSION_PCT:{
            type: DataTypes.STRING
        },
        MANAGER_ID:{
            type: DataTypes.STRING
        },
        DEPARTMENT_ID:{
            type: DataTypes.INTEGER
        }
    },
    {
        tableName:'empleado',
        timestamps:false
    }

);

module.exports=Empleado;