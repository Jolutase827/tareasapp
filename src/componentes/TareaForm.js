import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function TareaForm(props){
    const [input,setInput] = useState('');

    const inputEvent = e=>{
        setInput(e.target.value);
    }

    const addTarea = e => {
        e.preventDefault();
        const tareaNueva={
            id: uuidv4(),
            text: input,
            complete:false
        }
        props.onSubmit(tareaNueva);
    }


    return (
        <div className="flex items-center flex-col">
            <h1 className="mt-3 text-xl">Mis Tareas</h1>
            <form className="w-[100%] flex justify-center mt-3" onSubmit={ addTarea }>
                <input type="text" placeholder='Write here' className="h-10 ps-2 w-[60%] border-green-700 border-2 rounded-l-lg" onChange={ inputEvent }/>
                <button className="bg-green-700 pe-3 ps-3 text-white border-green-700 border-2 hover:bg-green-400 hover:border-green-400 rounded-r-lg hover:text-black">Create</button>
            </form>
        </div>
    )
}

export default TareaForm;