import React, { useState } from "react";
import Tarea from "./Tarea";
import TareaForm from "./TareaForm";
function ListaDeTareas(){

    const [tareas,setTareas]= useState([]);


    const completarTarea = tarea =>{
        if(tarea.text.trim()){
            tarea.text = tarea.text.trim();
            const tareasUpdated = [tarea,...tareas];
            setTareas(tareasUpdated);
        }
    };

    const deleteTarea = id =>{
        const tareasUpdated = tareas.filter(tarea=> tarea.id !== id);
        setTareas(tareasUpdated);
    }
    const completeTarea = id=>{
        const tareasUpdated = tareas.map(tarea=>{
            if (tarea.id === id) {
                tarea.complete = !tarea.complete ;
            }
            return tarea;
        });
        setTareas(tareasUpdated);
    }


    return (
        <>
        <TareaForm onSubmit={ completarTarea }/>
        <div className="flex items-center flex-col w-[100%]">
            {tareas.map(tarea=>
                <Tarea
                    key={ tarea.id }
                    id={tarea.id}
                    text={tarea.text}
                    complete={ tarea.complete }
                    completeTarea={ completeTarea }
                    deleteTarea = { deleteTarea }
                />
            )}
        </div>
        </>
    )
}

export default ListaDeTareas;