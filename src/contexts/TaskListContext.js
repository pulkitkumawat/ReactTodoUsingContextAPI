import React, { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

export const TaskListContext = createContext();

const LOCAL_STORAGE_KEY = "react-todo-context-api-hooks";

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { title: "Read Book", id: 1 },
    { title: "Do something else", id: 2 },
    { title: "Eat Food", id: 3 },
  ]);

  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    console.log("saved: " + JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuid() }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearList = () => {
    setTasks([]);
  };

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );
    setTasks(newTasks);
  };

  return (
    <TaskListContext.Provider
      value={{ tasks, editItem, addTask, deleteTask, findItem, clearList, editTask }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
