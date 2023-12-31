import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { redirect } from "react-router-dom";


const initialState ={
    EstateExpCategory: false,
    expCategories: [],
    expCategory:{},
    changeSaved: false,
};

export const ExpCategSlice = createSlice({
    name:"b",
    initialState,
    reducers: {
        storeExpCategory: (state, action) =>{
            state.expCategory = action.payload
        },
        storeExpCategories: (state,action) =>{
            state.expCategories = action.payload
        },
        getCateg: (state,action) =>{
            state.expCategories = action.payload
        },
        removeExpenseCategory: (state, action) => {
            state.expCategories = state.expCategories.filter(e => e._id !== action.payload)
        },
        redirect: (state,action) => {
            state.changeSaved = action.payload;
        }
    },
});

export const createExpCateg = (data) => async(dispatch) =>{
    const token = localStorage.getItem("token")
    console.log(data)
    await axios({
        method:"POST",
        url:"https://inventory-ciul.onrender.com/api/expensesCat/create",
        data:data,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
    })
    .then((res)=>{
        dispatch(redirect(true))
        console.log('iiiiiiiiiiiii')
    })
    .catch((err) =>{
        console.log(err)
    });
};


export const getExpCategory =() =>(dispatch)=> {
    axios({
        method:"GET",
        url:"https://inventory-ciul.onrender.com/api/expensesCat/all",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`  
        }
    })
    .then((Response)=>{
        console.log(Response.data,"555555555555")
        dispatch(storeExpCategories(Response.data.categories))
        
    })
    .then((err)=>{
        console.log(err)
    })
    };

    export const getExpCateg =(id) =>(dispatch)=> {

        axios({
            method:"GET",
            url:`https://inventory-ciul.onrender.com/api/expensesCat/${id}`,
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
        })
        .then((Response)=>{
            console.log(Response)
            dispatch(storeExpCategory(Response.data))
        })
        .then((err)=>{
            console.log(err)
        })
        };


        export const editExpCategory  = (id, data) => async(dispatch) =>{
            console.log(data, "data")
            console.log(id, "ID")
            axios({
              method:"PATCH",
              url: `https://inventory-ciul.onrender.com/api/expensesCat/update/${id}`,
              data: data,
              headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
          }).then((res)=>{
            dispatch(redirect(true))
          }).catch((err)=>{console.log(err);})
        };

        export const deleteCategory = (id) => async (dispatch) => {
            const response = await axios({
                method:"DELETE",
                url:`https://inventory-ciul.onrender.com/api/expensesCat/${id}`,
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }).catch(err => console.log(err))

            if(response.status === 200) {
                dispatch(removeExpenseCategory(id))
            }
        }

        export const {expCategory, storeExpCategories,storeExpCategory, removeExpenseCategory, redirect} = ExpCategSlice.actions;
  export default ExpCategSlice.reducer;