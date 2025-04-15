import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../Utils/movieSlice";

const useMovieTrailer=(movieId)=>{

    const dispatch = useDispatch();

  // fetch trailer video

  const getMovieVideos=async ()=>{

    const data=await fetch("https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US", API_OPTIONS);
    const json=await data.json();
    console.log(json);

    const Filterdata=json.results.filter((videos)=>videos.type=="Trailer");
    
    const trailer=Filterdata.length ? Filterdata[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));

  };

  useEffect(()=>{

    getMovieVideos();

  },[]);

}

export default useMovieTrailer;