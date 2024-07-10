import logo from './logo.svg';
import MostrarCanchas from './componentes/canchas.js';
import Slide_Over from './componentes/slideover.js';
import Reservas from './componentes/reservas.js';

import './App.css';
import { useState, useEffect } from 'react';
import{BrowserRouter as Router, Routes, Route,Link,useRouteMatch,useParams} from 'react-router-dom';
import { upload } from '@testing-library/user-event/dist/upload.js';


function App() {
  
  
  const[inforeservas,setInfoReservas] = useState([
    {id_reserva:1,cancha:'cancha-01',precio:10,hora_inicio:'10:30',hora_fin:'12:30',pagada:false},
    {id_reserva:8,cancha:'cancha-02',precio:10,hora_inicio:'12:30',hora_fin:'13:30',pagada:false},
    {id_reserva:13,cancha:'cancha-03',precio:15,hora_inicio:'14:30',hora_fin:'15:30',pagada:false},
    {id_reserva:24,cancha:'cancha-04',precio:20,hora_inicio:'16:30',hora_fin:'17:30',pagada:false}
   ]) ;  

  const[hola,setHola]=useState('holaaaa');
  const[slideover,setSlideover]=useState(false);

  const[canchaslideover, setCanchaSlideOver]= useState({nombre:'',precio:'',descripcion:''});
  const[horariosslideover,setHorariosSlideOver]= useState([]);

 

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

                     

  //const[listacanchas,setListacanchas] = useState([]);
                         
  useEffect(() => {

    fetch("http://localhost:8000/canchas",{
      method: "GET",
    //body: JSON.stringify(datosOrdenUsuario),
      credentials: "omit",
      mode: "no-cors",
      headers: {  'Content-type':'application/json;charset=utf-8',
                  'Accept': 'application/json',
                  'Access-Control-Allow-Origin': '*'
      }
  }).then((res) =>res.json())
    .catch((error) => console.error("Error:", error))
    .then((resp) =>{ console.log('Obteniendo Canchas: ',resp)
                     //setListacanchas(resp);
    });
  }, []);

    

  const get_horarios = (cancha_id) =>{

    //Funcion que hace el fecth para pedir los horarios

    
      fetch(`http://localhost:8000/getInfoCanchaById/${cancha_id}`,{
        method: "GET",
        credentials: "omit",
        mode: "no-cors",
        headers: {  'Content-type':'application/json;charset=utf-8',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*'
        }
    }).then((res) =>res.json())
      .catch((error) => console.error("Error:", error))
      .then((resp) =>{ console.log('Obteniendo Horarios: ',resp)
                       //setHorariosSlideOver(resp);
                       //setSlideover(true);
                       //console.log(horariosslideover);
      });
    

    const responseHorarios=[{horario_inicio:'10:00',horario_fin:'11:00',disponible:true,horario_id:1},
                            {horario_inicio:'11:00',horario_fin:'12:00',disponible:true,horario_id:2},
                            {horario_inicio:'12:00',horario_fin:'13:00',disponible:false,horario_id:3},
                            {horario_inicio:'13:00',horario_fin:'14:00',disponible:true,horario_id:4},
                            {horario_inicio:'14:00',horario_fin:'15:00',disponible:false,horario_id:5},
                            {horario_inicio:'15:00',horario_fin:'16:00',disponible:true,horario_id:6},
                            {horario_inicio:'16:00',horario_fin:'17:00',disponible:false,horario_id:7},
                            {horario_inicio:'17:00',horario_fin:'18:00',disponible:false,horario_id:8},
                            {horario_inicio:'18:00',horario_fin:'19:00',disponible:true,horario_id:9},
                            {horario_inicio:'19:00',horario_fin:'20:00',disponible:true,horario_id:10}

    ]
    setHorariosSlideOver(responseHorarios);
    return
  }

  const click_cancha = (e)=>{
    if(slideover!=true){
      console.log(e.target);
      console.log(e.target.name);
      console.log(e.target.id);
      get_horarios(e.target.id);
      cancha_slideover(e.target.name); 
      setSlideover(true);
    }
   return 
  }

  const cancha_slideover = (cancha_nombre) =>{

    listacanchas.map((cancha)=>{
      
     if (cancha_nombre == cancha.nombre)
      {
        setCanchaSlideOver(cancha);
      }

    });
  return
  }

  const click_slideover_boton=(e)=>{

    console.log(e.target.name);
    if(e.target.name=='Salir'){
      setSlideover(false);
    }
  return
  }


  const update_pago_reserva = (e)=>{
      let temp= [];

      console.log('Pagada la reserva con id: ',e.target.id);
      inforeservas.map((reserva)=>{
          if(reserva.id_reserva==e.target.id)
          {
            console.log('Pago a modificar:' , reserva.id_reserva);
            temp.push({...reserva,pagada:true});
            console.log(temp);  
          }
          else{
            if(reserva.pagada==true){
              temp.push(reserva);
            }
            else{
              temp.unshift(reserva)
            }
           ;
          }
          
      });
      setInfoReservas(temp);
  }

  return (

    <Router>
        <div>
           

        <Routes>

            <Route exact path='/' element={ <div className='flex'>
              <MostrarCanchas canchas={listacanchas} clickcancha={click_cancha} slideover={slideover}></MostrarCanchas>
             {slideover ? <Slide_Over showslide={slideover} cancha={canchaslideover} horarios={horariosslideover} clickboton={click_slideover_boton} />:''}
             </div>} />

            <Route path='/reservas' element={ <div><Reservas reservas={inforeservas} clickpago={update_pago_reserva}>
              
              </Reservas>
              </div> } />

            <Route path='/historial-pagos' element={ <div> Historial Pagos </div> } />
         
         </Routes>

         <nav>
             <ul className='grid grid-cols-3'></ul>
              <li>
                <Link className='bg-gray-300' to='/'>Home</Link>
              </li>
              <li>
                <Link className='bg-gray-300' to='/reservas'>Reservas</Link>
              </li>
              <li>
                <Link className='bg-gray-300' to='/historial-pagos'>Historial de Pago</Link>
              </li>
          </nav>

        </div>

    </Router>
  );
}

export default App;
