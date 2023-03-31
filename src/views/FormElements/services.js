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



export const Services = () => {
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
              services
              {/* <button 
              style={{
              marginLeft:"700px",
              width:"100px",
              marginTop:"-20px",
              color:"white",
              backgroundColor:"blue",
              height:"40px",
              borderRadius:"8px",
              border:"none",
              }}>  <NavLink to={'/dashboard/addSale'} style={{color:"white",textDecoration:"none",paddingBottom:"20px" }}>Add Sale</NavLink></button> */}
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
            {/* <FormControl variant="standard" sx={{ minWidth: 120 }}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>March 2021</MenuItem>
                <MenuItem value={20}>April 2021</MenuItem>
                <MenuItem value={30}>Jun 2021</MenuItem>
              </Select>
            </FormControl> */}
          </Box>
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



export default Services;
