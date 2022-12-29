import { useEffect } from "react";
import { useTaskContext } from "../hooks/useTaskContext";
//component
import Todo from "../components/Todo";
import Form from "../components/Form";

export default function Home() {
  const { tasks, dispatch } = useTaskContext();

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("/tasks");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TASKS", payload: json });
      }
    };
    fetchTasks();
  }, [dispatch]);
  console.log(tasks);
  return (
    <div className="grid grid-cols-5  bg-gray-100 min-h-screen ">
      <div className="flex flex-col col-span-3  ">
        {tasks && tasks.map((task) => <Todo key={task._id} todo={task} />)}
      </div>
      <div className="col-span-2">
        <Form />
      </div>
    </div>
  );
}
