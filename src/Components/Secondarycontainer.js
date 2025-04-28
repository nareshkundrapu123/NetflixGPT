import React from 'react'
import MovieList1 from './Movielist1'
import { useSelector } from 'react-redux'



const Secondarycontainer = () => {
  
const movies=useSelector(store=>store.movies);
  return (
    movies.nowPlayingMovies &&(
    <div className="bg-black">
     <div className="mt-0 md:-mt-40 md:pl-2 relative z-10">
          <MovieList1 title={"Upcoming Movies"} movies={movies.UpcomingMovies}/>
    <MovieList1 title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    <MovieList1 title={"Popular"} movies={movies.popularMovie}/>
    
    </div>

    </div>
    )
  )
}

export default Secondarycontainer
