import { useDispatch, useSelector } from "react-redux";
import { addpopularMovies } from "../Store/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Store/constants";



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