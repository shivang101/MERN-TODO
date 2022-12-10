import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="text-3xl flex mx-16 p-8 border-b-2 border-green-400  ">
      <Link to="/">
        <h1>Task Manager</h1>
      </Link>
    </header>
  );
}
