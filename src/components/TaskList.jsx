import TaskCrad from "./TaskCrad"
import { TaskContext } from "../TaskContext/TaskContext"
import { useContext } from "react"
function TaskList() {
    const { tasks } = useContext(TaskContext)
    if(tasks.length === 0) {
        return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun</h1>
    }else{
      return (
    <div className="grid grid-cols-4 gap-2">
        {tasks.map((task) =>(
            <TaskCrad task={task} key={task.id}/>

            ))}
    </div>
  )    
    }

}

export default TaskList
