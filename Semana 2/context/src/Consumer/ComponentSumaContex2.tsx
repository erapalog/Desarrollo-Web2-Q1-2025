import { useContador } from '../Providers/Provider'

export default function ComponentSumaContex2() {
  const {contador} =useContador()

  return (
    <div>
        El valor del contador es {contador+5}
    </div>
  )
}
