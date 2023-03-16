import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { token } from "./authentication";


const initialState ={
    EstateCategory: false,
    categories: [],
    category:{},
};

export const categSlice = createSlice({
    name:"b",
    initialState,
    reducers: {
        category: (state) =>{
            state.EstateCategory = true;
        },
        storeCategories: (state,action) =>{
            state.categories = action.payload
        },
        getCateg: (state,action) =>{
            state.categories = action.payload
        }
    },
});
export const createCateg = (data) => async(dispatch) =>{
    const token = localStorage.getItem("token")
    console.log(data)
    axios({
        method:"POST",
        url:"https://inventory-ciul.onrender.com/api/category/create",
        data:data,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
    })
    .then((res)=>{
        console.log('hyyyyyyyyyy')
    })
    .catch((err) =>{
        console.log(err)
    });
};
export const getCategory =() =>(dispatch)=> {
axios({
    method:"GET",
    url:"https://inventory-ciul.onrender.com/api/category/all",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`  
    }
})
.then((Response)=>{
    console.log(Response.categories)
    dispatch(storeCategories(Response.data))
})
.then((err)=>{
    console.log(err)
})
}


export const getCateg =(id) =>(dispatch)=> {
    axios({
        method:"GET",
        url:`https://inventory-ciul.onrender.com/api/category/${id}`,
    })
    .then((Response)=>{
        console.log(Response)
        dispatch(getCateg(Response.data))
    })
    .then((err)=>{
        console.log(err)
    })
    }


    export const Delete =(id,data) =>(dispatch)=> {
    const token = (localStorage.getItem("token"))
    console.log(data)
    axios({
        method:"DELETE",
        url:`https://inventory-ciul.onrender.com/api/category/delete/${id}`,
        data: data,
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then((response)=>{
        console.log(response)
        
    })
    .catch((err)=>{
        console.log(err)
    })
    }
    
export const EditCategories  = (id, token, data) => async(dispatch) =>{
    console.log(id, "ID")
    axios({
      method:"PATCH",
      url: `https://inventory-ciul.onrender.com/api/category/update/${id}`,
      data: data,
      headers:{
        Authorization: `Bearer ${token}`
      }
  }).then((res)=>{
    console.log(res,"from editor");
  }).catch((err)=>{console.log(err);})
  }
  
  export const { category, storeCategories } = categSlice.actions;
  export default categSlice.reducer;