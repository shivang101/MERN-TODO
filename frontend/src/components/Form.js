import React, { useState } from "react";
import { useTaskContext } from "../hooks/useTaskContext";

export default function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(null);

  const { dispatch } = useTaskContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = { title, description, completed };

    const response = await fetch("/tasks/", {
      method: "POST",
      body: JSON.stringify(task),

      headers: {
        "Content-type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      console.log(error);
      setTitle("");
      setDescription("");
      setCompleted(false);
      setError(null);
      console.log("new task added", json);
      dispatch({ type: "CREATE_TASK", payload: json });
    }
  };

  return (
    <>
      <form
        className="flex flex-col items-center border border-stone-900 mx-16 bg-lime-50"
        action=""
        onSubmit={handleSubmit}
      >
        <h3 className="font-medium text-4xl my-4">Add a new Task</h3>

        <div className="flex w-full items-center">
          <label>Title: </label>
          <input
            className="bg-green-50 border border-green-500 placeholder-green-700 dark:placeholder-green-500 text-lg rounded-lg focus:ring-green-500 focus:border-green-500 mx-2 w-full p-2.5"
            placeholder="Enter Title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="self-center text-3xl font-medium my-4 ">
            Description
          </label>
          <textarea
            className="bg-green-50 text-lg border border-green-500 placeholder-green-700  rounded-lg focus:ring-green-500 focus:border-green-500 mx-2 p-2.5 h-64"
            type="text"
            placeholder="Enter Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>

        <div>
          <label>Completed</label>
          <input
            type="checkbox"
            value={completed}
            onClick={() => setCompleted(!completed)}
          />
        </div>

        <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Submit
        </button>
        {error && <div className="text-red-500">{error}</div>}
      </form>
    </>
  );
}
