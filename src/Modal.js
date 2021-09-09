import React from "react";

const Modal = ({ taskID, tasks, deleteTask, cancelDeleteTask }) => {
  const taskInQuestion = tasks.filter((task) => task.id === taskID);

  return (
    <div className="modal">
      <div className="modal-prompt">
        <h3>Delete task?</h3>
        <p>{taskInQuestion[0].task}</p>

        <div className="modal-btns">
          <button onClick={deleteTask}>Ok</button>
          <button onClick={cancelDeleteTask}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
