import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import './Login.css';
import { useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App';
import { crateAccountWithEmailPassword, googleSignIn, initializingLogInFrameWork, logInAccountWithEmailPassword } from './LoginManager';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Firebase.config';
import googleIcon from '../../images/Icon/google.png';
import fbIcon from '../../images/Icon/fb.png';

//initialize firebase
initializingLogInFrameWork();

const Login = () => {
     const {logIn,Booking}=useContext(userContext);
    const [loginUser,setLogginUser]= logIn;
    const history=useHistory();
    const location=useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [login,setLogin]=useState(1);

let error='';
//for login account
const handleLoginAccountWithEmailPassword=(email,password)=>{
      logInAccountWithEmailPassword(email,password)
        .then((res)=>{
        if(typeof res==='string'){
       error=res;
        }
        else{
            setLogginUser(res);
            error='';
            history.replace(from);
        }
        })
        .catch((error)=>{})
}
//for create account
const handleCreateAccountWithEmailPassword=(email,password)=>{
    console.log(email,password);
     crateAccountWithEmailPassword(email,password)
    .then((res)=>{
        if(typeof res==='string'){
            error=res;
        }
        else{
            setLogginUser(res);
            error='';
            history.replace(from);
        }
    })
    .catch((error)=>{})
}

//for handle form 
   const handleSubmit=(event)=>{
    const fromData=new FormData(event.target);
       event.preventDefault();
       if(login){
           let email,password;
           for(let [key,value] of fromData.entries()){
         if(key==='email') email=value
         if(key==='password') password=value;
        }
      handleLoginAccountWithEmailPassword(email,password);
       }
       if(!login){
           let name='',email,password;
           for(let [key,value] of fromData.entries()){
               if(key==='firstName' || key==='lastName') name=name+value;
               if(key==='email') email=value
           if(key==='password') password=value;
           }
          handleCreateAccountWithEmailPassword(email,password);
       }
      
   }
  

   //for google signIn
    const handleGoogleSignIn=()=>{
     googleSignIn()
     .then((res)=>{
         setLogginUser(res);
       history.replace(from);
     })
    }
    const handleFacebookSignIn=()=>{
    
    }
    return (
        <div>
            <Header></Header>
    <h1>{error}</h1>
           <form onSubmit={handleSubmit} className="form-handle">
               {login && <div>
                   <h1>LogIn</h1>
                   <input type="text" name='email'  placeholder="Enter your Email" required /> <br/>
               <input type="text" name="password"  placeholder="enter your Password" required /> <br/> 
                <button type="submit"  className="loginButton-highlight">LogIn</button>
               <small>Donot have account?</small>
                    <button className="loginButton-highlight" onClick={()=>setLogin(false)}>Create account</button>
                   </div>}

                   {!login && <div>
                       <h1>Create account</h1>
                    <input type="text" required name="firstName" placeholder="Enter your FirstName"/>
                     <br></br>
                    <input  type="text" required name="lastName" placeholder="Enter your LastName"/>
                     <br></br>
                     <input type="text" required name="email"  placeholder="Enter your Email" /> <br/>
               <input type="text" required name="password"  placeholder="enter your Password" /> <br/>
               <button type="submit" className="loginButton-highlight">Create account</button>
               <small>Do u have account?</small>
               <button className="loginButton-highlight" onClick={()=>setLogin(true)}>Login</button>
                 </div>}
          </form> 
          <br/>
          <button className="loginWithGoogleFacebook" onClick={()=>handleGoogleSignIn()}> <img className="img-correctPosition" src={googleIcon} alt=""/> Continue with google</button> <br/>
          <button className="loginWithGoogleFacebook" onClick={()=>handleFacebookSignIn()}><img className="img-correctPosition" src={fbIcon} alt=""/> Continue with facebook</button>

        </div>
    );
};

export default Login;