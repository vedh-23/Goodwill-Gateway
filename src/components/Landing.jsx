import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
export default function Landing() {
  return (
    <>
    <user_type>
    <div class="container">

<div class="card">
  <div class="face face1">
    <div class="content">
      <span class="stars"></span>
      <p class="java">DONOR</p>
      <p class="java">Donate what you have to the needy ones.</p>
    </div>
  </div>
  <div class="face face2">
    <p>DONOR</p>
  </div>
</div>

<div class="card">
  <div class="face face1">
    <div class="content">
      <span class="stars"></span>
      <p class="python">RECEIVER</p>
      <p class="python">Ask the donors for the needs of your organization.</p>
    </div>
  </div>
  <div class="face face2">
    <p>RECEIVER</p>
  </div>
</div>
</div>

    </user_type>
    
    </>
  )
}
    

