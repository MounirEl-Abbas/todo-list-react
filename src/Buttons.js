import React, { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";

const Buttons = ({
  tasks,
  allTasks,
  handleClearCompleted,
  displayFilteredTasks,
}) => {
  const [arrayControl, setArrayControl] = useState(allTasks);
  const [filterArray, setFilterArray] = useState("");

  useEffect(() => {
    setArrayControl(allTasks);
  }, [allTasks]);

  const clearCompleted = () => {
    const uncompletedTasks = arrayControl.filter((task) => !task.checked);
    handleClearCompleted(uncompletedTasks);
  };

  const selectAll = () => {
    const tasksEl = document.getElementsByName("checkbox");
    //add checked attribute to DOM element

    for (const task of tasksEl) {
      task.checked = true;
    }
    //give tasks object properties checked : true
    tasks.forEach((task) => {
      task.checked = true;
    });
  };

  const handleFilter = (e) => {
    setArrayControl(allTasks);
    setFilterArray(arrayControl);

    const btnClicked = e.target.name;

    if (btnClicked === "allFilter") {
      displayFilteredTasks(arrayControl);
    }
    if (btnClicked === "activeFilter") {
      const activeTasks = arrayControl.filter((task) => !task.checked);
      displayFilteredTasks(activeTasks);
    }
    if (btnClicked === "completedFilter") {
      const completedTasks = arrayControl.filter((task) => task.checked);
      displayFilteredTasks(completedTasks);
    }
  };

  return (
    <div className="btn-container">
      <button onClick={clearCompleted}>Clear Completed</button>
      <button onClick={selectAll}>Select All</button>
      <div className="dropdown">
        <div className="dropbtn">
          <p>Filter by</p>
          <span>
            <FaAngleRight className="arrow-icon" />
          </span>
        </div>
        <div className="dropdown-content">
          <button name="allFilter" onClick={handleFilter}>
            All
          </button>
          <button name="activeFilter" onClick={handleFilter}>
            Active
          </button>
          <button name="completedFilter" onClick={handleFilter}>
            Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
