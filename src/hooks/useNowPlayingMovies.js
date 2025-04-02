import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addNowplayingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";



const useNowPlayingMovies=()=>{


    const dispatch=useDispatch();
    const getNowPlayingMovies = async()=>{
   
       const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
   
       const json=await data.json();
       console.log(json.results);
       dispatch(addNowplayingMovies(json.results));
    };
    
    useEffect(()=>{
   
     getNowPlayingMovies();
   
    },[])
   
};


export default useNowPlayingMovies;