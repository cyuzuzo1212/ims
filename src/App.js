import React from "react";
import { Routes,Route, useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import {baseTheme} from './assets/global/Theme-variable'
import Themeroutes from "./routes/Router";
import Home from "./components/Landingpage/home";
import Contact from "./components/Landingpage/Contact";

const App = () => {
  const routing = useRoutes(Themeroutes);
  const theme = baseTheme;
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
