import { useState, useEffect } from 'react'
import axios from 'axios'

const Parks = () => {

  const [parks, setParks] = useState([])
  
  const fetchParks = async () => {
    let response = await axios.get("pathtopac")
    setPeople(response.data)
  }  

  useEffect(() => {
    fetchPeople()
  }, [])
  
  return (
    <div>
        <h1>Parks</h1>
        <div>
            {parks.map(park => (
                <div key={park._id}>
                <h3>{park.name}</h3>
                <h5>{park.thrilledLevel}</h5>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Parks