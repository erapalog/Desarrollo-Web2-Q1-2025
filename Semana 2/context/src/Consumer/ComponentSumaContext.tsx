import React from 'react'
import { useContador } from '../Providers/Provider'

export default function ComponentSumaContext() {
    
    const { contador, sumarContador, restarContador } = useContador()

    return (
        <>

            <div>
                <p>Componente Consumidor</p>

                <p>Valor del contador {contador}</p>
                <button onClick={sumarContador}>Sumar 1</button>
                <button onClick={restarContador}>Restar 1</button>
            </div>


        </>
    )
}
