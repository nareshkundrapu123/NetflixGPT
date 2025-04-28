import { useRef } from "react"
import lang from "../Store/Languageconstant"
import { useDispatch, useSelector } from 'react-redux'
import openai from "../Store/openai";

import { addGptMovieresult } from "../Store/gptSlice";
import { API_OPTIONS } from "../Store/constants";


const Gptsearchbar = () => {

  const SearchText=useRef(null);
  const langkey=useSelector((store)=>store.config.lang);
  const dispatch=useDispatch();

  const searchMovieTMDB= async(movies)=>{
    const data= await fetch("https://api.themoviedb.org/3/search/movie?query="+movies+"&include_adult=false&language=en-US&page=1", API_OPTIONS);

    const json=await data.json();

    return json.results;
  };
  
  const handleGptsearch= async()=>{
      console.log(SearchText.current.value);

      const Gptquery="Act as a Movie Recommendation system and suggest some movies for the query : " 
      + SearchText.current.value + 
      ". only give names of 5 movies, comma seperated like the example result given ahead.Example Result: Gadar, Sholay, Don, Munjya, Golmal";

      const Gptresult=await openai.chat.completions.create({
        messages: [{ role: 'user', content: Gptquery }],
        model: 'gpt-3.5-turbo',
      });
      if(!Gptresult.choices)
      {
        console.log("not complete billing")
      }
      console.log(Gptresult.choices?.[0]?.message?.content);
      const gptMovies=Gptresult.choices?.[0]?.message?.content.split(",");

      const promiseArray=gptMovies.map((movies)=>searchMovieTMDB(movies));

      const tmdbResult=await Promise.all(promiseArray);

      dispatch(addGptMovieresult({movieNames: gptMovies,movieResult:tmdbResult}));
  };
  return (
    <div>
     <h1>Gptsearchbar</h1> 
     
    <div className='pt-[50%] md:pt-[10%] flex justify-center' >
    <form className='w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg' onSubmit={(e)=>e.preventDefault()}>  
      <input
      ref={SearchText} 
      type='text' className='p-4 m-4 col-span-9 rounded-lg' placeholder={lang[langkey].gptsearchplaceholder}/>
      <button className='py-2 px-4 m-4 col-span-3 bg-red-600 text-white rounded-lg' onClick={handleGptsearch}>{lang[langkey].search}</button>
    </form>
    
  </div>
    </div>
  )
}

export default Gptsearchbar
