import { useState } from 'react'
import './App.css'
import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './components/Home'
import Parks from './components/Parks'
import Rides from './components/Rides'

function App() {
  

  return (
    <div>
      <nav>
        <ul>
          <NavLink to='/'>
            <li>Home</li>
          </NavLink>
          <NavLink to="/parks">
            <li>Parks</li>
          </NavLink>
          <NavLink to="/rides">
            <li>Rides</li>
          </NavLink>
      </ul>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path="parks" element={ <Parks /> } />
          <Route path="rides" element={ <Rides /> } />
        </Routes>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
