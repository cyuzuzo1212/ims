import { StaticDatePicker } from "@material-ui/lab";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    isLoggedIn: false,
    token: "",
    userData: {},
    error: "",
    loginSuccess: "",
    loading: false
  };

  export const authSlice = createSlice({
    name: "a",
    initialState,
    reducers: {
      register:(state) =>{
        state.userCreated =true;
      },
      login: (state, action) => {
        state.userData = action.payload;
        state.isLoggedIn = true;
      },
      reLogin: (state, action) => {
        state.userData = action.payload.userData
        state.isLoggedIn = true
        state.token = action.payload.token
      },
      loading: (state, action) => {
        state.loading = action.payload;
        if(action.payload === true) {
          state.error = '';
          state.loginSuccess = '';
        }
      },
      token: (state, action) => {
        state.token = action.payload;
      },
      loginError: (state, action) => {
        state.error = action.payload;
      },
      loginSuccess: (state, action) => {
        state.error = action.payload;
      },
      logout: (state, action) => {
            state = {
              isLoggedIn: false,
              token: "",
              userData: {},
              error: "",
              message: action.payload,
            };
            return state;
        }
      },
  });
  
  export const loginUser = (data) => async (dispatch) => {
    dispatch(loading(true))
    await axios({
      method: "POST",
      url: "https://inventory-ciul.onrender.com/api/auth/login",
      data: data,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        accept: "application/json",
      }
    })
      .then((res) => {
        console.log(res.data);
        dispatch(token(res.data.token));
        localStorage.setItem("token", res.data.token);
        localStorage.setItem('userData', JSON.stringify(res.data.data) );
        dispatch(login(res.data.data));
      })
      .catch((err) => {
        console.log(err)
        dispatch(loginError(err.response.data.message));
      });

      dispatch(loading(false))
  };
  
  export const createUser = (data) =>(dispatch) => {
    console.log(data)
    dispatch(loading(true))
    axios ({
      method: "POST",
      url: "https://inventory-ciul.onrender.com/api/auth/register",
      data: data,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        accept: "application/json",
      },
    }).then((res) =>{
      dispatch(register())
      dispatch(loading(false))
    })
    
    
  };

  export const logoutUser = () => async (dispatch) => {
    dispatch(loading(true))
    return await new Promise((resolve, reject) => {
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
      resolve("Logged out successfully!");
    }).then(res => {
      dispatch(logout(res))
      dispatch(loading(false))
    });
  }

  export const reLoginUser = (token, userData) => async (dispatch) => {
    dispatch(loading(true))
    return await new Promise((resolve) => {
      resolve({token, userData});
    }).then(res => {
      dispatch(reLogin(res));
      dispatch(loading(false));
    })
  }

export const { login, token, loginError ,register, logout, reLogin, loading } = authSlice.actions;
export default authSlice.reducer;
