import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  EstateStock: false,
  stocks: [],
  stocksTable: [],
  items: [],
  stock: {},
 
};

export const stockSlice = createSlice({
  
  name: "b",
  initialState,
  reducers: {
    stock: (state) => {
      state.EstateStock = true;
    },
    StoreItems: (state, action) => {
      state.items = action.payload;
    },
    storeStocks: (state, action) => {
      state.stocksTable = action.payload;
    },
    getStocks: (state, action) => {
      state.stocks = action.payload;
    },
  },
});

export const createStocks = (data) => async (dispatch) => {
  
  console.log(data.measurement);
  const token = localStorage.getItem("token");
  let stock = {
    measurement: data.measurement,
    quantity: {
      box: {
        numberOfBoxes: data.numberOfBoxes,
        subItems: {
          pieces: data.pieces,
        },
      },
    },
    unitPrice: {
      box: {
        price: data.price,
        subItems: {
          price: data.unitPrice,
        },
      },
    },
  };
  console.log(stock, "Stock sent");
  axios({
    method: "PUT",
    url: `https://inventory-ciul.onrender.com/api/items/addstock/${data.item}`,
    data: stock,
    headers: {
      Authorization: `bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => {
      console.log("helooooooo");
    })
    .catch((err) => {
    
      console.log(err);
      
    });
    
};

export const getStocks = () => (dispatch) => {
  console.log("qwertyui");
  axios({
    method: "GET",
    url: "https://inventory-ciul.onrender.com/api/items",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch(StoreItems(data));
    })

    .catch((err) => console.log(err));
};

export const getAllStocks = () => (dispatch) => {
  console.log("wwwwwwww");
  axios({
    method: "GET",
    url: "https://inventory-ciul.onrender.com/api/stock/all",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((data) => {
      console.log(data);
      dispatch(storeStocks(data.data));
      // navigate("/dashboard/form-elements/stock");
    })
    .catch((err) => console.log(err));
};

export const Stock = (id) => (dispatch) => {
  axios({
    method: "GET",
    url: `https://inventory-ciul.onrender.com/api/stock/${id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((Response) => {
      console.log(Response);
      dispatch(Stock(Response.data));
    })
    .then((err) => {
      console.log(err);
    });
};

export const { stock, storeStocks, StoreItems } = stockSlice.actions;
export default stockSlice.reducer;
