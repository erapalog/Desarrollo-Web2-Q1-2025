import { useAuth } from '../Provider/ProviderAuth'

export default function Consumidor() {

  const {user,login,logout} = useAuth()

  return (
    
    <div className="p-4 border rounded shadow">
      {user ? (
        <>
          <h2 className="text-lg font-bold">Bienvenido, {user}</h2>
          <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded mt-2">
            Cerrar Sesión
          </button>
        </>
      ) : (
        <>
          <h2 className="text-lg font-bold">No has iniciado sesión</h2>
          <button onClick={login} className="px-4 py-2 bg-green-500 text-white rounded mt-2">
            Iniciar Sesión
          </button>
        </>
      )}
    </div>
  )
}
