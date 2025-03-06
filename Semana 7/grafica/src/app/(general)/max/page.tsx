'use client'
import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,ArcElement } from 'chart.js';
import { getMaxSalarioDepartamento } from '@/app/Servicios/Api';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,ArcElement);




export default function page() {

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
  };

 const [charData, setCharData]= useState({
  labels:[],
  datasets:[{
    data:[],
    backgroundColor:[] as any
  }]
 })


 useEffect(()=>{
    getMaxSalarioDepartamento().then(data=>{
      const labelsList= data.map((item:any)=>`${item.DEPARTMENT_ID}  ` );
      const counts= data.map((item:any)=>`${item.total_cuunt}` );

      setCharData({
        labels:labelsList,
        datasets:[
          {
            data:counts,
            backgroundColor:['rgba(255, 99, 132, 0.6)','rgba(213, 255, 99, 0.6)',
              'rgba(143, 69, 158, 0.6)','rgba(54, 189, 212, 0.6)',
            'rgba(73, 197, 181, 0.6)','rgba(146, 172, 54, 0.78)',
          'rgba(66, 119, 68, 0.6)','rgba(184, 139, 103, 0.6)',
        'rgba(133, 99, 255, 0.6)','rgba(255, 99, 132, 0.6)']
          }
        ]
      })
    })
 },[])
  return (
    <div style={{ height: "500px", width: "500px" }}>
    <Pie data={charData} options={options} ></Pie>
    </div>
     
          
    
  )
}
