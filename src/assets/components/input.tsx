const Input = () => {
  return (
    <>
      <div className="input">
        <input
          type="text"
          placeholder="write your next task"
          className="input__text"
        />
        <button className="input__btn">+</button>
      </div>
    </>
  );
};
export default Input;
