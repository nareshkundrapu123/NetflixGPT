import React, { use, useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../Utils/Validate';
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../Utils/firebase";
import { LOGO_URL, USER_AVATAR } from '../Utils/constants';


const Login = () => {

  

  const [isSignInForm, setIsSignInForm]=useState(true);

  const [errorMessage,seterrorMessage]=useState(null);

  const email =useRef(null);
  const password= useRef(null);

  const handleButtonclick=()=>{
   
    //checkValidData(email,password);
    //console.log(email.current.value);
    //console.log(password.current.value);
  const message =   checkValidData(email.current.value,password.current.value);
    seterrorMessage(message);

    if(message) return;

//    sign in /sign up logic

    if(!isSignInForm)
    {
      //sign up logic

      createUserWithEmailAndPassword(auth, 
        email.current.value,
        password.current.value)
      .then((userCredential) => {
      // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: email.current.value, 
          photoURL: USER_AVATAR
        }).then(() => {
          // Profile updated!
          // ...
          

        }).catch((error) => {
          // An error occurred
          // ...
        });
        console.log(user);
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        seterrorMessage(errorCode +" naresh "+errorMessage);
      });

    }
    else{
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+" "+errorMessage);
  });

     }
 }


  const toggleSignInform=()=>{

    setIsSignInForm(!isSignInForm);

  };
  return (
    <div>

        <Header/>

    <div className="absolute w-full h-screen">
       <img className="w-full h-full object-cover" src={LOGO_URL}
        alt="logo"/>
      
    </div>
          <form  onSubmit={(e)=>e.preventDefault()} className=" md:w-3/12 absolute p-12 bg-opacity-80 rounded-lg bg-black my-36 mx-auto left-0 right-0 text-white">
              <h1 className="font-bold py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
              {!isSignInForm &&
              <input type="text" placeholder="Full Name" className="p-2 m-2 w-full rounded-lg  bg-gray-600" />}
              
              <input ref={email}
              type="text" placeholder="Email or mobile number" className="p-2 m-2 w-full rounded-lg bg-gray-600"/>
              <input ref={password}
               type="password" placeholder="password" className="p-2 m-2 w-full rounded-lg  bg-gray-600" />

            <p className="text-red-600 font-bold">{errorMessage}</p>

              <button type="submit" className="bg-red-700 p-2 m-2 my-6 rounded-lg w-full" onClick={handleButtonclick}>{isSignInForm ? "Sign In" :"Sign Up"}</button>

              <p className="py-6 cursor-pointer" onClick={toggleSignInform} >{isSignInForm ?"New to Netflix?Sign Up Now" : "Already Register? Sign In Now "}</p>
          </form>




    </div>
  )
}

export default Login;
