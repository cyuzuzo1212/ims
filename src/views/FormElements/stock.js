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
import { NavLink } from "react-router-dom";


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
                                    color:"blue",
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
                            
                        </Box>
                    </Box>
                   

                </Box>
                <button 
              style={{
            //   marginLeft:"500px",
            float:"right",
              marginTop:"-10px",
              color:"white",
              backgroundColor:"blue",
              width:"110px",
              borderRadius:"4px",
              border:"none",
              }}>  <NavLink to={'/dashboard/addStock'} style={{color:"white",textDecoration:"none"}}>Add Stock</NavLink></button>
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