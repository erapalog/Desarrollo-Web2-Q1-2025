import './App.css'
import ComponentSumaContex2 from './Consumer/ComponentSumaContex2'
import ComponentSumaContext from './Consumer/ComponentSumaContext'
import ComponentSumarContext3 from './Consumer/ComponentSumarContext3'
import Provider from './Providers/Provider'

function App() {

  return (
    <>
      <div>
        {/*<ContadorNumeros></ContadorNumeros>*/}

        <Provider>
          <ComponentSumaContext></ComponentSumaContext>
          <ComponentSumaContex2></ComponentSumaContex2>
        </Provider>

        <ComponentSumarContext3></ComponentSumarContext3>
      </div>
     
    </>
  )
}

export default App
