import DoneCircle from "./doneCircle";

const Done = () => {
  return (
    <>
      <div className="done">
        <div className="done__left">
          <h1 className="done__left__hed">Todo Done</h1>
          <h3 className="done__left__subhed">keep it up</h3>
        </div>
        <div className="done__right">
          <DoneCircle />
        </div>
      </div>
    </>
  );
};
export default Done;
