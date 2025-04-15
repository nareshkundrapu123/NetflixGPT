import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({

    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideos:null,
    },

     
    reducers:{

            addNowplayingMovies:(state,action)=>{

                state.nowPlayingMovies=action.payload;

            },

            addTrailerVideo:(state,action)=>{
                state.trailerVideos=action.payload;
            }


    }


});

export const {addNowplayingMovies, addTrailerVideo}=movieSlice.actions;

export default movieSlice.reducer;