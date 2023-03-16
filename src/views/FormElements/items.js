import React from "react";
import  { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  FormControl,
  MenuItem,
  Select,
} from "@material-ui/core";

import ItemTable from "./itemTable";
import { NavLink } from "react-router-dom";

const Items = () => {
  const [age, setAge] = useState("10");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    fetch("https://inventory-ciul.onrender.com/api/items", {
      headers: {
        "content-type": "application/json",
        token: localStorage.getItem("inv-token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setItems(data.items))
      .catch((err) => console.log(err));
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
              <button
                style={{
                  display: "flex",
                  marginLeft: "880px",
                  marginTop: "-20px",
                  color: "white",
                  backgroundColor: "blue",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "none",
                }}
              >
                {" "}
                <NavLink
                  to={"/dashboard/addItem"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Add Item
                </NavLink>
              </button>
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
          <ItemTable items={items} setItems={setItems}/>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Items;
