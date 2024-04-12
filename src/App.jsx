import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './components/Landing';
function App() {


  return (
    <>
     <div className="App">
      <Router>
        
        <Routes>
          <Route path="/" element={<Landing />} />
          {/*<Route path="/diet" element={<Signupd/>}/>
          <Route path="/doc" element={<Logind />} />
          <Route path="/appointment" element={<Signupr />} />
          <Route path="/view" element={<Loginr/>} />
          <Route path="/faq" element={<Ngol/>}/>
          <Route path="/pd" element={<Donated/>}/>
          <Route path="/" element={<Ngod/>}/>
  <Route path="/need" element={<Need/>}/>*/}
          
          
        </Routes>
      </Router>
    </div>
      
    </>
  )
}

export default App
