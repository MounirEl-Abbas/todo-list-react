import Tasks from "./Tasks";
import Modal from "./Modal";
import Buttons from "./Buttons";
import React, { useState, useEffect } from "react";

let tasksArray = [];
let allTasksArray = [];

function App() {
  const [showModal, setShowModal] = useState(false);
  const [taskID, setRemoveID] = useState("");
  const [tasks, setTasks] = useState("");

  // Add new task to array, pass array to tasks, and populate
  const addNewTask = (e) => {
    allTasksArray = [];
    if (e.key === "Enter") {
      let addedTask = e.target.value;
      tasksArray = [
        ...tasks,
        {
          task: addedTask,
          id: new Date().getTime().toString(),
          checked: false,
        },
      ];
      allTasksArray.push(...tasksArray);
      setTasks(tasksArray);
    }
  };
  // toggle checked value in appropriate object of array
  const handleCheckTask = (id) => {
    tasks.forEach((task) => {
      if (task.id === id) {
        task.checked = !task.checked;
      }
    });
  };
  // When the remove button is clicked, show Modal screen
  const handleRemoveItem = (id) => {
    setShowModal(true);
    setRemoveID(id);
  };
  // Once confirmed delete on modal screen, remove from tasks and update UI
  const deleteTask = () => {
    const newTasks = tasks.filter((task) => task.id !== taskID);
    setTasks(newTasks);
    allTasksArray = newTasks;
    setShowModal(false);
  };
  // Cancel deletion of task in modal screen
  const cancelDeleteTask = () => {
    setShowModal(false);
    return;
  };

  const handleClearCompleted = (array) => {
    setTasks(array);

    allTasksArray = array;
    console.log(`allTasksArray`, allTasksArray);
  };
  const displayFilteredTasks = (array) => {
    setTasks(array);
  };

  return (
    <>
      <div className="container">
        <Buttons
          tasks={tasks}
          allTasks={allTasksArray}
          handleClearCompleted={handleClearCompleted}
          displayFilteredTasks={displayFilteredTasks}
        />
        <Tasks
          tasks={tasks}
          handleRemoveItem={handleRemoveItem}
          handleCheckTask={handleCheckTask}
          addNewTask={addNewTask}
        />
      </div>
      {showModal && (
        <Modal
          tasks={tasks}
          taskID={taskID}
          deleteTask={deleteTask}
          cancelDeleteTask={cancelDeleteTask}
        />
      )}
    </>
  );
}

export default App;
