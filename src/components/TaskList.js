import React, { useContext } from "react";
import { TaskListContext } from "./../contexts/TaskListContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);

  return (
    <div>
      <ul class="list">
        {tasks.length ? (
          tasks.map((task) => {
            return <Task task={task} key={task.id} />;
          })
        ) : (
          <div className='no-tasks'>no tasks</div>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
