import React from 'react'
import { IMG_CDN } from '../Store/constants';


const MovieCard1 = ({poster}) => {
  return (
    <div className='w-24 md:w-32 pr-3'>
      
      <img alt="movielist" src={IMG_CDN + poster}/>
    </div>
  )
}

export default MovieCard1;

