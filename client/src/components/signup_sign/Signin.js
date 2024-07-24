import React, { useState } from 'react'
import './signup.css';
import {NavLink} from "react-router-dom";

const Signin = () => {

  const [logdata,setData]= useState({
    email: "",
    password: ""
  });
  //console.log(logdata);

  const adddata= (e)=>{
    const{name,value}=e.target;
    setData(()=>{
      return{
        ...logdata,
        [name]:value
              

      }
    }
    )

  }
  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./ims.png" alt= ""/>
          </div>
          <div className="sign_form">
            <form>
             <h3>Sign-In</h3>
             <div className="form_data">
              <label htmlFor="">Email</label>
              <input type="text"
              onChange={adddata}
              value={logdata.email}
               name="email" id="email"/>
             </div>
             <div className="form_data">
              <label htmlFor="">Password</label>
              <input type="password"
              onChange={adddata}
              value={logdata.password}
               name="password" placeholder='At least 6 char' id="password"/>
             </div>
             <button className="signin_btn">Continue</button>

            </form>
          </div>
          <div className="create_accountinfo">
                    <p>New to CSE Department?</p>
                  <NavLink to="/register">  <button>Create your Account</button></NavLink>
                </div>
           
        </div>

      </section>
    </>
  )
}

export default Signin