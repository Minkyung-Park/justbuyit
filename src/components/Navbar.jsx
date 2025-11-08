import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcPieChart } from "react-icons/fc";
import { FaPencilAlt } from "react-icons/fa";
import { login, logout } from "../api/firebase";

export default function Navbar() {
  const [user, setUser] = useState();
  const handleLogin = () => {
    login().then(setUser);
  };
  const handleLoout = () => {
    logout().then(setUser);
  };

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
        {!user && <button onClick={handleLogin}>Login</button>}
        {user && <button onClick={handleLoout}>Logout</button>}
      </nav>
    </header>
  );
}
