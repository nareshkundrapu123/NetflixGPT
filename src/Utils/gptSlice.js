import { createSlice } from "@reduxjs/toolkit";


const gptSlice= createSlice(
    {
        name:'gpt',
        initialState:{
            showGptSearch: false,
            movieNames: null,
            movieResult: null,
        },
        reducers:{
            toggleGptSearchView :(state)=>{

                    state.showGptSearch=!state.showGptSearch;

            },
            addGptMovieresult :(state, action)=>{
                const{movieNames,movieResult}=action.payload;
                state.movieNames=movieNames;
                state.movieResult=movieResult;

            }
        },
    },
);

export const {toggleGptSearchView, addGptMovieresult}=gptSlice.actions;
export default gptSlice.reducer; 