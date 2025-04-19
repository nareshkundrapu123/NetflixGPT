import React from 'react'
import lang from "../Utils/Languageconstant"

const Gptsearchbar = () => {
  return (
    <div>
     <h1>Gptsearchbar</h1> 
     
    <div className='pt-[10%] flex justify-center' >
    <form className='bg-black w-1/2 grid grid-cols-12 rounded-lg'>  
      <input type='text' className='p-4 m-4 col-span-9 rounded-lg' placeholder={lang.hindi.gptsearchplaceholder}/>
      <button className='py-2 px-4 m-4 col-span-3 bg-red-600 text-white rounded-lg'>{lang.hindi.search}</button>
    </form>
    
  </div>
    </div>
  )
}

export default Gptsearchbar
