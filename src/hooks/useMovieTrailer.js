import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTrailerVideo } from "../Store/movieSlice";
import { API_OPTIONS } from "../Store/constants";

const useMovieTrailer=(movieId)=>{

    const dispatch = useDispatch();

    const trailervideo=useSelector(store=>store.movies.trailerVideos);
  // fetch trailer video

  const getMovieVideos=async ()=>{

    const data=await fetch("https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US", API_OPTIONS);
    const json=await data.json();
    

    const Filterdata=json.results.filter((videos)=>videos.type=="Trailer");
    
    const trailer=Filterdata.length ? Filterdata[0] : json.results[0];
    
    dispatch(addTrailerVideo(trailer));

  };

  useEffect(()=>{

    !trailervideo &&
    getMovieVideos();

  },[]);

}

export default useMovieTrailer;