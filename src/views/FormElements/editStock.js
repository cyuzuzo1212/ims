import { Select } from "@material-ui/core";
import {React} from "react"
import { TextField, MenuItem,Typography ,Box, Button } from "@material-ui/core"
import Category from "./categories";
import {IoIosArrowDown} from "react-icons/io"



export const EditStock =()=> {
    return (
        <div className="add-item-container" style={{backgroundColor:"white",borderRadius:"10px",justifyContent:"center",paddingBottom:"20px"}}>
<div style={{padding:"20px 100px 0px 100px"}}>
    
    <Typography style={{color:"blue",fontSize:"25px",marginBottom:"50px"}}>Edit Stocks</Typography>
    <Typography>Edit Quantity</Typography>
    {/* <input  style={{padding:"8px 380px 8px 0px",borderRadius:"8px"}}
        type="text"
        placeholder="Date of entry"
        name="Date"
        required
        /> */}
        <TextField
              id="date-text"
              label="Quantity"
              type="quantity"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />

<Typography >Edit Box Items</Typography>
    
<TextField
              fullWidth
              id="standard-edit-description"
              variant="outlined"
              type="numbers"
              label="Number of boxes"
              sx={{
                mb: 2,
              }}
            >
              {/* {[{name: "Food", value: "food"}, {name: "Drinks", value: "drinks"}].map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.name}
                </MenuItem>
              ))} */}
            </TextField>
<Typography>Edit unit per box</Typography>
   


<TextField
              id="add-number"
              label="Amount"
              
              type="number"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />





<Box style={{
            
            backgroundColor:"blue",
            color:"white",
            padding:"10px 0px 10px 0px",
            textAlign:"center",
            border:"none",
            borderRadius:"5px",
        }}
        type="save"
        className="save-data"
        >{" "}Save{" "}
        </Box>
        
        </div>       
</div>
        
    )
}
export default EditStock;