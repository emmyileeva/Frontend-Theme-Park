import { useState, useEffect } from "react";
import axios from "axios";

const Parks = () => {
  const [parks, setParks] = useState([]);

    const fetchParks = async () => {
        try {
            const response = await axios.get('https://themepark123-e6af4e64e039.herokuapp.com/'); //  'HEROKU_API_URL_HERE' 
            setParks(response.data);
        } catch (error) {
            console.error('Error fetching parks:', error);
        }
    }
  };

  useEffect(() => {
    fetchParks();
  }, []);

  return (
    <div>
      <h1>Parks</h1>
      <div>
        {parks.map((park) => (
          <div key={park._id}>
            <h3>{park.name}</h3>
            <p>Location: {park.location}</p>
            <p>Description: {park.description}</p>
            <p>Admission Price: {park.admissionPrice}</p>
            <p>Capacity: {park.capacity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parks;
