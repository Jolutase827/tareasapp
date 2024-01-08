import React, { useState } from 'react';
import './App.css';
import TareaForm from './componentes/TareaForm';
import ListaDeTareas from './componentes/ListaDeTareas';
function App() {
  const [tarea,setTarea]= useState('');
  let tareas = [];
  const addTarea = ()=>{
    tareas.push(tarea);
    console.log(tareas);
    setTarea('');
  }
  const setContent = (e)=>{
    setTarea(e);
  }
  return (
    <div className="App h-[100vh] flex justify-center items-center w-[100vw] flex-col">
      <div className='w-[30vw] text-center text-orange-400 font-medium text-shadow'>
        <h1 className='text-4xl'>APP TAREAS</h1>
        <h1 className='text-3xl'>2ºDAW - Curso 23/24</h1>
      </div>
      <div className='bg-gray-200 w-[30vw] min-h-[500px] mt-5 rounded-lg'>
        <TareaForm
          salida={ tarea }
          onClic={ addTarea }
          onChange={ setContent }
        />
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
