import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
export default function Navbar() {
  const { logout } = useLogout();
  const handleClick = (e) => {
    // e.preventDefault();
    logout();
  };
  return (
    <header className="text-3xl flex mx-16 p-8 border-b-2 border-green-400  ">
      <Link to="/">
        <h1>Task Manager</h1>
      </Link>
      <nav>
        <div>
          <button onClick={handleClick}>Log out</button>
        </div>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </nav>
    </header>
  );
}
