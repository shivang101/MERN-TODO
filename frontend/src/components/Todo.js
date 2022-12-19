import React, { useEffect } from "react";

export default function Todo({ todo }) {
  let time = new Date(todo.createdAt);
  const month = time.toLocaleString("default", { month: "short" });
  const day = time.getDate();
  const hour = time.getHours();
  const min = time.getMinutes();

  return (
    <section className="mx-16 my-10 ">
      <h1>{`This task was made on ${day} of ${month} ${hour}:${min} mins`}</h1>
      <h4 className="text-2xl font-bold">{todo.title}</h4>
      <span>{todo.description}</span>

      <span className="flex justify-between">
        <p>Completed : </p>
        <p>{`${todo.completed}`}</p>
      </span>
    </section>
  );
}
