import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Nav = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();

  const handleSearch = () => {
    history.push(`/parks?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <nav className="navbar">
      <h4>Thrill Track</h4>
      <div>
        <Link to="/">Home</Link>
        <Link to="/parks">Parks</Link>
        <Link to="/add">Contact Us</Link>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search parks..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </nav>
  );
};

export default Nav;
