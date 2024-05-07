import { useState } from 'react'
import './App.css'
import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './components/Home'
import Parks from './components/Parks'

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
      </ul>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path="parks" element={ <Parks /> } />
        </Routes>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
