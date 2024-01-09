import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
function App() {
  return (
    <div className="App h-[100vh] flex justify-center items-center w-[100vw] flex-col">
      <div className='w-[30vw] text-center text-orange-400 font-medium text-shadow'>
        <h1 className='text-4xl'>APP TAREAS</h1>
        <h1 className='text-3xl'>2ºDAW - Curso 23/24</h1>
      </div>
      <div className='bg-gray-200 w-[30vw] min-h-[500px] mt-5 rounded-lg'>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
