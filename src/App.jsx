import { useState } from "react";
import { usePostTodo, useTodos, useTodosById } from "./hooks";

const App = () => {
  const { isError, isFetching, isLoading, data } = useTodos(); // get all data of array
  // const { isError, isFetching, isLoading, data } = useTodosById(); // get by id

  const { mutate } = usePostTodo();

  const [title, setTitle] = useState("");

  if (isFetching || isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <h1>Data not Found</h1>;
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    mutate(title);
    setTitle("");
  };

  return (
    <>
      <div className="p-5 grid grid-cols-2 gap-5">
        {/* Form add */}
        <div>
          <h1>Create Todo:</h1>
          <form onSubmit={(e) => submitHandler(e)}>
            <input
              type="text"
              name="name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-300 rounded-lg outline-none px-4 py-2"
              placeholder="add a value"
            />

            <button type="submit">Submit</button>
          </form>
        </div>

        <div>
          {/* All todos map */}

          <h1>Todos</h1>
          {/* ------------- */}
          {data.length !== 0 &&
            data.map((todo) => (
              <div key={todo.id} className="w-fit">
                <h1 className="border-b-2 border-solid border-gray-600">
                  <b>{todo.id}</b> {todo.title}
                </h1>
              </div>
            ))}

          {/* ----------- */}
          {/* Todo by Id */}
          {/* {data.title} */}
          {/* ---------- */}
        </div>
      </div>
    </>
  );
};

export default App;
