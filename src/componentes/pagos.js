import React from "react";
import { useState} from 'react';

function HistorialPagos ({pagos}){

    
    

    return(

        <div  className='mx-60 mt-20 border-4 border-indigo-600'>
             <div><h2 className='m-10'><strong>HISTORIAL DE PAGOS REALIZADOS</strong></h2></div>
                {
                    pagos.map ((pago)=>{
                        return(
                        <div className='grid grid-rows-1 grid-flow-col bg-blue-200 
                                        border border-indigo-600 m-5 items-center '>
                        
                                <div className='flex items-center'>
                                    <img className=' w-16 h-16 object-right'
                                               src={require(`../images/modena.png`)}/>
                                    <span> ${pago.precio}</span> 
                                </div>

                                <div className='uppercase'> Mi {pago.cancha_nombre}</div> 

                                <div>{pago.cancha_hora_inicio}  {pago.cancha_hora_fin}</div>
                                <div>{pago.fecha}</div>         

                                
                        </div>   
                        )
                    }) 
                }
        </div>



    )
}

export default HistorialPagos;