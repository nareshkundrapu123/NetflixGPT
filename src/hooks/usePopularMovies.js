import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addpopularMovies } from "../Utils/movieSlice";
import { useEffect } from "react";



const usePopularMovies=()=>{


    const dispatch=useDispatch();
    const popularmovies=useSelector(store=>store.movies.popularMovie);
    const getPopularMovies = async()=>{
   
       const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
   
       const json=await data.json();
       
       dispatch(addpopularMovies(json.results));
    };
    
    useEffect(()=>{
        !popularmovies &&
        getPopularMovies();
   
    },[])
   
};


export default usePopularMovies;