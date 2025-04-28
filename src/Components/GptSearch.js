import React from 'react'
import Gptsearchbar from './Gptsearchbar'
import Gptmoviesuggestion from './Gptmoviesuggestion'
import { LOGO_URL } from '../Store/constants'




const GptSearch = () => {
  return (
 <>
 <div className='fixed -z-10'>
    <img 
     className='h-screen object-cover md:h-auto'
    src={LOGO_URL}
    alt='LOGO'/>
  </div>
   <div className=''>

  
    <Gptsearchbar/>
    <Gptmoviesuggestion/>
      </div>
      </>
  )
}

export default GptSearch
