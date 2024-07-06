import logo from './logo.svg';
import MostrarCanchas from './componentes/canchas.js';
import Slide_Over from './componentes/slideover.js';
import './App.css';
import { useState } from 'react';


function App() {

 
  const[slideover,setSlideover]=useState(false);

  const[canchaslideover, setCanchaSlideOver]= useState({nombre:'',precio:'',descripcion:''});
  const[horariosslideover,setHorariosSlideOver]= useState([null]);

  const[listacanchas,setListacanchas] = useState([
                         {nombre:'cancha-01',precio:10,descripcion:'futbol',disponible:true},
                         {nombre:'cancha-02',precio:10,descripcion:'futbol',disponible:true},
                         {nombre:'cancha-03',precio:15,descripcion:'futbol',disponible:false},
                         {nombre:'cancha-04',precio:20,descripcion:'futbol',disponible:true},
                         {nombre:'cancha-05',precio:10,descripcion:'futbol',disponible:false},
                         {nombre:'cancha-06',precio:10,descripcion:'futbol',disponible:true},
                         {nombre:'cancha-07',precio:15,descripcion:'futbol',disponible:true},
                         {nombre:'cancha-08',precio:20,descripcion:'futbol',disponible:false},
                         {nombre:'cancha-09',precio:15,descripcion:'futbol',disponible:false},
                         {nombre:'cancha-10',precio:20,descripcion:'futbol',disponible:false}
                         ]) ;


  const get_horarios = (cancha_nombre) =>{

    //Funcion que hace el fecth para pedir los horarios

    const responseHorarios=[{horario_inicio:'10:00',horario_fin:'11:00',disponible:true},
                            {horario_inicio:'11:00',horario_fin:'12:00',disponible:true},
                            {horario_inicio:'12:00',horario_fin:'13:00',disponible:false},
                            {horario_inicio:'13:00',horario_fin:'14:00',disponible:true},
                            {horario_inicio:'14:00',horario_fin:'15:00',disponible:false},
                            {horario_inicio:'15:00',horario_fin:'16:00',disponible:true},
                            {horario_inicio:'16:00',horario_fin:'17:00',disponible:true},
                            {horario_inicio:'17:00',horario_fin:'18:00',disponible:true},
                            {horario_inicio:'18:00',horario_fin:'19:00',disponible:true},
                            {horario_inicio:'19:00',horario_fin:'20:00',disponible:true}

    ]
    setHorariosSlideOver(responseHorarios);

  }

  const click_cancha = (e)=>{
    if(slideover!=true){
      console.log(e.target)
      console.log(e.target.name);
      setSlideover(true);
      get_horarios(e.target.name);
      cancha_slideover(e.target.name); 
    }
    
  }

  const cancha_slideover = (cancha_nombre) =>{

    listacanchas.map((cancha)=>{
      
     if (cancha_nombre == cancha.nombre)
      {
        setCanchaSlideOver(cancha);
      }

    });

  }

  const click_slideover_boton=(e)=>{

    console.log(e.target.name);
    if(e.target.name=='Salir'){
      setSlideover(false);
    }
  }


  return (
    <div className='App flex'>

      <MostrarCanchas canchas={listacanchas} clickcancha={click_cancha} slideover={slideover}></MostrarCanchas>
      {slideover ? <Slide_Over showslide={slideover} cancha={canchaslideover} horarios={horariosslideover} clickboton={click_slideover_boton} />:''}
     
                    
    </div>
  );
}

export default App;
