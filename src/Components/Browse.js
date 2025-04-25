import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
  //Fetch data from TMDB API and update store
  useUpcomingMovies();
  useNowPlayingMovies();
  usePopularMovies();


  return (
    <div>
      <Header/>
      {
        showGptSearch ? (
          <GptSearch/>
        ):(
          <>
    
    <Maincontainer/>
      <Secondarycontainer/> 
          </>
        )
      }
  
      {/* 
        MainContainer
          -VideoBackground
          -VideoTitle
        SecondaryContainer
          -MovieList *n
          -Cards*n


      
      
      */}
    </div>
  )
}

export default Browse
