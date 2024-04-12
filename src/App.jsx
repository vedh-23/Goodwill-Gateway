import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './components/Landing';
import Signupd from './components/SignUpD';
import Logind from './components/Logind';
import Signupr from './components/Signupr';
import Loginr from './components/Loginr';
function App() {


  return (
    <>
     <div className="App">
      <Router>
        
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/SignupD" element={<Signupd/>}/>
          <Route path="/LoginD" element={<Logind />} />
          <Route path="/SignupR" element={<Signupr />} />
          <Route path="/LoginR" element={<Loginr/>} />
          {/* <Route path="/faq" element={<Ngol/>}/>
          <Route path="/pd" element={<Donated/>}/>
          <Route path="/" element={<Ngod/>}/>
  <Route path="/need" element={<Need/>}/>  */}
          
          
        </Routes>
      </Router>
    </div>
      
    </>
  )
}

export default App
