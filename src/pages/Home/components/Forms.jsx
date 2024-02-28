import React from "react";

export const AddForm = (props) => {
  const { text, submitEvent, title, changeEvent } = props;
  return (
    <div>
      <h1>{text}</h1>
      <form onSubmit={submitEvent}>
        <input
          type="text"
          name="name"
          value={title}
          onChange={changeEvent}
          className="border-2 border-gray-300 rounded-lg outline-none px-4 py-2"
          placeholder="add a value"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};