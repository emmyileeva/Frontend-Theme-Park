import { useState, useEffect } from 'react'
import axios from 'axios'

const Rides = () => {

  const [rides, setRides] = useState([])
  
  const fetchRides = async () => {
    let response = await axios.get("pathtobackend")
    setRides(response.data)
  }  

  useEffect(() => {
    fetchRides()
  }, [])
  
  return (
    <div>
        <h1>Rides</h1>
        <div>
            {rides.map(ride => (
                <div key={ride._id}>
                <h3>{ride.name}</h3>
                <h5>{ride.thrilledLevel}</h5>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Rides