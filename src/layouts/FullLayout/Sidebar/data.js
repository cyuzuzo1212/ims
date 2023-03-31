import React from "react";
import {
  DashboardOutlined,
  AddToPhotosOutlined,
  AspectRatioOutlined,
  AssignmentTurnedInOutlined,
  AlbumOutlined,
  SwitchCameraOutlined,
  SwitchLeftOutlined,
  DescriptionOutlined,
  AutoAwesomeMosaicOutlined,
} from "@material-ui/icons/";
import jwt from 'jwt-decode'

const token = localStorage.getItem("inv-token");


const userToken = jwt(token)
console.log(userToken);

const Menuitems = [
  {
    title: "Dashboard",
    icon: DashboardOutlined,
    href: "/dashboard/home",
  },
  {
    title: "Stock",
    icon: AddToPhotosOutlined,
    // href: "/dashboard/form-elements/stockpage",
    href: "/dashboard/form-elements/stock",
  },
  {
    title: "Sales",
    icon: AspectRatioOutlined,
    href: "/dashboard/form-elements/sale",
  },
  {
    title: "Categories",
    icon: AssignmentTurnedInOutlined,
    href: "/dashboard/form-elements/category",
  },
  {
    title: "Items",
    icon: AlbumOutlined,
    href: "/dashboard/form-elements/items",
  },

  {
    // title: "Form",
    title: "Expenses",
    icon: DescriptionOutlined,
    href: "/dashboard/form-elements/expServices",
  },

  {
    title: "Expense's Category",
    icon: AutoAwesomeMosaicOutlined,
    // href: "/dashboard/tables/basic-table",
    href: "/dashboard/form-elements/expenseCategory",
  },
  {
    title: "Reports",
    icon: SwitchCameraOutlined,
    href: "/dashboard/form-elements/report",
  },
  {
    title: "Profile",
    icon: SwitchLeftOutlined,
    href: "/dashboard/form-elements/profile",
  },
  
  
];
export default Menuitems;
