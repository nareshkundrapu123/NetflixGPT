import { useDispatch, useSelector } from "react-redux";
import { addpopularMovies, addUpcomingMovies } from "../Store/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Store/constants";



const useUpcomingMovies=()=>{


    const dispatch=useDispatch();

    const upcomingmovies=useSelector(store=>store.movies.UpcomingMovies);
    const getUpcomingMovies = async()=>{
   
       const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
   
       const json=await data.json();
       
       dispatch(addUpcomingMovies(json.results));
    };
    
    useEffect(()=>{
        !upcomingmovies &&
        getUpcomingMovies();
   
    },[])
   
};


export default useUpcomingMovies;