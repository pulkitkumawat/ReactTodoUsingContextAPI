import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "./../contexts/TaskListContext";

const TaskForm = () => {
  const { editItem, editTask, addTask, clearList } = useContext(
    TaskListContext
  );

  const [task, setTask] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (editItem) {
      setTask(editItem.title);
      setIsEdit(true);
    }
  }, [editItem]);

  const handleSubmit = (event) => {
    event.preventDefault();
    editItem ? editTask(task, editItem.id) : addTask(task);
    setTask("");
    setIsEdit(false);
  };

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={handleChange}
        className="task-input"
        placeholder="Add Task.."
        required
      />

      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {isEdit ? "Edit Task" : "Add Task"}
        </button>
        <button className="btn clear-btn" onClick={clearList}>
          Clear All
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
