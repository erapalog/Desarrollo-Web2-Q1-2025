import { ListaTarjeta } from '../Modelos/ListaTarjetas'

export default function TarjetaPresentacion(props: ListaTarjeta) {
  return (
    <div>

        {
            props.tarjetas.map((tarjeta,index)=>(
                <div key={index} className='card'>
                    <h2>{tarjeta.nombre}</h2>
                    <p>{tarjeta.ocupacion}</p>
                    <p>{tarjeta.pais}</p>

                </div>
            ))
        }
    </div>
  )
}
