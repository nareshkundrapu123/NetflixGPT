import React from 'react'
import MovieCard1 from './Moviecard1';

const MovieList1 = ({title,movies}) => {

  return (
    <div className='px-6'>
             <h1 className='text-lg md:text-2xl py-2 text-white'>{title}</h1>
        <div className="flex overflow-x-scroll">      
    
  <div className='flex'>
      
  {movies?.map((movie)=><MovieCard1 key={movie.id} poster={movie.poster_path}/>)}      
  
      </div>

  </div>

    </div>
  )
}

export default MovieList1;
