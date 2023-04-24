import React, { useState } from 'react'
import {useFormik} from "formik";
import {GoogleAPI,GoogleLogin,GoogleLogout} from 'react-google-oauth'
import FacebookLogin from 'react-facebook-login';
import './Login.css'

const initialValues = {
    mobNumber: "",  
  };
  var accessToken = "";

const Login = () => {
    const [captcha,setcaptcha] = useState(false);
  const [user, setUser] = useState({});
  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues: initialValues,
    onSubmit: (values,action) => {
     
      let mobNumber = document.getElementById("mobNumber").value;

    
      var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
          var letters = /^[a-zA-Z][a-zA-Z ]*$/;
          var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      var mobnum = /(0|91)?[6-9][0-9]{9}/;
      if(mobNumber==="")
      {
        alert("please fill all the fields");
      }
else{
    alert("value passed")
    // const signup = {
    //     mobNumber: mobNumber,
        
    //     password: password,
        

    //   }
    //   axios.post("https://refer-hub.onrender.com/api/auth/login", signup)
    //   .then((res) => {
    //     if(res.status === 200)
    //     {
    //         console.log(res);
    //         accessToken = res.data.token;
    //       localStorage.setItem("access token" , accessToken )
    //         alert("Logged in done")
    //     }
    //     else
    //     alert("failed")
    //   }).catch((err) => {
    //     console.log(err)
    //   })

  action.resetForm();
}
    },
  });
  return (
    <div>
        <div className='body-login'>
            <div className="header-login">
                <div style={{marginLeft:"1rem"}}><p>&#10006;</p></div>
            <div><p style={{fontWeight:"600",fontSize:"1.1rem",marginLeft:"12rem"}}>Log in or sign up</p></div>
            </div>
            <hr style={{marginTop:"-0.5rem"}} />
            <div className="main-login">
                <p style={{fontSize:"1.5rem",fontWeight:"500"}}>Welcome to PartySharty</p>

                <form className='form-create' onSubmit={handleSubmit}>
                    <div className="country-isd" style={{display:"flex"}}>
                        <div><p>India(+91)</p></div>
                        <div><img className='upward-arrow' src="/images/free-arrow-down-icon-3101-thumb-removebg-preview.png" height="19rem" width="19rem" alt=""style={{marginLeft:"23.5rem",marginTop:"0.7rem"}} onClick={() => {
                
                
            }} /></div>

                    </div>
        <div className='mobNumber-heading'>
            <input type="number" name='mobNumber' id='mobNumber' placeholder='Phone Number' autoComplete='off'
        value={values.mobNumber}
        onChange={handleChange}
        onBlur={handleBlur}/><br />
        </div>
       
        
        
        <div style={{display:"flex"}}>
          <div>
          <p style={{fontSize:"0.8rem"}}>We’ll call or text you to confirm your number. Standard message and data rates apply. <br /><span style={{textDecoration:"underline",fontWeight:"bold"}}> Privacy Policy </span></p>
        <button type='submit'  className="continue-btn">Continue</button>
        </div>
        </div>
        
      </form>

                
            </div>
            <div className="other-login-opt">
                <div className="lines" style={{display:"flex",marginTop:"1rem"}}>
                    <div>
                    <hr style={{width:"14rem",marginRight:"1rem"}}/>
                    </div>
                    <div>
                    <p style={{marginTop:"-0.25rem"}}>or</p>
                    </div>
                    <div>
                    <hr style={{width:"14rem",marginLeft:"1rem"}}/>
                    </div>
                </div>
                <div style={{marginLeft:"7.5rem"}} className="google-login">
                <GoogleAPI  clientId="YOUR CLIENT ID"
             >
            <div>
              	<div style={{width:"10rem"}}><GoogleLogin /></div>
              	
    		</div>
        </GoogleAPI>

        </div>
            </div>
        </div>
    </div>
  )
}

export default Login

