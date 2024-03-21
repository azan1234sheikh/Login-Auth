import React from "react";
import './Dashboard.css'; // Import CSS file
import styled from 'styled-components';
import Login from "./login";
const Dashboard = ({success}) => {

  console.log(success);
  return (
    <>
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
     
      <button className="buttonnny">login</button>
      
      
    </nav>
    <main className="Hero container">
      <div className="Hero-content">
        
        <h1>YOUR FEET <br/> DESERVE <br/> THE BEST <br/></h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR 
          SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="Brand-Btn">
          <button className="sec-btn buttonnny" >Shop Now</button>
          <button className="sec-btn buttonnny">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="" alt="flipkart-img"/>
            <img src="" alt="amazon-img"/>
          </div>
        </div>
        <div className="Hero-img">
        <img src="/images/shoe_image.png" alt="hero-img"/>
      </div>
      </div>
    </main>
    </>

  );
}



export default Dashboard;
