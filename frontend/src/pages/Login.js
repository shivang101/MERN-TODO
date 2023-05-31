import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import pic1 from ".././images/pic1.jpg";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    await login(email, password);
  };

  return (
    <div className="grid gap-0 grid-cols-3 mt-16 w-fit right-0 mx-auto">

      <form className="login col-span-2 w-full" onSubmit={handleSubmit}>
        <h3 className="text-center font-VesperLibre text-4xl">Login</h3>

        <label className="text-2xl font-ab mt-10 mb-3" >Email:</label>

        <input className="text-lg"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label className="text-2xl font-ab mt-10 mb-3 " >Password:</label>
        <input
          className="text-lg"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <div className="flex flex-col items-center mt-10">
          <button className="text-3xl font-ab rounded-lg" disabled={isLoading}>Login In</button>
          {error && <div className="error">{{ error } || "backend not connected"}</div>}


          <span className="mt-4">Not Registered with us?
          </span>
          <Link className="text-blue-700" href="/signup">Sign Up</Link>
        </div>
      </form>
      <div>
        <img className="w-72 h-full " src={pic1} alt="motivation"></img>
      </div>

    </div>
  );
}
