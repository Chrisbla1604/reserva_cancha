import logo from './logo.svg';
import MostrarCanchas from "./componentes/canchas.js"
import './App.css';

function App() {

  const listado_canchas=[{nombre:'cancha-01',precio:10,descripcion:'futbol'},
                         {nombre:'cancha-02',precio:10,descripcion:'futbol'},
                         {nombre:'cancha-03',precio:15,descripcion:'basket'},
                         {nombre:'cancha-04',precio:20,descripcion:'tenis'},
                         {nombre:'cancha-05',precio:10,descripcion:'futbol'},
                         {nombre:'cancha-06',precio:10,descripcion:'futbol'},
                         {nombre:'cancha-07',precio:15,descripcion:'basket'},
                         {nombre:'cancha-08',precio:20,descripcion:'tenis'},
                         {nombre:'cancha-09',precio:10,descripcion:'futbol'},
                         {nombre:'cancha-10',precio:10,descripcion:'futbol'},
                         {nombre:'cancha-11',precio:15,descripcion:'basket'},
                         {nombre:'cancha-12',precio:20,descripcion:'tenis'}
                         ];


  return (
    <div className="App">

      <MostrarCanchas canchas={listado_canchas}></MostrarCanchas>
    
    </div>
  );
}

export default App;
