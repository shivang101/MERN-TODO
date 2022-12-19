import React from "react";
import { useEffect, useState } from "react";

//component
import Todo from "../components/Todo";
import Form from "../components/Form";

export default function Home() {
  const [tasks, setTasks] = useState(null);
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("/tasks");
      const json = await response.json();

      if (response.ok) {
        setTasks(json);
      }
    };
    fetchTasks();
  }, []);
  console.log(tasks);
  return (
    <div className="grid grid-cols-5 ">
      <div className="flex flex-col col-span-3 border-2 border-stone-900 ">
        {tasks && tasks.map((task) => <Todo key={task._id} todo={task} />)}
      </div>
      <div className="col-span-2">
        <Form />
      </div>
    </div>
  );
}
