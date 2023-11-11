let counter = 0;

/**
 * 名前送信フォーム
 */
const NameForm = () => {
  return (
    <>
      <form className="m-4 border border-solid border-black">
        <div className="m-2">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            className="border border-solid border-black"
          />
        </div>
        <div className="m-2">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            className="border border-solid border-black"
          />
        </div>
        <p className="m-2">
          Render:<span>{counter++}</span>
        </p>
        <input type="submit" value="submit" className="m-2" />
      </form>
    </>
  );
};
export default NameForm;
