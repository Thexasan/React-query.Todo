import React from "react";

export const Todos = (props) => {
  const { data, text } = props;
  return (
    <div>
      {/* All todos map */}
      <h1>{text}</h1>
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
  );
};
