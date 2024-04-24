import editIcon from "../icons/edit.svg";
import deleteIcon from "../icons/trash.svg";

const Task = () => {
  return (
    <>
      <div className="task">
        <div className="task__left">
          <div className="task__left__circle"></div>
          <h1>Task 1</h1>
        </div>
        <div className="task__right">
          <img src={editIcon} alt="Edit Icon" className="task__right__icon" />
          <img src={deleteIcon} alt="Edit Icon" className="task__right__icon" />
        </div>
      </div>
    </>
  );
};
export default Task;
