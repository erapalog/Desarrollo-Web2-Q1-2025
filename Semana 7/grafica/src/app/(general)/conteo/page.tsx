'use client'
import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,PointElement, LineElement } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,PointElement, LineElement);
import { Line } from 'react-chartjs-2';
import { getConteoPuestoDepartamento } from '@/app/Servicios/Api';


export default function page() {

  const [chardData, setCharData] = useState({
    labels:[],
    datasets:[{
      label: '',
      data:[],
      borderColor:'',
      fill:false
    }]
  })

  useEffect(()=>{

    getConteoPuestoDepartamento().then(data=>{
      const labels= data.map((item:any)=>`${item.DEPARTMENT_ID} -${item.JOB_ID} ` );
      const counts= data.map((item:any)=>`${item.total_cuunt}` );
      setCharData({
        labels,
        datasets:[{
          label:'Cantidad de empleados por departamento',
          data:counts,
          borderColor:'rgb(168, 116, 73)',
          fill:true
        }]
      }

      )

    })

  },[]);



  return (
    <div>
      <Line data={chardData}></Line>

    </div>
  )
}
