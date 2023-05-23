import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  FormControl,
  MenuItem,
  Select,
} from "@material-ui/core";

import CategoryTable from "./CategoryTable";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Category = () => {
  const [age, setAge] = React.useState("10");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Card variant="outlined"  >
      <CardContent>
        <Box
          sx={{
            display: {
              sm: "flex",
              xs: "block",
              height:"8px",
            },
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                marginBottom: "0", color:"blue",fontSize:"25px"
              }}
              gutterBottom
            >
              Categories
             
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

          <button 
              style={{
              // marginLeft:"700px",
              float:"right",
              marginTop:"-5px",                            
              width:"120px",  
              color:"white",
              backgroundColor:"blue",
              padding:"10px",
              borderRadius:"8px",
              border:"none",
              }}>  <NavLink to={'/dashboard/dashboard/addCategory'} style={{color:"white",textDecoration:"none"}}>Add Category</NavLink></button>

        </Box>
        <Box
          sx={{
            overflow: "auto",
            mt: 3,
          }}
        >
          <CategoryTable />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Category;
