import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'


function App() {

  return (
    <div className="App">
                <header>
                    <Nav />
                </header>
                <main>
                    <Routes>
                        <Route path='/' element={ <Home />} />
                    </Routes>
                </main>
                {/* <footer>
                    <Footer />
                </footer> */}
            </div>
  )
}

export default App
