import { useState } from "react";
import Layout from "./assets/components/layout";
import editIcon from "./assets/icons/edit.svg";
import deleteIcon from "./assets/icons/trash.svg";
import "./assets/styles/style.scss";

const App = () => {
  // State za listu zadataka
  const [tasks, setTasks] = useState<{ text: string; done: boolean }[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  // Dodavanje novog zadatka
  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, { text: inputValue, done: false }]);
      setInputValue("");
    }
  };

  // Označavanje zadatka kao obavljenog
  const handleTaskDone = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = true;
    setTasks(updatedTasks);
  };

  // Uklanjanje zadatka
  const handleRemoveTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <>
      <Layout>
        <div className="done">
          <div className="done__left">
            <h1 className="done__left__hed">Todo Done</h1>
            <h3 className="done__left__subhed">keep it up</h3>
          </div>
          <div className="done__right">
            <div className="done__circle">
              {/* Broj obavljenih zadataka */}
              <h1 className="done__circle__info">
                {tasks.filter((task) => task.done).length}/{tasks.length}
              </h1>
            </div>
          </div>
        </div>
        <div className="input">
          <input
            value={inputValue}
            type="text"
            placeholder="write your next task"
            className="input__text"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="input__btn" onClick={handleAddTask}>
            +
          </button>
        </div>
        <ul className="list">
          {/* Prikaz svih zadataka */}
          {tasks.map((task, index) => (
            <li key={index} className={`task ${task.done ? "task--done" : ""}`}>
              <div className="task__left">
                <div
                  className={` ${
                    task.done
                      ? "task__left__circle--done"
                      : "task__left__circle"
                  }`}
                  onClick={() => handleTaskDone(index)}
                ></div>
                <h1 className={task.done ? "task__text--done" : ""}>
                  {task.text}
                </h1>
              </div>
              <div className="task__right">
                <img
                  src={editIcon}
                  alt="Edit Icon"
                  className="task__right__icon"
                />
                <img
                  src={deleteIcon}
                  alt="Delete Icon"
                  className="task__right__icon"
                  onClick={() => handleRemoveTask(index)}
                />
              </div>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
};

export default App;
