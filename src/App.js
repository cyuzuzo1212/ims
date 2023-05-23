import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import {baseTheme} from './assets/global/Theme-variable'
import Themeroutes from "./routes/Router";
import { useDispatch, useSelector } from "react-redux";
import { reLoginUser } from "./components/Landingpage/authentication";

const App = () => {
  const routing = useRoutes(Themeroutes);
  const theme = baseTheme;
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = JSON.parse(localStorage.getItem('userData'));
    
    console.log({token, userData})

    if(!(token && userData)) {
      return false;
    }
    let encodedPayload = token.split('.')[1];
    encodedPayload = encodedPayload.replace('-', '+').replace('_', '/');
    let decodedPayload = JSON.parse(atob(encodedPayload));

    console.log({decodedPayload, userData})

    // check user id matching userData
    if(decodedPayload.id !== userData._id) {
      return false;
    }
    
    // check expiry
    const now = Math.round(Date.now() / 1000) + 60;
    if(Number(decodedPayload.exp) >= now) {
      // update global state (store)
      dispatch(reLoginUser(token, userData));
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      {routing}
    </ThemeProvider>
  );
};

export default App;
