import React from "react";


function TareaForm(props){
    return (
        <div className="flex items-center flex-col">
            <h1 className="mt-3 text-xl">Mis Tareas</h1>
            <div className="w-[100%] flex justify-center mt-3">
                <input type="text" placeholder='Write here' className="h-10 ps-2 w-[60%] border-green-700 border-2 rounded-l-lg" value={ props.salida } onChange={(e)=>props.onChange(e.target.value)}/>
                <button className="bg-green-700 pe-3 ps-3 text-white border-green-700 border-2 hover:bg-green-400 hover:border-green-400 rounded-r-lg hover:text-black" onClick={props.onClic()}>Create</button>
            </div>
        </div>
    )
}

export default TareaForm;