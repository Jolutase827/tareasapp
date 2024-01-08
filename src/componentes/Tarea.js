import React from "react";
import { FaBackspace } from "react-icons/fa";

function Tarea(props){
    return (
        <div className="w-[80%] h-[50px] flex justify-between items-center pe-4 ps-4 bg-green-800 mt-2 rounded border-green-700 border-2 text-white">
            <h1 className=" text-lg ">{props.name}</h1>
            <FaBackspace 
                className="text-xl"
            />
        </div>
    )
}

export default Tarea;