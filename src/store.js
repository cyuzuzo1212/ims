import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./components/Landingpage/authentication";
import categoriesReduce from "./components/Landingpage/categoryslice";
import salesReduce from "./components/Landingpage/salesSlice";
import stocksReduce from "./components/Landingpage/stockSlice";
import expCategoriesReduce from "./components/Landingpage/expCategSlice";
import expensesReduce from "./components/Landingpage/expensesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReduce,
    sales: salesReduce,
    stocks: stocksReduce,
    expCategories: expCategoriesReduce,
    expenses: expensesReduce,
  },
});
