'use client'
import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getSumaDepartamento } from '@/app/Servicios/Api';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



export default function page() {

  const [chardData, setCharData] = useState({
      labels:[], //son los datos voy omstrar titulo
      datasets:[
        {
          label:'',
          data:[],
          backgroundColor:''
        }
      ]
  })

  useEffect(()=>{
      getSumaDepartamento().then(data=>{
          const labelsList= data.map((item:any)=>item.DEPARTMENT_ID)  //labels
          const dataList= data.map((item:any)=>item.total_salary) //data

          setCharData({
            labels:labelsList,
            datasets:[{
              label:'Total de Salarios por departmaneto',
              data:dataList,
              backgroundColor:'rgba(75, 192, 192, 0.6)'
            }]
          })

      })
  },[])

  return (
    <div>
      <Bar data={chardData}></Bar>
    </div>
  )
}
