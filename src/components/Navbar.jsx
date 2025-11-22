import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FcPieChart } from "react-icons/fc";
import { FaPencilAlt } from "react-icons/fa";
import { login, logout, onUserStateChange } from "../api/firebase";
import User from "./User";

export default function Navbar() {
  const [user, setUser] = useState();
  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <header className="flex justify-between border-b border-grey-300 p-2">
      <Link to="/" className="flex item-center text-4xl text-brand">
        <FcPieChart />
        <h1>Justbuyit</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new" className="text-2xl">
          <FaPencilAlt />
        </Link>
        {user && <User user={user} />}
        {!user && <button onClick={login}>Login</button>}
        {user && <button onClick={logout}>Logout</button>}
      </nav>
    </header>
  );
}
