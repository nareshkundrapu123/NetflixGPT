import React from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from '../Store/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {addUser, removeUser} from '../Store/userSlice';
import { toggleGptSearchView } from '../Store/gptSlice';
import { changelanguage } from '../Store/Configslice';
import { LOGO, SUPPORTED_LANG } from '../Store/constants';
const Header = () => {

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const user=useSelector(store=>store.user)
    const showgptsearch=useSelector(store=>store.gpt.showGptSearch);
    
  const handleSignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    
    }).catch((error) => {
      // An error happened.
    });
  };

   useEffect(()=>{
  
      const unsubscribe=  onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid,email,displayName,photoURL} = user;
            // ...
              dispatch(addUser({
                uid:uid,
                email:email,
                displayName:displayName,
                photoURL:photoURL
              }));
              navigate("/browse");
          } else {
            // User is signed out
            // ...
            dispatch(removeUser());
            navigate("/");
          }
        });
        
        //unsubscribe when components unmounts
        return ()=>unsubscribe();
  
      },[]);
  
      const handleLanguagechange=( e)=>{
            dispatch(changelanguage(e.target.value));
      }
      const handleGptsearch=()=>{
        
        dispatch(toggleGptSearchView());
      }

      
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      
      <img className='w-44'
        src={LOGO}
        
        alt="logo"
      />

    { user &&(

        <div className="flex p-2">
             {showgptsearch &&   <select className='p-2 m-2 bg-black text-white rounded-lg' onChange={handleLanguagechange}>

                {SUPPORTED_LANG.map((lang)=>(
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                    </option>
                ))}

          </select>}
          <button className='text-white mx-4 my-2 px-3 py-1  bg-purple-600 rounded-lg'
          onClick={handleGptsearch}
          >{showgptsearch? "Homepage" : "Gpt Search"}</button>
          <img className="w-10 h-10 "
          alt="user-icon" src={user.photoURL}/>
            <button className="font-bold text-red-500" onClick={handleSignout}>(Sign out)</button>
        </div>)
}
    </div>
    
  )
}

export default Header
