import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardContent,
  Typography,
  Box, Button, Backdrop, CircularProgress
} from "@material-ui/core";

import ItemTable from "./itemTable";
import { NavLink } from "react-router-dom";
import { fetchItems, setRedirect } from "../../reducers/itemsReducer";

const Items = () => {
  const [age, setAge] = useState("10");
  const dispatch = useDispatch();
  const {items, loading} = useSelector(state => state.items);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(setRedirect(false));
  }, []);

  return (
    <Card variant="outlined">
      <CardContent>
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
              sx={{ marginBottom: "0", color: "blue", fontSize: "25px" }}
              gutterBottom
            >
              Items
             
            </Typography>
          </Box>
          {
            loading
            && <Backdrop
                sx={{ color: '#fff', zIndex: 99}}
                open={loading}
                >
                <CircularProgress color="inherit" />
              </Backdrop>
          }

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
                 
                  width:"100px",
                  float:"right",
                  marginTop: "-10px",
                  color: "white",
                  backgroundColor: "blue",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "none",
                }}
              >
                {" "}
                <NavLink
                  to={"/dashboard/dashboard/addItem"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Add Item
                </NavLink>
              </button>
        </Box>
        <Box
          sx={{
            overflow: "auto",
            mt: 3,
          }}
        >
          <ItemTable items={items} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Items;