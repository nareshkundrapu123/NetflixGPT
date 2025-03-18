import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm]=useState();

  const toggleSignInform=()=>{

    setIsSignInForm(!isSignInForm);

  };
  return (
    <div>

        <Header/>

    <div className="absolute">
       <img src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_large.jpg"
        alt="logo"/>
      
    </div>
          <form className="w-3/12 absolute p-12 bg-opacity-80 rounded-lg bg-black my-36 mx-auto left-0 right-0 text-white">
              <h1 className="font-bold py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
              {!isSignInForm &&
              <input type="text" placeholder="Full Name" className="p-2 m-2 w-full rounded-lg  bg-gray-600" />}
              
              <input type="text" placeholder="Email or mobile number" className="p-2 m-2 w-full rounded-lg bg-gray-600"/>
              <input type="password" placeholder="password" className="p-2 m-2 w-full rounded-lg  bg-gray-600" />
              <button className="bg-red-700 p-2 m-2 my-6 rounded-lg w-full">{isSignInForm ? "Sign In" :"Sign Up"}</button>

              <p className="py-6 cursor-pointer" onClick={toggleSignInform} >{isSignInForm ?"New to Netflix?Sign Up Now" : "Already Register? Sign In Now "}</p>
          </form>




    </div>
  )
}

export default Login
