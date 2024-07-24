import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [udata,setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: ""
});
//console.log(logdata);
const adddata = (e) => {
  const { name, value} = e.target;
  setUdata(()=>{
    return{
      ...udata,
      [name]:value
    }
  })
}

const senddata = async(e)=>{
  e.preventDefault();
  const {fname,email,mobile,password,cpassword} = udata;

  const res=await fetch("register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      fname,email,mobile,password,cpassword
    })
  });
  const data = await res.json();
  //console.log(data);
  if(res.status===422 ||  !data){
    //alert("No data");
    toast.warn("Invalid details",{
      position: "top-center",
    })
  }else{
    //alert("Signed Up succesfully");
    toast.success("Signed Up Successfully",{
      position: "top-center",
    })
    setUdata({...udata, fname: "", email: "", mobile: "", password: "", cpassword: ""});
  }
}
  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./ims.png" alt="" />
          </div>
          <div className="sign_form">
            <form method='POST'>
              <h3>Sign Up</h3>
              <div className="form_data">
                <label htmlFor="fname">Username</label>
                <input type="text"
                onChange={adddata}
                value={udata.fname} 
                name="fname" id="fname" />
              </div>
              <div className="form_data">
                <label htmlFor="">Email</label>
                <input type="text" 
                 onChange={adddata}
                 value={udata.email}  
                 name="email" id="email" />
              </div>
              <div className="form_data">
                <label htmlFor="number">Mobile No</label>
                <input type="text"
                 onChange={adddata}
                 value={udata.mobile}   
                 name="mobile" id="mobile" />

              </div>
              <div className="form_data">
                <label htmlFor="">Password</label>
                <input type="password"
                 onChange={adddata} 
                 value={udata.password} 
                  name="password" placeholder='At least 6 char' id="password" />
              </div>
              <div className="form_data">
                <label htmlFor="cpassword">Confirm Password</label>
                <input type="password"
                onChange={adddata} 
                value={udata.cpassword} 
                name="cpassword"  id="cpassword" />
              </div>
              <button className="signin_btn" onClick={senddata}>Continue</button>
              <div className="signin_info">
                <p>Already have an account?</p>
                <NavLink to="/login">Sign-In</NavLink>
              </div>

            </form>
          </div>
          <ToastContainer />
        </div>

      </section>
    </>
  )
}

export default SignUp