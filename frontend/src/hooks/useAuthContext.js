import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useTaskContext = () => {
  const context = useContext(AuthContext);

  if (context) {
    return context;
  } else {
    throw Error("auth Context not in the scope");
  }
};
