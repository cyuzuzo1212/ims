import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./components/Landingpage/authentication"
import categoriesReduce from "./components/Landingpage/categoryslice"

export const store = configureStore({
  reducer: {
    auth: authReducer,  
    categories: categoriesReduce,
    
},
});