import React from "react";
import Tarea from "./Tarea";

function ListaDeTareas(){
    return (
        <div className="flex items-center flex-col w-[100%]">
            <Tarea
                name='Hacer JQ'
            />
        </div>
    )
}

export default ListaDeTareas;