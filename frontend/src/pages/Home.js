import { useEffect } from "react";
import { useTaskContext } from "../hooks/useTaskContext";
import { useAuthContext } from "../hooks/useAuthContext";
//component
import Todo from "../components/Todo";
import Form from "../components/Form";

export default function Home() {
  const { tasks, dispatch } = useTaskContext();
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchTasks = async () => {
      console.log(user.token);

      const response = await fetch("/tasks", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_TASKS", payload: json });
      }
    };
    if (user) {
      fetchTasks();
    }
  }, [dispatch, user]);
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
