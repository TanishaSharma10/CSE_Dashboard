import React from 'react'
import "./navbaar.css";
import {NavLink} from "react-router-dom";


import Avatar from '@mui/material/Avatar';


const Navbaar = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
          <NavLink to="/"><img src="./ims.png " alt="" /></NavLink> 
          </div>
          <div className="nav_cse" react-style="text-align:center">
            <p>CSE DASHBOARD</p>
          </div>


        </div>
        <div className="right">
          <div className="time_btn">
          <a href="/final2.html">Time-Table</a>
          </div>
          <div className="nav_btn">
          <NavLink to="/login">SignIn</NavLink>
            
            


          </div>
          <Avatar className='avtar'/>


        </div>
      </nav>
    </header>
  )
}

export default Navbaar