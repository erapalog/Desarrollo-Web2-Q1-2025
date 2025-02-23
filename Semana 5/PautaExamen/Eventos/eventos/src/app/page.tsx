'use client'
import Image from "next/image";
import { useState } from "react";
import AdminLayout from "./(general)/Administrador/Layout";
import ConsyltorLayout from "./(general)/Consultor/Layout";
import { useRouter } from "next/navigation";

export default function Home() {

  const [role, setRole] = useState('');
  const router =useRouter()

  const validar = () => {
    if (role === 'admin') {
      router.push('/Administrador/AgregarEventos');
    } else if (role === 'consultor') {
      router.push('/Consultor/Eventos');
    }
  };
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
     
 
        <form className="form">
            <input className="form-control" type="text" value={role} onChange={(e)=>setRole(e.target.value)}>
            </input>

            <button type="button" onClick={validar} className="btn btn-success">INicio de sesion</button>
        </form>

      
   
      </main>
  
    </div>
  );
}
