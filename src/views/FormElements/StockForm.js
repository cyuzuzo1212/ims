import { Box, Button, MenuItem,Typography,TextField} from '@material-ui/core';
import * as React from 'react';

export default function StockForm() {
  return (
    <div style={{backgroundColor:"white",borderRadius:"10px",marginBottom:"20px"}}>
      <div style={{padding:"50px 100px 50px 100px"}}>
       
            <Typography for="my-input">Category</Typography>
            <TextField
           fullWidth
           id="category"
           variant="outlined"
           select
           label="Select"
           sx={{
             mb: 0,
           }}
           >
           {[{name: "Food", value: "food"}, {name: "Drinks", value: "drinks"}].map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            
            <Typography for="my-input">Item</Typography>

            <TextField
           fullWidth
           id="item"
           variant="outlined"
           select
           label="Item"
           sx={{
             mb: 0,
           }}
           >
           {[{name: "Food", value: "food"}, {name: "Drinks", value: "drinks"}].map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            
            <Typography for="my-input">Quantity</Typography>
            {/* <TextField id="my-input" aria-describedby="my-helper-text"   fullWidth
            variant="outlined"
            label="Quantity"
            
            sx={{
              mb: 0,}}/> */}

<div style={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            id="my-input"
            aria-describedby="my-helper-text"
            fullWidth
            variant="outlined"
            label="Quantity"
            sx={{
              mb: 2,
            }}
            // onChange={(quantity) => {
            //   console.log(quantity, "Quantity")
            //   setAddQuantity(quantity.target.value);
            // }}
          />

          <TextField
            fullWidth
            id="standard-select-item"
            variant="outlined"
            select
            label="Select"
            sx={{
              mb: 2,
            }}
            // onChange={(itemId) => {
            //   setMeasurementType(itemId.target.value);
            // }}
          >
            {[
              { name: "Box", value: "box" },
              { name: "Piece", value: "piece" },
              { name: "1 Kg", value: "kilogram" },
              { name: "1 Liter", value: "liter" },
            ].map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                style={{ flexDirection: "column" }}
              >
                {option.name}
              </MenuItem>
            ))}
          </TextField>

          {/* <TextField id="my-input" aria-describedby="my-helper-text" fullWidth 
            variant="outlined"  label="Quantity per box"
            sx={{
              mb: 2,}} 
              onChange={(box)=>{
                setAddBoxPrice(box.target.value);
              }}
              /> */}
        </div>
         
            <Typography for="my-input">Price Per Unit</Typography>
            <TextField id="my-input" aria-describedby="my-helper-text"   fullWidth
            variant="outlined"
            label="Price per unit"
            
            sx={{
              mb: 0,}}/>
         
            <Typography for="my-input">Price per box</Typography>
            <TextField id="my-input" aria-describedby="my-helper-text"   fullWidth
            variant="outlined"
            label="Price per box"
            
            sx={{
              mb: 2,}}/>
          
          <Button variant="contained" color="secondary">Save</Button>
        
      </div>
    </div>
  );
}