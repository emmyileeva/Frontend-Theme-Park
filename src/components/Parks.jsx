import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const Parks = () => {
  const [parks, setParks] = useState([]);
  const [selectedPark, setSelectedPark] = useState(null);
  const [showTheme, setShowTheme] = useState(false);
  const attractions = ["Night Light Show", "Circus", "Magic Show"];

  useEffect(() => {
    fetchParks();
  }, []);

  const fetchParks = async () => {
    try {
      const response = await axios.get(
        "https://themepark123-e6af4e64e039.herokuapp.com/parks"
      );
      if (Array.isArray(response.data)) {
        setParks(response.data);
        setSelectedPark(response.data[0]); // Select the first park by default
      } else {
        console.error("Fetched parks data is not an array:", response.data);
      }
    } catch (error) {
      console.error("Error fetching parks:", error);
    }
  };

  const handleParkClick = (park) => {
    setSelectedPark(park);
  };

  const handleAttractionsClick = (attraction) => {
    // Handle attraction click event
  };

  const handleThemeClick = () => {
    setShowTheme(true);
  };

  return (
    <div>
      <div className="navbar">
        <div className="nav-links">
          
        </div>
      </div>
      <div className="park-container">
        <ul className="parks-list">
          {parks.map((park) => (
            <li key={park._id} className="park-item">
              <div onClick={() => handleParkClick(park)}>
                <a href={`#${park.name}`} className="park-link">
                  {park.name}
                </a>
              </div>
            </li>
          ))}
        </ul>
        {selectedPark && (
          <div className="park-details">
            <h2>{selectedPark.name}</h2>
            <p>Location: {selectedPark.location}</p>
            <p>Admission Price: ${selectedPark.admissionPrice}</p>
            <p>Capacity: {selectedPark.capacity}</p>
            <p>Description: {selectedPark.description}</p>

          </div>
        )}
      </div>
    </div>
  );
};

export default Parks;
