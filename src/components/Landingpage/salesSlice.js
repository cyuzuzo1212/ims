import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState ={
    EstateSale: false,
    sales: [],
    salesTable: [],
    stocks: [],
    sale:{},
    dailySales: [],
    weeklySales: [],
    monthlySales:[]
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
        },
        storeDailySales: (state, action) => {
            state.dailySales = action.payload
        },
        storeWeeklySales: (state,action) => {
            state.weeklySales = action.payload
        },
        storeMonthlySales: (state,action) => {
            state.monthlySales = action.payload
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

export const getDailySales = () => async (dispatch) => {
   
    await axios({
        method:"GET",
        url: 'https://inventory-ciul.onrender.com/api/sales/daily',
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`  
        }
        })
      .then(response => {
        
        const items = response.data.sales.reduce((totalItems, sale) => {
            
          return totalItems.concat(sale.items);
         
        }, [])
        dispatch(storeDailySales(items));
        
      })
      .catch(error => {
        console.error(error);
      });
}

export const getWeeklySales = () => async (dispatch) => {
    await axios({
        method:"GET",
        url: 'https://inventory-ciul.onrender.com/api/sales/weekly',
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`  
        }
        })
      .then(response => {
        const items = response.data.sales.reduce((totalItems, sale) => {
          return totalItems.concat(sale.items);
        }, [])
        dispatch(storeWeeklySales(items));
      })
      .catch(error => {
        console.error(error);
      });
}

export const getMonthlySales = () => async (dispatch) => {
    await axios({
        method:"GET",
        url: 'https://inventory-ciul.onrender.com/api/sales/monthly',
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`  
        }
        })
      .then(response => {
        const items = response.data.sales.reduce((totalItems, sale) => {
          return totalItems.concat(sale.items);
        }, [])
        dispatch(storeMonthlySales(items));
      })
      .catch(error => {
        console.error(error);
      });
}

    export const {sale,storeSales,storeStocks, storeDailySales,storeWeeklySales,storeMonthlySales} =salesSlice.actions;
    export default salesSlice.reducer;