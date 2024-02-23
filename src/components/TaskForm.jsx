import { useState, useContext } from "react";
import { TaskContext } from "../TaskContext/TaskContext";
function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)

  const handdleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    const newTask = {
      title: title,
      description: description,
    };
    createTask(newTask);
  };
  return (
    <div className="max-w-md mx-auto">
            <form onSubmit={handdleSubmit} className="bg-slate-800 p-10 mb-4">
              <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escrbe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <button
        className="bg-indigo-500 px-3 py-1 text-white"
        >Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
