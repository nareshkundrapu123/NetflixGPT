import React from 'react'
import Gptsearchbar from './Gptsearchbar'
import Gptmoviesuggestion from './Gptmoviesuggestion'
import { LOGO_URL } from '../Store/constants'




const GptSearch = () => {
  return (
   <div>

    <div className='absolute -z-10'>
      <img alt='LOGO' src={LOGO_URL}/>
    </div>
    <Gptsearchbar/>
    <Gptmoviesuggestion/>
    
   </div>
  )
}

export default GptSearch
