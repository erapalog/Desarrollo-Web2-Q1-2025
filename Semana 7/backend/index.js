const express = require('express')
const sequelize = require('./Conexion/Conexion')
const Empleado = require('./Modelos/Empleado')

const app = express()

app.use(express.json())

///*El salario por departamento*/
//select SUM(Salary),DEPARTMENT_ID from empleado

app.get('/sum-salario-departamento', async(req, resp)=>{

    try {
            const result = await Empleado.findAll({
                attributes:[
                    'DEPARTMENT_ID',
                    [sequelize.fn('SUM', sequelize.col('SALARY')),'total_salary']
                ],
                group:['DEPARTMENT_ID']

            })

            resp.json(result)

    } catch (error) {
        resp.status(500).send({'Mensaje':'Ocurrio un error'})
    }
})
//Cantidad de empleados por departamento
//SELECT COUNT(*),DEPARTMENT_ID,JOB_ID FROM EMPLEADO GROUP BY DEPARTMENT_ID,JOB_ID ORDER BY DEPARTMENT_ID DESC

app.get('/coun-puestos-departamento', async(req, resp)=>{

    try {
            const result = await Empleado.findAll({
                attributes:[
                    'DEPARTMENT_ID',
                    'JOB_ID',
                    [sequelize.fn('COUNT', sequelize.col('*')),'total_cuunt']
                ],
                group:['DEPARTMENT_ID','JOB_ID']

            })

            resp.json(result)

    } catch (error) {
        resp.status(500).send({'Mensaje':'Ocurrio un error'})
    }
})

//salario maximo por departmento

app.get('/max-salario-departamento/:iddepartamento', async(req, resp)=>{

    const {iddepartamento} = req.params;

    try {
            const result = await Empleado.findAll({
                attributes:[
                    'DEPARTMENT_ID',
                    [sequelize.fn('MAX', sequelize.col('SALARY')),'total_cuunt']
                ],
                where:{DEPARTMENT_ID:iddepartamento},
                group:['DEPARTMENT_ID']

            })

            resp.json(result)

    } catch (error) {
        resp.status(500).send({'Mensaje':'Ocurrio un error'})
    }
});

app.get('/max-salario-departamento', async(req, resp)=>{


    try {
            const result = await Empleado.findAll({
                attributes:[
                    'DEPARTMENT_ID',
                    [sequelize.fn('MAX', sequelize.col('SALARY')),'total_cuunt']
                ],
                group:['DEPARTMENT_ID']

            })

            resp.json(result)

    } catch (error) {
        resp.status(500).send({'Mensaje':'Ocurrio un error'})
    }
});


app.listen(5000, ()=>{
    console.log('Aplicacion ejecutando en puerto 5000')
})
