import { createSlice } from "@reduxjs/toolkit";



const movieSlice = createSlice({

    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovie:null,
        UpcomingMovies:null,
        trailerVideos:null,
    },

     
    reducers:{

            addNowplayingMovies:(state,action)=>{

                state.nowPlayingMovies=action.payload;

            },
            addpopularMovies:(state,action)=>{

                state.popularMovie=action.payload;

            },
            addUpcomingMovies:(state,action)=>{

                state.UpcomingMovies=action.payload;

            },


            addTrailerVideo:(state,action)=>{
                state.trailerVideos=action.payload;
            }


    }


});

export const {addNowplayingMovies, addTrailerVideo,addpopularMovies,addUpcomingMovies}=movieSlice.actions;

export default movieSlice.reducer;