import logo from './logo.svg';
import MostrarCanchas from './componentes/canchas.js';
import Slide_Over from './componentes/slideover.js';
import Reservas from './componentes/reservas.js';
import HistorialPagos from './componentes/pagos.js';

import './App.css';
import { useState, useEffect } from 'react';
import{BrowserRouter as Router, Routes, Route,Link,useRouteMatch,useParams} from 'react-router-dom';
import { upload } from '@testing-library/user-event/dist/upload.js';
import jQuery from 'jquery';

function App() {
  
  
 /* const[inforeservas,setInfoReservas] = useState([
    {id_reserva:1,cancha:'cancha-01',precio:10,'10:30',hora_fin:'12:30',pagada:false},
    {id_reserva:8,cancha:'cancha-02',precio:10,hora_inicio:'12:30',hora_fin:'13:30',pagada:false},
    {id_reserva:13,cancha:'cancha-03',precio:15,hora_inicio:'14:30',hora_fin:'15:30',pagada:false},
    {id_reserva:24,cancha:'cancha-04',precio:20,hora_inicio:'16:30',hora_fin:'17:30',pagada:false}
   ]) ;*/
   
   /*const[listapagos,setListaPagos] = useState([
    {cancha_nombre:'cancha-01',precio:10,cancha_hora_inicio:'10:30',cancha_hora_fin:'12:30',fecha:'11-07-2024'},
    {cancha_nombre:'cancha-02',precio:10,cancha_hora_inicio:'12:30',cancha_hora_fin:'13:30',fecha:'12-07-2024'},
    {cancha_nombre:'cancha-03',precio:15,cancha_hora_inicio:'14:30',cancha_hora_fin:'15:30',fecha:'11-07-2024'},
    {cancha_nombre:'cancha-04',precio:20,cancha_hora_inicio:'16:30',cancha_hora_fin:'17:30',fecha:'10-07-2024'}
   ]) ;*/
   

  const[slideover,setSlideover]=useState(false);

  const[canchaslideover, setCanchaSlideOver]= useState({nombre:'',precio:'',descripcion:''});
  const[horariosslideover,setHorariosSlideOver]= useState([]);
  const[listacanchas,setListacanchas] = useState([]);
  const[inforeservas,setInfoReservas] = useState([]);
  const[listapagos,setListaPagos] = useState([]);
  const[idusuario,setIdUsuario]= useState(0);
  const[recargar,setRecargar]= useState(false);



 /* const[listacanchas,setListacanchas] = useState([
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
*/


  useEffect(() => {
    // fecth para pedir el Id de Usuario en base a la cookie
    fetch("http://localhost:8000/sesion",{
      method: "GET",
      //credentials: "omit",
      //mode: "no-cors",
      headers: {  'Content-type':'application/json;charset=utf-8',
                  'Accept': 'application/json',
                  'Access-Control-Allow-Origin': '*'
      }
  }).then((res) =>res.json())
    .catch((error) => console.error("Error:", error))
    .then((resp) =>{  
                      setIdUsuario(resp.usuario_id);
                      console.log('User id en sesion: ',resp.usuario_id);
                      console.log(recargar);
                      let trigger = recargar;
                      setRecargar(!trigger);
                      console.log(recargar);
                       
    });
  }, []);   



                         
  useEffect(() => {
    // fecth para pedir el Listado de Canchas

    fetch("http://localhost:8000/canchas",{
      method: "GET",
      //credentials: "omit",
      //mode: "no-cors",
      headers: {  'Content-type':'application/json;charset=utf-8',
                  'Accept': 'application/json',
                  'Access-Control-Allow-Origin': '*'
      }
  }).then((res) =>res.json())
    .catch((error) => console.error("Error:", error))
    .then((resp) =>{ console.log('Obteniendo Canchas: ',resp)
                     setListacanchas(resp);
    });
  },[recargar]);


                
  
 
  useEffect(() =>{

    // fecth para pedir las Reservas por Id de Usuario

    fetch(`http://localhost:8000/getInfoReservaByUserId/${idusuario}`,{
      method: "GET",
      //credentials: "omit",
      //mode: "no-cors",
      headers: {  'Content-type':'application/json;charset=utf-8',
                  'Accept': 'application/json',
                  'Access-Control-Allow-Origin': '*'
      }
  }).then((res) =>res.json())
    .catch((error) => console.error("Error:", error))
    .then((resp) =>{ console.log('Obteniendo Reservas: ',resp)
                    setInfoReservas(resp);
  }); 
  },[recargar]);

  useEffect(() =>{

    // fecth para pedir los Pagos por Id de Usuario

    fetch(`http://localhost:8000/pagos/${idusuario}`,{
      method: "GET",
      //credentials: "omit",
      //mode: "no-cors",
      headers: {  'Content-type':'application/json;charset=utf-8',
                  'Accept': 'application/json',
                  'Access-Control-Allow-Origin': '*'
      }
  }).then((res) =>res.json())
    .catch((error) => console.error("Error:", error))
    .then((resp) =>{ console.log('Obteniendo Pagos: ',resp)
                    setListaPagos(resp);
  }); 
  },[recargar]); 
  



  const get_horarios = (cancha_id) =>{

      //fecth para pedir los horarios por Id de Cancha
 
      fetch(`http://localhost:8000/getInfoCanchaById/${cancha_id}`,{
        method: "GET",
        //credentials: "omit",
        //mode: "no-cors",
        headers: {  'Content-type':'application/json;charset=utf-8',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*'
        }
    }).then((res) =>res.json())
      .catch((error) => console.error("Error:", error))
      .then((resp) =>{ console.log('Obteniendo Horarios: ',resp)
                       setHorariosSlideOver(resp);
                       setSlideover(true);
                       console.log(horariosslideover);
      });
    
/*
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
    setHorariosSlideOver(responseHorarios);*/
    return
  }

  const click_cancha = (e)=>{
    if(slideover!=true){
      console.log(e.target);
      console.log(e.target.name);
      console.log(e.target.id);
      get_horarios(e.target.id);
      cancha_slideover(e.target.name); 
      //setSlideover(true);
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

      var csrftoken = getCookie('csrftoken');

      const enviar_pago = (url) =>{
        fetch(url, { method: 'POST',
                     credentials: 'include',
                     headers: {  'Content-type':'application/json;charset=utf-8',
                                  'Accept': 'application/json',
                                  'Access-Control-Allow-Origin': '*',
                                  'X-CSRFToken': csrftoken
                                },
                     body: JSON.stringify({mensaje:"todo bien"}),
        }
        ).then(response => response.json())
         .catch(err => console.log(err)) 
         .then(json => { console.log('RESERVA PAGADA CON EXITO');
                        //let trigger = !recargar;
                        //setRecargar(trigger);
                      }
              );
      return   
      }

      console.log('Pagar la reserva con id: ',e.target.id);
      inforeservas.map((reserva)=>{
          if(reserva.id_reserva==e.target.id)
          {
            console.log('Pago a modificar:' , reserva.id_reserva);
            temp.push({...reserva,pagada:true});
            console.log(temp);
            enviar_pago(`http://localhost:8000/registrarpago/${reserva.id_reserva}`);

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
  return
  }



  const getCookie = (name) => {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
   }   



  const recargar_data = (e) =>{
    let trigger = recargar;
    setRecargar(!trigger);
    console.log('Se activa Trigger de UseEffect');
    return
  }



  return (

    <Router>
        <div className='grid grid-cols-1'> 
          <div > 
          BIENVENIDO</div> 
          


        <Routes>

            <Route exact path='/home' element={ <div className='  flex bg-[url("./images/futbol-4.jpg")] '>
              <MostrarCanchas canchas={listacanchas} clickcancha={click_cancha} slideover={slideover}></MostrarCanchas>
             {slideover ? <Slide_Over showslide={slideover} cancha={canchaslideover} horarios={horariosslideover} clickboton={click_slideover_boton} />:''}
             </div>} />

            <Route path='/reservas' element={<div  className='bg-[url("./images/futbol-4.jpg")] '><Reservas reservas={inforeservas} clickpago={update_pago_reserva}>
              
              </Reservas>
              </div> } />

            <Route path='/historial-pagos' element={ <div  className='bg-[url("./images/futbol-4.jpg")] '> <HistorialPagos pagos={listapagos}></HistorialPagos> </div> } />
         
         </Routes>

         <nav className='flex place-content-center p-2 bg-black'> 
             <ul ></ul>
              <li className='p-4 bg-orange-400' name='home'>
                <Link className='' to='/home'><strong onClick={recargar_data}>HOME</strong></Link>
              </li>
              <li className='p-4 bg-blue-400' name='reserva'>
                <Link className=''  to='/reservas'><strong onClick={recargar_data}>RESERVAS</strong> </Link>
              </li>
              <li className='p-4 bg-purple-400' name='historial'>
                <Link className='' to='/historial-pagos'><strong onClick={recargar_data}>HISTORIAL DE PAGOS</strong></Link>
              </li>
          </nav>

        </div>

    </Router>
  );
}

export default App;
