import React, { useEffect, useState} from "react";
import { Card,CardContent, Typography,Box } from "@material-ui/core";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



const NewMessages = () => {
    const [age,setAge] = React.useState("10");
    const {userData: {role}} = useSelector(state => state.auth);
    const navigate = useNavigate();
    useEffect(() => {
        if(role !== "admin") {
            navigate("/dashboard/dashboard/home", {replace: true});
        }
    })
    
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return(
        <Card variant="outlined">
            <CardContent>
                <Box sx={{display: {
                    sm: "flex",
                    xs: "block",
                    height: "8px",
                },
                alignItems:"flex-start"
                }}>
                    <Box>
                        <Typography variant="h3" sx={{marginBottom: "0", color:"blue",fontSize:"25px"}} gutterBottom>
                            New Messages

                        </Typography>
                    </Box>
                    <Box sx={{
                              marginLeft: "auto",
                              mt: {
                                    lg: 0,
                                    xs: 2,
                                   },
            }}>

                    </Box>

                </Box>
                <Box
          sx={{
            overflow: "auto",
            mt: 3,
          }}
        >
          {/* newMessageTable */}
        </Box>
            </CardContent>

        </Card>
    )
};
export default NewMessages;