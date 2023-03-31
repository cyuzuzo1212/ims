import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState ={
    EstateSale: false,
    sales: [],
    salesTable: [],
    stocks: [],
    sale:{},
};

export const salesSlice = createSlice({
    name:"b",
    initialState,
    reducers: {
        sale: (state) =>{
            state.EstateSale = true;
        },

        storeStocks: (state, action) => {
            state.stocksTable = action.payload;
          },
        storeSales: (state,action) =>{
            state.salesTable = action.payload
        },
        getSales: (state,action) =>{
            state.sales = action.payload
        }
    },
});





export const createSales = (data) => async(dispatch) =>{
    const token = localStorage.getItem("token")
    console.log(data)
    const sale = {
        items: [
            {
                itemId:data.itemId,
                quantity: {
                    box: {
                        numberOfBoxes: parseFloat(data.numberOfBoxes),
                        subItems: {
                            pieces: data.pieces,
                        }
                    }
                },
                salesPrice: {
                    box: {
                        price: data.price,
                        subItems: {
                            price: data.salesPrice,
                        }
                    }
                }
                
            }
        ],
        customerName:data.customerName,
    }
    console.log(data,"kkkkkkkk")
    axios({
        method:"POST",
        url:"https://inventory-ciul.onrender.com/api/sales/create",
        data:sale,
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


export const getStockItem = () => (dispatch) => {
    console.log("on sales");
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
      })
      .catch((err) => console.log(err));
  };


export const getSale =() =>async(dispatch)=> {
    console.log("eeeee")
    await axios({
        method:"GET",
        url:"https://inventory-ciul.onrender.com/api/sales/all",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`  
        },
    })
    .then((data)=>{
        console.log(data);
        dispatch(storeSales(data.data.data));
        
    })
    .catch((err)=>console.log(err));
    };

    export const {sale,storeSales,storeStocks} =salesSlice.actions;
    export default salesSlice.reducer;