import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Screens *****/

import Home from "../components/Landingpage/home"

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout/FullLayout.js"));
/****End Layouts*****/

/*****Pages******/
const Dashboard1 = lazy(() => import("../views/dashboards/Dashboard1"));

/*****Tables******/
const BasicTable = lazy(() => import("../views/tables/BasicTable"));

// form elements
const ExAutoComplete = lazy(() =>
  import("../views/FormElements/ExAutoComplete")
);
const ExButton = lazy(() => import("../views/FormElements/ExButton"));
const ExCheckbox = lazy(() => import("../views/FormElements/ExCheckbox"));
const ExRadio = lazy(() => import("../views/FormElements/ExRadio"));
const ExSlider = lazy(() => import("../views/FormElements/ExSlider"));
const ExSwitch = lazy(() => import("../views/FormElements/ExSwitch"));
// form layouts
const FormLayouts = lazy(() => import("../views/FormLayouts/FormLayouts"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/home",
    element: <Home />
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
      { path: "/form-elements/autocomplete", element: <ExAutoComplete /> },
      { path: "/form-elements/button", element: <ExButton /> },
      { path: "/form-elements/checkbox", element: <ExCheckbox /> },
      { path: "/form-elements/radio", element: <ExRadio /> },
      { path: "/form-elements/slider", element: <ExSlider /> },
      { path: "/form-elements/switch", element: <ExSwitch /> },
    ],
  },
];

export default ThemeRoutes;
