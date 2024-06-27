import logo from './logo.svg';
import MostrarCanchas from "./componentes/canchas.js"
import './App.css';
import { useState } from 'react';


function App() {

  const click_cancha = (e)=>{
    console.log(e.target)
    console.log(e.target.name);
  }


  const[listacanchas,setListacanchas] = useState([
                         {nombre:'cancha-01',precio:10,descripcion:'futbol',disponible:true},
                         {nombre:'cancha-02',precio:10,descripcion:'futbol',disponible:true},
                         {nombre:'cancha-03',precio:15,descripcion:'futbol',disponible:false},
                         {nombre:'cancha-04',precio:20,descripcion:'futbol',disponible:true},
                         {nombre:'cancha-05',precio:10,descripcion:'futbol',disponible:false},
                         {nombre:'cancha-06',precio:10,descripcion:'futbol',disponible:true},
                         {nombre:'cancha-07',precio:15,descripcion:'futbol',disponible:true},
                         {nombre:'cancha-08',precio:20,descripcion:'futbol',disponible:false}
                         ]) ;


  return (
    <div className="App">

      <MostrarCanchas canchas={listacanchas} clickcancha={click_cancha}></MostrarCanchas>
    
    </div>
  );
}

export default App;
