import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

const Nav = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/parks?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <nav className="navbar">
      <h4>Thrill Track</h4>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/parks">Parks</Link>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search parks..."
        />
        <button onClick={handleSearch}>Search</button>
        <section className="login">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </section>
      </div>
    </nav>
  );
};

export default Nav;
