import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Category from "../views/FormElements/categories";
import Items from "../views/FormElements/items";
import AddCategory from "../views/FormElements/addCategory";
import AddItem from "../views/FormElements/addItem";
import Report from "../views/FormElements/report";
import EditCategory from "../views/FormElements/editCategory";
import EditItem from "../views/FormElements/editItem";
import Expenses from "../views/FormElements/expenses";
import AddExpenses from "../views/FormElements/addExpenses";
import ForgotPassword from "../components/Landingpage/Forgotpassword";
import Login from "../components/Landingpage/Login";
import ExpServices from "../views/FormElements/expServices";
import Stock from "../views/FormElements/stock";
import ExpenseCategory from "../views/FormElements/expenseCategory";
import AddExpCateg from "../views/FormElements/addExpCateg";
import EditStock from "../views/FormElements/editStock";
import EditSale from "../views/FormElements/editSale";
import EditExpCateg from "../views/FormElements/editExpCateg";


/****Screens *****/

import Home from "../components/Landingpage/home";
import Signup from "../components/Landingpage/Signup";
import StockForm from "../views/FormElements/StockForm";
import Login from "../components/Landingpage/Login";
import AddSale from "../views/FormElements/addSale";
import Sale from "../views/FormElements/sale";
import Profile from "../views/FormElements/profile";
import ForgotPassword from "../components/Landingpage/Forgotpassword";
import BusinessForm from "../components/Landingpage/BusinessForm";
import ProfitReport from "../components/Landingpage/ProfitReport";
import AddStock from "../views/FormElements/addStock";
import AddSale from "../views/FormElements/addSale";
import Sale from "../views/FormElements/sale";
import Profile from "../views/FormElements/profile";
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
  {
    path: "/",
    element: <Navigate to="/profitreport" />,
  },
  { path: "/profitreport", element: <ProfitReport /> },


  {
    path: "/",
    element: <Navigate to="/businessform" />,
  },

  { path: "/businessform", element: <BusinessForm /> },

  {
    path: "/",
    element: <Navigate to="/signup" />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/",
    element: <Navigate to="/forgotpassword" />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  
  {
    path: "/dashboard/",
    exact: true,
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/dashboard/home" /> },
      { path: "/home", element: <Dashboard1 /> },
      { path: "/tables/basic-table", element: <BasicTable /> },
      { path: "/form-layouts/form-layouts", element: <FormLayouts /> },
      { path: "/form-elements/stock", element: <Stock /> },
      { path: "/form-elements/user", element: <UserForm /> },
      { path: "/form-elements/sale", element: <Sale /> },
      // { path: "/form-layouts/form-layouts", element: <FormLayouts /> },
      { path: "/form-elements/expenses", element: <Expenses/>},
      { path: "/form-elements/expServices", element: <ExpServices/>},
      { path: "/editExpenses", element:<EditExpenses/>},
      { path: "/form-elements/autocomplete", element: <ExAutoComplete /> },
      { path: "/form-elements/button", element: <ExButton /> },
      { path: "/form-elements/category", element: <Category /> },
      { path: "/form-elements/items", element: <Items /> },
      { path: "/form-elements/slider", element: <ExSlider /> },
      { path: "/form-elements/switch", element: <ExSwitch /> },
      { path: "/form-elements/report", element: <Report /> },
      { path: "/form-elements/salesReport", element: <SalesReport /> },
      { path: "/form-elements/profile", element: <Profile /> },

      { path: "/addCategory", element: <AddCategory /> },
      { path: "/addItem", element: <AddItem /> },
      { path: "/editCategory/:id", element: <EditCategory/>},
      // { path: "/editItem", element: <EditItem/>},
      { path: "/form-elements/stock", element: <Stock /> },
      { path: "/form-elements/sale", element: <Sale /> },
      { path: "/addExpenses", element: <AddExpenses/>},
      { path: "/form-elements/checkbox", element: <ExCheckbox /> },
      { path: "/form-elements/radio", element: <ExRadio /> },
      { path: "/form-elements/slider", element: <ExSlider /> },
      { path: "/form-elements/profile", element: <Profile /> },
      { path: "/addStock", element: <AddStock/>},
      { path: "/addSale", element: <AddSale/>},
      { path: "/Signup", element: <Signup/>},
      { path: "/form-elements/expenseCategory", element: <ExpenseCategory /> },
      { path: "/addExpCateg", element: <AddExpCateg/>},
      { path: "/editStock", element: <EditStock/>},
      { path: "/editSale", element: <EditSale/>},
      { path: "/editItem", element: <EditItem/>},
      { path: "/editExpCateg", element: <EditExpCateg/>},
    ],
  },
];

export default ThemeRoutes;
