import { useState } from "react";
import { usePostTodo, useTodos, useTodosById } from "../../hooks";
import { AddForm, Todos } from "./components";

export const Home = () => {
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
        <AddForm
          text={"Create Todo:"}
          submitEvent={(e) => submitHandler(e)}
          title={title}
          changeEvent={(e) => setTitle(e.target.value)}
        />
        {/* data of backend */}
        <Todos data={data} text={"Todo"} />
      </div>
    </>
  );
};
