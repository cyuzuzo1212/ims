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
// import SaleTable from "./SaleTable";
import CapitalReportTable from "./capitalReportTable";



const CapitalReport = () => {
  const [age, setAge] = React.useState("10");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Card variant="outlined">
      <CardContent >
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
                marginBottom: "0", color:"blue",textAlign:"center"
              }}
              gutterBottom
            >
              Capital Report
              
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
          
        </Box>




        <Box
          sx={{
            overflow: "auto",
            mt: 3,
          }}
        >
          <CapitalReportTable />
        </Box>
      </CardContent>
    </Card>
  );
};



export default CapitalReport;
