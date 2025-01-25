import logo from './logo.svg';
import './App.css';
import Saludos from './Componentes/Saludos';
import Saludos2 from './Componentes/Saludos2.tsx';
import PersonaComponent from './Componentes/PersonaComponent.tsx';
import PersonaComponentProps from './Componentes/PersonaComponentProps.tsx';

function App() {

  let nombre='erro'
  let apellido ='Juarez'
  let edad=20
  let telefono='879789'
  let correo='ana@gmail.com'
  let apodo='dsdasd'

  return (
    <div className="App">
      <header className="App-header">
       
       <p>Primera aplicacion en React JS</p>
      {/* <Saludos></Saludos>

       <Saludos2 apellido='Erick'></Saludos2>

       <PersonaComponent nombre={nombre} 
                        apellido={apellido} 
                        edad={edad} 
                        telefono={telefono} 
                        correo={correo} 
                        apodo={apodo}>
                      
      </PersonaComponent>*/}

      <PersonaComponentProps 
          nombre={nombre} 
          apellido={apellido} 
          edad={edad} 
          telefono={telefono} 
          correo={correo} 
          apodo={apodo}
      />


      </header>
    </div>
  );
}

export default App;
