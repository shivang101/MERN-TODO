import { useTaskContext } from "../hooks/useTaskContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Todo({ todo }) {
  let time = new Date(todo.createdAt);
  const month = time.toLocaleString("default", { month: "short" });
  const day = time.getDate();
  const hour = time.getHours();
  const min = time.getMinutes();

  const { dispatch } = useTaskContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }
    const response = await fetch("/tasks/" + todo._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    console.log(json);

    if (response.ok) {
      dispatch({ type: "DELETE_TASK", payload: json });
    }
  };

  return (
    <section className="mx-16 p-4 my-10 border-2 bg-white border-green-700">
      <h1>{`This task was made on ${day} of ${month} ${hour}:${min} mins`}</h1>
      <h2>
        {formatDistanceToNow(new Date(todo.createdAt), { addSuffix: true })}
      </h2>
      <div className="flex justify-between ">
        <h4 className="text-2xl font-bold text-green-600">{todo.title}</h4>
        <span className="material-symbols-outlined" onClick={handleClick}>
          Delete
        </span>
      </div>
      <span>{todo.description}</span>

      <span className="flex justify-between">
        <p>Completed : </p>
        <p>{`${todo.completed}`}</p>
      </span>
    </section>
  );
}
