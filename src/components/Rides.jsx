import React, { useState, useEffect } from "react";
import { getRides } from "../services/api";

const Rides = () => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const fetchRidesData = async () => {
      try {
        const response = await getRides();
        setRides(response.data);
      } catch (error) {
        console.error("Error fetching rides:", error);
      }
    };

    fetchRidesData();
  }, []);

  return (
    <div>
      <h2>Rides</h2>
      <ul>
        {rides.map((ride) => (
          <li key={ride.id}>{ride.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Rides;
