import React, { useEffect, useState } from 'react'
import {Usuario} from '../Modelos/Usuario'

export default function RegistrarUsuarioComponent() {

    //declarar un arreglo de usuarios
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    //parar guardar el objetivo
    const [form, setForm] = useState<Usuario>({
      nombre: "",
      apellido: "",
      telefono: "",
      correo: "",
      fechaNacimiento: "",
    });


    const [edad, setEdad] = useState<number | null>(null);

    useEffect(() => {
        if (form.fechaNacimiento) {
          const cumple = new Date(form.fechaNacimiento);
          const fechaActual = new Date();
          const edad = fechaActual.getFullYear() - cumple.getFullYear();
          setEdad(edad);
        }
      }, [form.fechaNacimiento]);

      const handleChange = (e:any) => {

        /**
         * 
         * {nombre:'valor'}
         * {apellido:}
         */
        setForm({ ...form, [e.target.name]: e.target.value });
      };
    
      const agregarUsuario = () => {
        if (edad !== null) {
          setUsuarios([...usuarios, { ...form, edad }]);
          setForm({ nombre: "", apellido: "", telefono: "", correo: "", fechaNacimiento: "" });
          setEdad(null);
        }
      };
    
      //2 registros
      // 0 y 1
      // 0
      const eliminarUsuario = (index: number) => {
        setUsuarios(usuarios.filter((_, i) => i !== index));
      };

  return (
    <div>
        <div >
        <input type="text" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange}  />
        <input type="text" name="apellido" placeholder="Apellido" value={form.apellido} onChange={handleChange}  />
        <input type="text" name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange}  />
        <input type="email" name="correo" placeholder="Correo" value={form.correo} onChange={handleChange}  />
        <input type="date" name="fechaNacimiento" value={form.fechaNacimiento} onChange={handleChange}  />
        {edad !== null && <p>Edad: {edad} años</p>}
        <button onClick={agregarUsuario} >Agregar Usuario</button>
      </div>
      <table >
        <thead>
          <tr >
            <th >Nombre</th>
            <th >Apellido</th>
            <th >Teléfono</th>
            <th >Correo</th>
            <th >Edad</th>
            <th >Acción</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((user, index) => (
            <tr key={index} >
              <td >{user.nombre}</td>
              <td >{user.apellido}</td>
              <td >{user.telefono}</td>
              <td >{user.correo}</td>
              <td >{user.edad}</td>
              <td >
                <button onClick={() => eliminarUsuario(index)} >Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
