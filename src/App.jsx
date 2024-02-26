import { useTodos, useTodosById } from "./hooks/useTodos";

const App = () => {
  // const { isError, isFetching, isLoading, data } = useTodos(); get all data of array
  const { isError, isFetching, isLoading, data } = useTodosById(); // get by id

  if (isFetching || isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <h1>Data not Found</h1>;
  }

  return (
    <>
      <div>
        {/* All todos map */}

        {/* ------------- */}
        {/* {data.length !== 0 &&
          data.map((todo) => (
            <div key={todo.id}>
              <h1>{todo.title}</h1>
            </div>
          ))} */}

        {/* ----------- */}

        {/* Todo by Id */}
        {/* ---------- */}

        {data.title}
        {/* ---------- */}
      </div>
    </>
  );
};

export default App;
