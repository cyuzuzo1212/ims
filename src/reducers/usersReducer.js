import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  users: [],
  loading: false,
  error: ''
};

const slice = createSlice({
  name:"users",
  initialState,
  reducers: {
    loadingUsers: (state, action) => {
      state.loading = action.payload
    },
    fetchUsersSuccess: (state,action) => {
      state.users = action.payload
    },
    fetchUsersFailure: (state, action) => {
      state.error = action.payload
    },
    patchUser: (state, action) => {
      state.users = action.payload;
    },
    removeUser: (state, action) => {
      const id = action.payload;
      state.users = state.users.filter(u => u._id !== id);
    },
    updateUserVerified: (state, action) => {
      state.users = state.users.map(user => {
        if(user._id === action.payload) {
          user.isVerified = !user.isVerified;
        }
        return user;
      })
    }
  },
});

export const fetchUsers = () => async (dispatch) =>{
  dispatch(loadingUsers(true));
  const token = localStorage.getItem("token")
  const response = await axios({
      method:"GET",
      url:`https://inventory-ciul.onrender.com/api/auth/users/all`,
      headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json'
      },
  }).catch((err) =>{
    dispatch(fetchUsersFailure(err));
  });

  if(response.status === 200) {
    dispatch(fetchUsersSuccess(response.data.data));
  }
  dispatch(loadingUsers(false));
};

export const {loadingUsers, getUsers, fetchUsersFailure, fetchUsersSuccess, removeUser, updateUserVerified} = slice.actions;
export default slice.reducer;
