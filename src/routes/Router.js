import React from "react";
import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Category from "../views/FormElements/categories";
import Items from "../views/FormElements/items";
import AddCategory from "../views/FormElements/addCategory";
import AddItem from "../views/FormElements/addItem";
// import Report from "../views/FormElements/report";
import EditCategory from "../views/FormElements/editCategory";
import EditItem from "../views/FormElements/editItem";
import Expenses from "../views/FormElements/expenses";
import AddExpenses from "../views/FormElements/addExpenses";
import ForgotPassword from "../components/Landingpage/Forgotpassword";
// import Login from "../components/Landingpage/Login";
import ExpServices from "../views/FormElements/expServices";
import Stock from "../views/FormElements/stock";
import ExpenseCategory from "../views/FormElements/expenseCategory";
import AddExpCateg from "../views/FormElements/addExpCateg";
import EditStock from "../views/FormElements/editStock";
import EditSale from "../views/FormElements/editSale";
import EditExpCateg from "../views/FormElements/editExpCateg";
import PurchaseReport from "../views/FormElements/purchaseRep";
import AllReports from "../views/FormElements/allReports";
import SalesReport from "../views/FormElements/salesReport";
import WeeklyReport from "../views/FormElements/weeklyReport";
import MonthlyReport from "../views/FormElements/monthlyReport";
import ProfitReport from "../views/FormElements/ProfitReport";
import UserForm from "../views/FormElements/userForm";
import NewUser from "../views/FormElements/newUsers";
import NewMessages from "../views/FormElements/newMessages";


/****Screens *****/

import Home from "../components/Landingpage/home";
import Signup from "../components/Landingpage/Signup";
// import StockForm from "../views/FormElements/StockForm";
import Login from "../components/Landingpage/Login";
import AddSale from "../views/FormElements/addSale";
import Sale from "../views/FormElements/sale";
import Profile from "../views/FormElements/profile";
// import ForgotPassword from "../components/Landingpage/Forgotpassword";
import AddStock from "../views/FormElements/addStock";
// import AddSale from "../views/FormElements/addSale";
// import Sale from "../views/FormElements/sale";
// import Profile from "../views/FormElements/profile";
import EditExpenses from "../views/FormElements/editExpenses";










/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout/FullLayout.js"));
/****End Layouts*****/

/*****Pages******/
const Dashboard1 = lazy(() => import("../views/dashboards/Dashboard1"));

/*****Tables******/
const BasicTable = lazy(() => import("../views/tables/BasicTable"));

// form elements
const ExAutoComplete = lazy(() => import("../views/FormElements/stock"));
const ExButton1 = lazy(() => import("../views/FormElements/ExButton"));
const ExCheckbox1 = lazy(() => import("../views/FormElements/categories"));
const ExRadio = lazy(() => import("../views/FormElements/items"));
const ExButton = lazy(() => import("../views/FormElements/stock"));
const ExCheckbox = lazy(() => import("../views/FormElements/sale"));
const ExSlider = lazy(() => import("../views/FormElements/salesReport"));
//const ExSlider = lazy(() => import("../views/FormElements/ExSlider"));
const ExSwitch = lazy(() => import("../views/FormElements/ExSwitch"));

// form layouts
// const FormLayouts = lazy(() => import("../views/FormLayouts/FormLayouts"));
const FormLayouts = lazy(() => import("../views/FormElements/expenses"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  // {
  //   path: "/",
  //   element: <Navigate to="/profitreport" />,
  // },
  // { path: "/profitreport", element: <ProfitReport /> },


  // {
  //   path: "/",
  //   element: <Navigate to="/businessform" />,
  // },

  // { path: "/businessform", element: <BusinessForm /> },

  // {
  //   path: "/",
  //   element: <Navigate to="/signup" />,
  // },
  {
    path: "/signup",
    element: <Signup />,
  },

  // {
  //   path: "/",
  //   element: <Navigate to="/Login" />,
  // },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/userForm",
    element: <UserForm/>,
  },

  // {
  //   path: "/",
  //   element: <Navigate to="/forgotpassword" />,
  // },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  
  {
    path: "/dashboard",
    exact: true,
    element: <FullLayout />,
    children: [
      { path: "dashboard/", element: <Navigate to="/dashboard/home" /> },
      { path: "dashboard/home", element: <Dashboard1 /> },
      { path: "dashboard/tables/basic-table", element: <BasicTable /> },
      { path: "dashboard/form-layouts/form-layouts", element: <FormLayouts /> },
      { path: "dashboard/form-elements/stock", element: <Stock /> },
      { path: "dashboard/userForm", element: <UserForm /> },
      { path: "dashboard/form-elements/sale", element: <Sale /> },
      // { path: "/form-layouts/form-layouts", element: <FormLayouts /> },
      { path: "dashboard/form-elements/expenses", element: <Expenses/>},
      { path: "dashboard/form-elements/expServices", element: <ExpServices/>},
      { path: "dashboard/editExpenses", element:<EditExpenses/>},
      { path: "dashboard/form-elements/autocomplete", element: <ExAutoComplete /> },
      { path: "dashboard/form-elements/button", element: <ExButton /> },
      { path: "dashboard/form-elements/category", element: <Category /> },
      { path: "dashboard/form-elements/items", element: <Items /> },
      { path: "dashboard/form-elements/slider", element: <ExSlider /> },
      { path: "dashboard/form-elements/switch", element: <ExSwitch /> },
      { path: "dashboard/purchaseRep", element: <PurchaseReport /> },
      { path: "dashboard/addCategory", element: <AddCategory /> },
      { path: "dashboard/addItem", element: <AddItem /> },
      { path: "dashboard/editCategory/:id", element: <EditCategory/>},
      { path: "dashboard/addExpenses", element: <AddExpenses/>},
      { path: "dashboard/form-elements/checkbox", element: <ExCheckbox /> },
      { path: "dashboard/form-elements/radio", element: <ExRadio /> },
      { path: "dashboard/form-elements/slider", element: <ExSlider /> },
      { path: "dashboard/form-elements/profile", element: <Profile /> },
      { path: "dashboard/addStock", element: <AddStock/>},
      { path: "dashboard/addSale", element: <AddSale/>},
      { path: "dashboard/Signup", element: <Signup/>},
      { path: "dashboard/login", element: <Login/>},
      { path: "dashboard/form-elements/expenseCategory", element: <ExpenseCategory /> },
      { path: "dashboard/addExpCateg", element: <AddExpCateg/>},
      { path: "dashboard/editStock", element: <EditStock/>},
      { path: "dashboard/editSale", element: <EditSale/>},
      { path: "dashboard/editItem/:id", element: <EditItem/>},
      { path: "dashboard/editExpCateg/:id", element: <EditExpCateg/>},
      { path: "dashboard/form-elements/allReports", element: <AllReports /> },
      { path: "dashboard/salesReport", element: <SalesReport/>},
      { path: "dashboard/weeklyReport", element: <WeeklyReport/>},
      { path: "dashboard/monthlyReport", element: <MonthlyReport/>},
      { path: "dashboard/ProfitReport", element: <ProfitReport/>},
      { path: "dashboard/Forgotpassword", element: <ForgotPassword/>},
      { path: "dashboard/admin/newUsers", element: <NewUser/> },
      { path: "dashboard/admin/newMessages", element: <NewMessages/>},
      // { path: "/profRep", element: <Statements/>},
    ],
  },
];

export default ThemeRoutes;
