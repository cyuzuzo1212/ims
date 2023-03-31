import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  FormControl,
  MenuItem,
  Select,
} from "@material-ui/core";

import ExpCategTable from "./expCategTable";
import { NavLink } from "react-router-dom";

export const ExpenseCategory = () => {
  const [age, setAge] = React.useState("10");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Card variant="outlined" >
      <CardContent>
        <Box
          sx={{display: {
              sm: "flex",
              xs: "block",
            },
            alignItems: "flex-start",}}>
          <Box>
            <Typography variant="h3" sx={{marginBottom: "0",color:"blue",fontSize:"25px"}} gutterBottom >
              Category of Expenses
              
            </Typography>
          </Box>

          <Box
            sx={{
              marginLeft: "auto",
              mt: {
                lg: 0,
                xs: 2,
              },
            }}
            >
            
          </Box>

          <button style={{
               float:"right",
              marginTop:"-10px",
              color:"white",
              backgroundColor:"blue",
              width:"140px",
              borderRadius:"8px",
              border:"none",
              }}> <NavLink to={'/dashboard/addExpCateg'} style={{color:"white",textDecoration:"none"}}>Add Expense's Category</NavLink></button>

        </Box>
        <Box
          sx={{
            overflow: "auto",
            mt: 3,
          }}
        >
          <ExpCategTable />
        </Box>
      </CardContent>
    </Card>

   
  );
  
};



export default ExpenseCategory;
