import React, { useState, useEffect } from "react";
import axios from "axios";

const Parks = () => {
  const [parks, setParks] = useState([]);
  const [selectedPark, setSelectedPark] = useState(null);
  const [showTheme, setShowTheme] = useState(false);

  useEffect(() => {
    fetchParks();
  }, []);

  const fetchParks = async () => {
    try {
      const response = await axios.get(
        "https://themepark123-e6af4e64e039.herokuapp.com/"
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
    
  };

  const handleEventEdit = (eventId) => {
    
  };

  const handleEventDelete = (eventId) => {
    
  };

  const handleThemeClick = () => {
    setShowTheme(true);
  };

  return (
    <div>
      <div className="navbar">
        <div className="nav-links">
          <a href="#" className="nav-link">Attractions</a>
          <a href="#" className="nav-link">Events</a>
          <a href="#" className="nav-link" onClick={handleThemeClick}>Theme</a>
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
            <p>Food Courts: {selectedPark.foodCourtsAvailable ? "Available" : "Not Available"}</p>
            <p>Rides:</p>
            <ul>
              {selectedPark.rides.map((ride, index) => (
                <li key={index}>{ride}</li>
              ))}
            </ul>
            <div>
              <h3>Attractions</h3>
              <ul>
                <li>
                  <a href="#" onClick={() => handleAttractionsClick("Night Light Show")}>Night Light Show</a>
                  <p>Date and Time: [Insert date and time here]</p>
                </li>
                {/* Add more attractions here */}
              </ul>
            </div>
            <div>
              <h3>Events</h3>
              <ul>
                <li>
                  Event 1
                  <button onClick={() => handleEventEdit("event1")}>Edit</button>
                  <button onClick={() => handleEventDelete("event1")}>Delete</button>
                </li>
                {/* Add more events here */}
              </ul>
            </div>
          </div>
        )}
      </div>
      {showTheme && (
        <div className="theme-container">
          
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <a href="#">Comic Carnival</a>
            </li>
            <li>
              <a href="#">Whimsy Wonderland</a>
            </li>
            <li>
              <a href="#">Fantasy Fiesta</a>
            </li>
            <li>
              <a href="#">Adventure Abyss</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Parks;
