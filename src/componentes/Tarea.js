import React, { useState } from "react";
import { FaBackspace } from "react-icons/fa";
import "./../hojas-estilos/Tarea.css";

function Tarea(props){
    return (
        <div className={props.complete?"completada":"sin-completar"}>
            <h1 className=" text-lg " onClick={()=> props.completeTarea(props.id)}>{props.text}</h1>
            <FaBackspace 
                className="text-xl" 
                onClick={()=> props.deleteTarea(props.id) }
            />
        </div>
    )
}

export default Tarea;