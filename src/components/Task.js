import React, { useContext } from "react";
import { TaskListContext } from "./../contexts/TaskListContext";

const Task = ({ task }) => {
  const { deleteTask, findItem } = useContext(TaskListContext);

  const removeTask = () => {
    deleteTask(task.id);
  };

  return (
    <li class="list-item">
      <span>{task.title}</span>
      <div>
        <button class="btn-delete task-btn" onClick={removeTask}>
          <i class="fas fa-trash-alt"></i>
        </button>
        <button class="btn-edit task-btn" onClick={() => findItem(task.id)}>
          <i class="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
};

export default Task;
