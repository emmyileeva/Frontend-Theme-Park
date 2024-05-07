import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, useHistory } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';
import Parks from './components/Parks'; 
import Home from './components/Home';
import AddPark from './components/AddPark'; 

const Nav = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  const handleSearch = () => {
    history.push(`/parks?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <nav className="navbar">
      <h4>Thrill Track</h4>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/parks">Parks</NavLink>
        <NavLink to="/add">Add Park</NavLink> {/* Change the route to "/add" */}
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
}

function App() {
  return (
    <Router>
      <div>
        <header>
          <Nav />
          <h1>Thrill Track - Your Adventure Oasis Awaits!</h1>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/parks">
              <Parks />
            </Route>
            <Route path="/add"> 
              <AddPark />
            </Route>
          </Switch>
        </main>
        <footer>
          <nav>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/privacy">Privacy</Link></li>
            </ul>
          </nav>
          <p>&copy; 2024 ThrillTrack. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
