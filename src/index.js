import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

//import reportWebVitals from './reportWebVitals';
import Spinner from "./views/Spinner/Spinner";
import { store } from "./store";
ReactDOM.render(
  
    <Suspense fallback={<Spinner />}>
      <HashRouter>
        <Provider store={store}>
        <App />
        </Provider>
      </HashRouter>
    </Suspense>,
  document.getElementById("root") 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
