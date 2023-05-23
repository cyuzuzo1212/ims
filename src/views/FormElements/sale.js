import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Box,
    FormControl,
    MenuItem,
    Select,
    Button,
} from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import SaleTable from "./SaleTable";



const Sale = () => {
  const [age, setAge] = React.useState("10");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Card variant="outlined">
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
                marginBottom: "0", color:"blue",
              }}
              gutterBottom
            >
              Sales
              
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
              // marginLeft:"500px",
              float:"right",
              marginTop:"-5px",
              color:"white",
              backgroundColor:"blue",
              width:"110px",
              borderRadius:"8px",
              border:"none",
              }}>  <NavLink to={'/dashboard/dashboard/addSale'} style={{color:"white",textDecoration:"none" }}>Add Sale</NavLink></button>
        </Box>




        <Box
          sx={{
            overflow: "auto",
            mt: 3,
          }}
        >
          <SaleTable />
        </Box>
      </CardContent>
    </Card>
  );
};



export default Sale;
