import React, { Component, useEffect, useState } from "react";
import "./login.css";
import axios from "axios";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"
import { Auth } from "../src/firebaseConfig";

export const  Login =()=> {
    
//   componentDidMount = () => {
//     axios.get("/login").then(response=> {
//     //   console.log(`login...${response.user.displayName}`);
//     console.log(response);

//     });
//   };
const [user, setUser] = useState('');

 const handleLogin = ()=>{
   
    axios.get("/auth/google") .then(res => {
        if (res.status === 200){
          alert('Login Success...')
        //   res.redirect("/protected")
        }
        else
          {Promise.reject()}
      })
      .catch(err => alert('Something went wrong'))
  }

  const provider = new GoogleAuthProvider();
  const signIn = () => {
    signInWithPopup(Auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        window.location.replace('http://localhost:3001/')
      })

      .catch(alert);
  };
      
  // useEffect(() => {
  //   handleLogin()
  // })
  
    
    return (
      <div class="container">
        <div class="wrapper">
          <h1>Login</h1>
          <br></br>
          <br></br>
          <button onClick={signIn} >LOGIN WITH GOOGLE</button>
        </div>
      </div>
    );
  }

