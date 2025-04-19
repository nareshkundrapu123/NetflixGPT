import React from 'react'
import { IMG_CDN } from '../Utils/constants';

const MovieCard1 = ({poster}) => {
  return (
    <div className='w-32 pr-3'>
      
      <img alt="movielist" src={IMG_CDN + poster}/>
    </div>
  )
}

export default MovieCard1;

