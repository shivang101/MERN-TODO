import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

export const useTaskContext = () => {
  const context = useContext(TaskContext);

  if (context) {
    return context;
  } else {
    throw Error("Task Context not in the scope");
  }
};
