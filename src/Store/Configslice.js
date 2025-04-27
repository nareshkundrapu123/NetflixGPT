import { createSlice } from "@reduxjs/toolkit";
import lang from "./Languageconstant";


const Configslice=createSlice({

     name:"config",
    initialState:{
        lang:"en",
    },
    reducers:{
        changelanguage:(state,action)=>{
            state.lang=action.payload;
        },
    },     
});

export  const{changelanguage}=Configslice.actions;

export default Configslice.reducer;