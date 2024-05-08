
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Parks from "./components/Parks";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { CheckSession } from "../services/Auth";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogOut = () => {
    setUser(null);
    localStorage.clear();
  };

  useEffect(() => {
    const checkToken = async () => {
      const user = await CheckSession();
      setUser(user);
    };

    const token = localStorage.getItem("token");
    if (token) {
      checkToken();
    }
  }, []);

  return (
    <div className="App">
      <Nav user={user} handleLogOut={handleLogOut} />
      <h1>Thrill Track - Your Adventure Oasis Awaits!</h1>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/parks" element={<Parks user={user} />} />
        </Routes>
      </main>
    </div>
  );
};


export default App;
