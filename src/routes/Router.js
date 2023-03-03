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
    element: <Home />
  },
  {
    path: "/dashboard",
    element: <FullLayout />,
    children: [
      { path: "/dashboard/", element: <Navigate to="dashboards/dashboard1" /> },
      { path: "/dashboard/dashboards/dashboard1", exact: true, element: <Dashboard1 /> },
      { path: "/dashboardtables/basic-table", element: <BasicTable /> },
      { path: "/dashboard/form-layouts/form-layouts", element: <FormLayouts /> },
      { path: "/dashboard/form-elements/autocomplete", element: <ExAutoComplete /> },
      { path: "/dashboard/form-elements/button", element: <ExButton /> },
      { path: "/dashboard/form-elements/checkbox", element: <ExCheckbox /> },
      { path: "/dashboard/form-elements/radio", element: <ExRadio /> },
      { path: "/dashboard/form-elements/slider", element: <ExSlider /> },
      { path: "/dashboard/form-elements/switch", element: <ExSwitch /> },
    ],
  },
];

export default ThemeRoutes;
