import React from "react";
import { FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Tasks = ({ tasks, addNewTask, handleRemoveItem, handleCheckTask }) => {
  return (
    <div className="tasks-container">
      <div className="task-container">
        {tasks &&
          tasks.map(({ task, id, checked }) => {
            return (
              <div key={id} id={id} className="task">
                <input
                  type="checkbox"
                  onClick={() => handleCheckTask(id)}
                  defaultChecked={checked}
                  name="checkbox"
                  id="checkbox"
                />

                <div className="todo-text">
                  <p>{task}</p>
                </div>
                <button onClick={() => handleRemoveItem(id)}>
                  <ImCross />
                </button>
              </div>
            );
          })}
      </div>
      <div className="input-task">
        <input
          type="text"
          id="task-input"
          placeholder={"Add Task"}
          onKeyDown={addNewTask}
        />
        <FaPlus className="plus-icon" />
      </div>
    </div>
  );
};

export default Tasks;
