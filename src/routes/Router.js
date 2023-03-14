import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Category from "../views/FormElements/categories";
import Items from "../views/FormElements/items";
import AddCategory from "../views/FormElements/addCategory";
import AddItem from "../views/FormElements/addItem";
import Report from "../views/FormElements/report";
import EditCategory from "../views/FormElements/editCategory";
import EditItem from "../views/FormElements/editItem";


import Category from "../views/FormElements/categories";
import Items from "../views/FormElements/items";
import AddCategory from "../views/FormElements/addCategory";
import AddItem from "../views/FormElements/addItem";
import Report from "../views/FormElements/report";
import EditCategory from "../views/FormElements/editCategory";
import EditItem from "../views/FormElements/editItem";
import Stock from "../views/FormElements/stock";


/****Screens *****/

// import Home from "../components/Landingpage/home";
// import Signup from "../components/Landingpage/Signup";
import StockForm from "../views/FormElements/StockForm";
// import Login from "../components/Landingpage/Login";
import AddSale from "../views/FormElements/addSale";
import Sale from "../views/FormElements/sale";
import Profile from "../views/FormElements/profile";
// import ForgotPassword from "../components/Landingpage/Forgotpassword";






/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout/FullLayout.js"));
/****End Layouts*****/

/*****Pages******/
const Dashboard1 = lazy(() => import("../views/dashboards/Dashboard1"));

/*****Tables******/
const BasicTable = lazy(() => import("../views/tables/BasicTable"));

// form elements
const ExAutoComplete = lazy(() =>
  import("../views/FormElements/stock")
);
const ExButton = lazy(() => import("../views/FormElements/ExButton"));
const ExCheckbox = lazy(() => import("../views/FormElements/categories"));
const ExRadio = lazy(() => import("../views/FormElements/items"));
const ExSlider = lazy(() => import("../views/FormElements/ExSlider"));
const ExSwitch = lazy(() => import("../views/FormElements/ExSwitch"));

// form layouts
const FormLayouts = lazy(() => import("../views/FormLayouts/FormLayouts"));

/*****Routes******/

const ThemeRoutes = [
  // {
  //   path: "/",
  //   element: <Navigate to="/home" />
  // },
  // {
  //   path: "/home",
  //   element: <Home />
  // },

  // {
  //   path: "/",
  //   element: <Navigate to="/signup" />
  // },
  // {
  //   path: "/signup",
  //    element: <Signup/>
  // },


  // {
  //   path: "/",
  //   element: <Navigate to="/login" />
  // },
  // {
  //   path: "/login",
  //    element: <Login/>
  // },

  // {
  //   path: "/",
  //   element: <Navigate to="/forgotpassword" />
  // },
  // {
  //   path: "/forgotpassword",
  //    element: <ForgotPassword/>
  // },
  // {
  //   path: "/addstock", element: <StockForm />
  // },
  {
    path: "/dashboard/",
    exact: true,
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/dashboard/home" /> },
      { path: "/home", element: <Dashboard1 /> },
      { path: "/tables/basic-table", element: <BasicTable /> },
      { path: "/form-layouts/form-layouts", element: <FormLayouts /> },
      { path: "/form-elements/autocomplete", element: <ExAutoComplete /> },
      { path: "/form-elements/button", element: <ExButton /> },
      { path: "/form-elements/category", element: <Category /> },
      { path: "/form-elements/items", element: <Items /> },
      { path: "/form-elements/slider", element: <ExSlider /> },
      { path: "/form-elements/switch", element: <ExSwitch /> },
      { path: "/form-elements/report", element: <Report /> },
      { path: "/addCategory", element: <AddCategory /> },
      { path: "/addItem", element: <AddItem /> },
      { path: "/editCategory", element: <EditCategory/>},
      { path: "/editItem", element: <EditItem/>},
    ],
  },
];

export default ThemeRoutes;
