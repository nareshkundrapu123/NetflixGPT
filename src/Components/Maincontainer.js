import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackGround from './VideoBackGround';
import VideoTitle from './VideoTitle';
//rafce React arrow function component with export
const Maincontainer = () => {
  
  const movies= useSelector((store)=>store.movies?.nowPlayingMovies);

    if(movies==null) return;
  const mainMovies = movies[2];
  console.log(mainMovies);

  const{original_title,overview,id}=mainMovies;
   

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieId={id}/>
  
    </div>
  )
}

export default Maincontainer
