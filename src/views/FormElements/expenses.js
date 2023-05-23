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

import ExpensesTable from "./expensesTable";
import { NavLink } from "react-router-dom";

export const Expenses = () => {
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
              Expenses
              
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
            

            <button style={{
               float:"right",
              marginTop:"-10px",
              color:"white",
              backgroundColor:"blue",
              width:"100px",
              borderRadius:"8px",
              border:"none",
              }}> <NavLink to={'/dashboard/dashboard/addExpenses'} style={{color:"white",textDecoration:"none"}}>Add Expences</NavLink></button>

          </Box>

          
        </Box>
        <Box
          sx={{
            overflow: "auto",
            mt: 3,
          }}
        >
          <ExpensesTable />
        </Box>
      </CardContent>
    </Card>

   
  );
  
};



export default Expenses;
