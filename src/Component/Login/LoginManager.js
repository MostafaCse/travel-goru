import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Firebase.config';

//function for initializing login framework.
export const initializingLogInFrameWork=()=>{
    if(firebase.app.length){
        firebase.initializeApp(firebaseConfig);
    }
}
//create email
export const crateAccountWithEmailPassword=(email,password)=>{
    console.log(email,password);
  return  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((res)=>{
       const newUser={
           name:'',
           email:email
       };
       return newUser;
  })
  .catch((error)=> {
        var errorMessage = error.message;
    return errorMessage;
      });
}
//signIn email
export const logInAccountWithEmailPassword=(email,password)=>{
 return   firebase.auth().signInWithEmailAndPassword(email, password)
    .then((res)=>{
        const newUser={
            name:'',
            email:email
        }
        return newUser;
    })
    .catch((error) =>{
      const newUser={
        name:'',
        email:''
    }
return newUser;
      });
}


//google signIn handleIn
export const googleSignIn=()=>{
    var provider = new firebase.auth.GoogleAuthProvider();
 return firebase.auth().signInWithPopup(provider).then((result)=> {
        var user = result.user;
      const newUser={
          name: user.displayName,
          email: user.email,
      };
      return newUser;
      }).catch(function(error) {
        var errorMessage = error.message;
    console.log(errorMessage);
      });
}