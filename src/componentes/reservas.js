import React from "react";
import { useState} from 'react';

function Reservas ({reservas,clickpago} ){

    
    

    return(

        <div  className='mx-60 mt-20 border-4 border-indigo-600'><h2  className='m-10'><strong>MI RESERVAS</strong></h2>
                {
                    reservas.map ((reserva)=>{
                        return(
                        <div className='grid grid-rows-1 grid-flow-col bg-blue-200 
                                        border border-indigo-600 m-5 items-center '>
                        
                                <div className='uppercase ml-5'>{reserva.cancha}</div>
                                <div>{reserva.precio}</div>
                                <div>{reserva.hora_inicio} - {reserva.hora_fin}</div>
                                <button className={`${ reserva.pagada ?'bg-red-500' : 'bg-green-500'} px-2 py-1 text-white rounded-lg border-2 border-gray
                                       transition-opacity duration-400 hover:opacity-40'`} onClick={clickpago} id={reserva.id_reserva}>{reserva.pagada ? 'Pagado':'Pagar'}</button>
                            
                        </div>   
                        )
                    }) 
                }
        </div>



    )


}



export default Reservas;