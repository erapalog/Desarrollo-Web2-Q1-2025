import logo from './logo.svg';
import './App.css';
import Saludos from './Componentes/Saludos';
import Saludos2 from './Componentes/Saludos2.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <p>Primera aplicacion en React JS</p>
       <Saludos></Saludos>

       <Saludos2 apellido='Erick'></Saludos2>
      </header>
    </div>
  );
}

export default App;
