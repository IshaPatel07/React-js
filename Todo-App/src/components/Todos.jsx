import { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([{ title: "workout at 6AM" }]);
  const [title, setTitle] = useState("");
  return (
    <>
      <section>
        <div className="container">
          <div className="mt-4">
            <h2>Daily Notes...</h2>
            <p>Structure Your thoughts by daily notes...</p>
          </div>
          <div className="d-flex my-5">
            <input
              placeholder="Add your fav poem,story,bill notes etc...."
              className="form-control"
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <button
              onClick={() => {
                setTodos([...todos, { title }]);
              }}
              className={
                " btn btn-primary mx-3 " + (title === "" ? "disabled" : "")
              }
            >
              Add
            </button>
          </div>
          <div className="">
            {todos.map((todo, i) => (
              <div key={i} className="d-flex mt-3">
                <p>{todo.title}</p>
                <button
                  className="btn btn-danger mx-5"
                  onClick={() => {
                    const temp = [...todos];
                    temp.splice(i, 1);
                    setTodos(temp);
                  }}
                >
                  delete
                </button>
                <button className="btn btn-warning mx-6">
                  edit
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Todos;
