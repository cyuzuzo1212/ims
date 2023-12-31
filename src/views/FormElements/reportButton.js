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
import { NavLink,Link } from 'react-router-dom';
// import SaleTable from "./SaleTable";
// import MonthlyReportTable from "./montlyReportTable";



const ReportButton = () => {
  const [age, setAge] = React.useState("10");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Card variant="outlined">
        <Typography sx={{fontWeight:"600",fontSize:"30px",color:"blue"}}> Reports</Typography>
      <CardContent 
        
          sx={{
            display: {
              
              
              paddingBottom:"100px",
              justifyContent:"space-between",
              
            },
            alignItems: "flex-start",
          }}
        >
          
             
           
           
          <NavLink  to={"/dashboard/dashboard/salesReport"}>
          <Button fullWidth  sx={{backgroundColor:"#1565C0",mb:2,color:"white",fontSize:"18px"}} >  Daily Sales Report</Button></NavLink>
          <NavLink to={"/dashboard/dashboard/weeklyReport"}>
          <Button  fullWidth sx={{backgroundColor:"#1565C0",mb:2,color:"white",fontSize:"18px"}}> Weekly Sales Report</Button></NavLink>
          <NavLink to={"/dashboard/dashboard/monthlyReport"}>
          <Button  fullWidth sx={{backgroundColor:"#1565C0",mb:2,color:"white",fontSize:"18px"}}> Monthly Sales Report</Button></NavLink>
          <NavLink to={"/dashboard/dashboard/purchaseRep"}>
          <Button  fullWidth sx={{backgroundColor:"#1565C0",mb:2,color:"white",fontSize:"18px"}}> Purchase Report</Button></NavLink>

<NavLink to={"/dashboard/dashboard/ProfitReport"}>
          <Button  fullWidth sx={{backgroundColor:"#1565C0",color:"white",fontSize:"18px"}}> Profit Report</Button>
        
          </NavLink>



        
      </CardContent>
    </Card>
  );
};



export default ReportButton;
