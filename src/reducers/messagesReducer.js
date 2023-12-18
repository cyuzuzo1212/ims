import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  messages: [],
  loading: false,
  error: ''
};

const slice = createSlice ({
    name:"messages",
    initialState,
    reducers: {
        loadingMessages: (state, action) => {
            state.loading = action.payload
          },
          fetchMessagesSuccess: (state,action) => {
            const sorted = action.payload.sort((a, b) => (a.createdAt > b.createdAt) ? -1 : ((a.createdAt < b.createdAt) ? 1 : 0));
            state.messages = sorted;
          },
          fetchMessagesFailure: (state, action) => {
            state.error = action.payload
          },
          removeMessage: (state, action) => {
            const id = action.payload;
            state.messages = state.messages.filter(m => m._id !== id);
          },

    }


});

export const fetchMessages = () => async (dispatch) => {
    dispatch(loadingMessages(true));
  const token = localStorage.getItem("token")
  const response = await axios({
    method:"GET",
    url:`https://inventory-ciul.onrender.com/api/message/all`,
    headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
    },
}).catch((err) =>{
    dispatch(fetchMessagesFailure(err));
  });
  console.log({response})
  if(response.status === 200) {
    dispatch(fetchMessagesSuccess(response.data));
  }
  dispatch(loadingMessages(false));
};

export const {loadingMessages, fetchMessagesFailure, fetchMessagesSuccess, removeMessage} = slice.actions;
export default slice.reducer;