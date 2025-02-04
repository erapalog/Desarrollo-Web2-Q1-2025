
import './App.css'
import  Consumidor  from '../Components/Consumidor'
import {ProviderAuth} from '../Provider/ProviderAuth'
function App() {

  return (
    <>

    <div>

      <ProviderAuth>
        <Consumidor></Consumidor>

      </ProviderAuth>
    </div>     
    </>
  )
}

export default App
