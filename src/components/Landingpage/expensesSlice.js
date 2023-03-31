import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState ={
    EstateExpense: false,
    expenses: [],
    expenseTable: [],
    expCategories: [],
    expense:{},
};

export const expensesSlice = createSlice({
    name:"b",
    initialState,
    reducers: {
        expense: (state) =>{
            state.EstateExpense = true;
        },
        storeExpCategories: (state,action) =>{
            state.expCategories = action.payload
        },
        storeExpenses: (state,action) =>{
            state.expenseTable = action.payload
        },
        getExpenses: (state,action) =>{
            state.expenses = action.payload
        }
    },
});

export const createExpenses = (id,data) => async(dispatch) =>{
    const token = localStorage.getItem("token")
    console.log(data)

    axios({
        method:"POST",
        url:`https://inventory-ciul.onrender.com/api/expenses/create/${id}`,
        data:data,
        headers: {
            Authorization: `bearer ${localStorage.getItem("token")}`
        },
    })
    .then((res)=>{
        console.log('helooooooo')
    })
    .catch((err) =>{
        console.log(err)
    });
};


export const getExpenses =() =>async(dispatch)=> {
    console.log("eeeee")
    await axios({
        method:"GET",
        url:"https://inventory-ciul.onrender.com/api/expenses/all",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`  
        },
    })
    .then((data)=>{
        console.log(data,"weee");
        dispatch(storeExpenses(data.data.data));
        
    })
    .catch((err)=>console.log(err));
    };

export const {expense,storeExpCategories,storeExpenses} = expensesSlice.actions;
  export default expensesSlice.reducer;