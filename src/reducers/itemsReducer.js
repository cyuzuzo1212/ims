import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  items: [],
  loading: false,
  error: '',
  redirect: true
};

const slice = createSlice({
  name:"items",
  initialState,
  reducers: {
    loadingItems: (state, action) => {
      state.loading = action.payload
    },
    fetchItemsSuccess: (state,action) => {
      state.items = action.payload
    },
    fetchItemsFailure: (state, action) => {
      state.error = action.payload
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item._id != id);
    },
    updateItem: (state, action) => {
      state.items = state.items.map(item => {
        if(item?._id === action.payload.id) {
          item.name = action.payload.name;
        }
        return item;
      })
      state.redirect = true
    },
    setRedirect: (state, action) => {
      state.redirect = action.payload
    }
  },
});

export const fetchItems = () => async (dispatch) =>{
  dispatch(loadingItems(true));
  const token = localStorage.getItem("token")
  const response = await axios({
      method:"GET",
      url:`https://inventory-ciul.onrender.com/api/items`,
      headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json'
      },
  }).catch((err) =>{
      dispatch(fetchItemsFailure(err));
  });

  if(response?.status === 200) {
    dispatch(fetchItemsSuccess(response.data.items));
  }
  dispatch(loadingItems(false));
};

export const deleteItem = (id) => async (dispatch) => {
  dispatch(loadingItems(true));
  const token = localStorage.getItem('token');
  const response = await axios({
    method: 'DELETE',
    url: `https://inventory-ciul.onrender.com/api/items/delete/${id}`,
    headers: {
      Authorization: 'Bearer ' + token
    }
  }).catch(error => console.log(error))

  if(response.status === 200) {
    dispatch(removeItem(id));
  }
  dispatch(loadingItems(false));
}

export const updateItemRequest = ({id, name}) => async (dispatch) => {
  dispatch(loadingItems(true));
  const token = localStorage.getItem('token');
  const response = await axios({
    method: 'PUT',
    url: `https://inventory-ciul.onrender.com/api/items/update/${id}`,
    headers: {
      Authorization: 'Bearer ' + token
    },
    data: {name}
  }).catch(error => console.log(error))

  if(response.status === 200) {
    dispatch(updateItem({id, name}));
    dispatch(setRedirect(true));
  }
  dispatch(loadingItems(false));
}

export const {loadingItems, fetchItemsFailure, fetchItemsSuccess, removeItem, updateItem, setRedirect} = slice.actions;
export default slice.reducer;
