import React from "react";

function Slide_Over ({showslide,cancha,horarios} ){

    //const listahorarios = horarios.horariosslideover;
    //console.log('lista de Horarios:' , horarios);
    return(
        <div className={showslide ? 'visible':'hidden'}>
            
            <h5>{cancha.nombre}</h5>
            <img src={require(`../images/futbol.jpg`)} />
            <div> <strong>Lista de Horarios: </strong>
                {
                    horarios.map ((horario)=>{
                        return(
                            <div>{horario.horario_inicio} - {horario.horario_fin}</div>
                        )
                    }) 
                }           
            </div>          
        </div>
        
    )

}



export default Slide_Over;

