import React from "react";


function MostrarCanchas ({canchas, clickcancha}){
   
    console.log(canchas);
    return(
            <div className='grid grid-cols-4 gap-4 py-5 px-20 overflow-y-scroll' 
                 style={{maxHeight:'800px'}} >{
                    canchas.map((cancha)=>{
                        
                    return <div className={ ` ' bg-stone-100 text-center px-4 py-4 grid grid-cols-1-rows-3 gap-1 
                                                shadow-md rounded border-solid border-2 
                                               
                                           ${cancha.disponible ? ' border-green-600 rounded-lg':' border-red-600 rounded-lg'} ' `}
                                style={{maxHeight:'450px'}}>
                        
                                    <div className='py-1.5'  > 
                                        <img className='object-cover bg-sky-500 hover:bg-sky-700 transition-opacity duration-300 hover:opacity-40' 
                                             name={cancha.nombre} onClick={clickcancha}  
                                             src={require(`../images/${cancha.descripcion}.jpg`)} />
                                    </div>

                                    <div> {cancha.nombre} </div>

                                    <div className='flex justify-center'> 
                                               <img className=' w-8 h-8 object-right'
                                               src={require(`../images/modena.png`)}/> 
                                               <span className='p-0.5 align-middle'> {cancha.precio}$/h </span>
                                    </div>
                            </div>
                           })
                        }             
            </div>

        )
}
                    
                    
           

 
export default MostrarCanchas;