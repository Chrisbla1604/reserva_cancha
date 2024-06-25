import React from "react";

function MostrarCanchas ({canchas}){

    

    return(
            <div className='grid grid-cols-4 gap-4 overflow-y-scroll' style={{maxHeight:'400px'}}>{
                    canchas.map((cancha)=>{
                    return<div className='text-center px-4 px-8 bg-red-500' style={{height:'150px'}} >{cancha.nombre} precio${cancha.precio}</div>
                    })
                }
            </div>



    )
}




 
export default MostrarCanchas;