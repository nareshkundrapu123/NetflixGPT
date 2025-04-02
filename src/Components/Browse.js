import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';

const Browse = () => {


  //Fetch data from TMDB API and update store
  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <Maincontainer/>
      <Secondarycontainer/>
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
