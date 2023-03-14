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

import StockTable from "./StockTable";
import { Link, NavLink } from "react-router-dom";


const Stock = () => {
    const [age, setAge] = React.useState("10");

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Card variant="outlined">
            <CardContent>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <Box
                        sx={{
                            display: {
                                sm: "flex",
                                xs: "block",
                            },
                            alignItems: "flex-start",
                        }}
                    >
                        <Box>
                            <Typography
                                variant="h3"
                                sx={{
                                    marginBottom: "0",
                                }}
                                gutterBottom
                            >
                                Stock
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
                    {/* <Box >
                       
                        <NavLink to ={'/dashboard/addstock'}>Add Stock</NavLink>
                    </Box> */}

                </Box>
                <button 
              style={{display:"flex",
              marginLeft:"900px",
              marginTop:"-10px",
              color:"white",
              backgroundColor:"blue",
              padding:"10px",
              borderRadius:"4px",
              border:"none",
              }}>  <NavLink to={'/dashboard/stockform'}>Add Stock</NavLink></button>
                <Box
                    sx={{
                        overflow: "auto",
                        mt: 3,
                    }}
                >
                    <StockTable />
                </Box>
            </CardContent>
        </Card>
    );
};

export default Stock;
