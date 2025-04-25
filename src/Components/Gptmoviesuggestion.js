import React from 'react'
import { useSelector } from 'react-redux'
import MovieList1 from './Movielist1';

const Gptmoviesuggestion = () => {

  const {movieResult,movieNames}=useSelector(store=>store.gpt);
  if(!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black bg-opacity-90">
      
      <div>
        {movieNames.map((movieNames,index)=>(
          <MovieList1 key={movieNames} title={movieNames} movies={movieResult[index]}/>
        ))} 
             
      </div>

    </div>
  )
}

export default Gptmoviesuggestion
