import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  useEffect(() => {
    setTasks(data);
  }, []);
  const [tasks, setTasks] = useState([]);
  const createTask = (task) => {
    setTasks([
      ...tasks,
      { title: task.title, description: task.description, id: tasks.length },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  let x = 20;
  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
