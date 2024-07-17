import React from "react";

function Slide_Over ({showslide,cancha,horarios,clickboton} ){

    return(
        <div className='p-5 bg-blue-600 justify-items-center  place-content-center' style={{maxHeight:'800px'}}>

        <div className={ `' ${showslide ? 'visible':'hidden'} ' `}>

            <div className='mb-5 flex'>
               <button className='bg-orange-500 px-2 py-0.5 text-white rounded-lg border-2 border-gray
                                  transition-opacity duration-400 hover:opacity-40' name='Salir'
                                  onClick={clickboton}>  Salir  </button>
            </div>
           
            <div className='m-2' >
            <span className='text-white uppercase'><strong>{cancha.nombre}</strong></span>
            <img className='rounded-lg y-2 border'src={require(`../images/futbol.jpg`)} />
            </div>

            <strong className='text-white'>  Lista de Horarios  </strong>

            <div className='py-2'> 
                
                <div className='overflow-y-scroll border-2 mx-8' style={{maxHeight:'175px'}} >
                {
                    horarios.map ((horario)=>{
                        return(
                            <div className={`' border ${horario.disponible ? 'bg-white':'bg-red-200'} '`}>
                                <input type='checkbox' id={horario.horario_id} name={horario.horario_id} 
                                       className={`${horario.disponible ? '':'pointer-events-none'} mr-2`} />
                                <label htmlfor={horario.horario_id}>{horario.horario_inicio} - {horario.horario_fin}</label>  
                            </div>
                        )
                    }) 
                }
                </div>
            </div> 
            <div  className='my-10 flex-auto space-x-4'>
                    <button className='bg-green-600 px-2 py-1 text-white rounded-lg border-2 border-gray
                                       transition-opacity duration-400 hover:opacity-40' name='Reservar'
                                       onClick={clickboton}> Reservar </button>
                    <button className='bg-red-500 px-2 py-1 text-white rounded-lg border-2 border-gray
                                       transition-opacity duration-400 hover:opacity-40' name='Cancelar'
                                       onClick={clickboton}> Cancelar </button>
            </div> 

            <div className='flex justify-items-center  place-content-center'>
                 <img className='rounded-lg y-2 border w-70 h-20'src={require(`../images/bootcampespol.png`)} />
            </div>

        </div>
        </div>
        
    )

}



export default Slide_Over;

