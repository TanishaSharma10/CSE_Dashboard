import React from 'react'
import './footr.css';

const Footer = () =>{
    const year = new Date().getFullYear();
    console.log(year);
  return (
    <footer>
        <div className="footer_container">
            <div className="footr_details_one">
                <h3>Get to know Us</h3>
                <p>About Us</p>
                <p>PEO's and PSO's</p>
                <p>Mission Vision</p>

            </div>
            <div className="footr_details_one ">
                <h3>Connect With Us</h3>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>LinkedIN</p>

            </div>
            <div className="footr_details_one forres">
                <h3>CSE's ERP</h3>
                <p>About Us</p>
                <p>PEO's and PSO's</p>
                <p>Mission Vision</p>

            </div>
            <div className="footr_details_one forres">
                <h3>Our College's Website</h3>
                <p>About Us</p>
                <p>PEO's and PSO's</p>
                <p>Mission Vision</p>

            </div>
           
            
        </div>
        <div className="lastdetails">
            <img src="./ims.png" alt=""/>
            <p>Conditions of Use &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Copyright@CSE  &nbsp; &nbsp;&nbsp; 2002-{year}</p>
        </div>
    </footer>
  )
}

export default Footer