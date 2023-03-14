import { Select } from "@material-ui/core";
import {React} from "react"
import { TextField, MenuItem,Typography ,Box } from "@material-ui/core"
import Category from "./categories";
import {IoIosArrowDown} from "react-icons/io"



function AddItem () {
    return (
        <div className="add-item-container" style={{backgroundColor:"white",borderRadius:"10px",justifyContent:"center",paddingBottom:"20px"}}>
<div style={{padding:"20px 100px 0px 100px"}}>
    
    <Typography style={{color:"blue",fontSize:"25px",marginBottom:"50px"}}>Add Item</Typography>
    <Typography>Date</Typography>
    {/* <input  style={{padding:"8px 380px 8px 0px",borderRadius:"8px"}}
        type="text"
        placeholder="Date of entry"
        name="Date"
        required
        /> */}
        <TextField
              id="date-text"
              label=""
              type="date"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />

<Typography >Select category of item</Typography>
    
<TextField
              fullWidth
              id="standard-select-number"
              variant="outlined"
              select
              label="Select"
              sx={{
                mb: 2,
              }}
            >
              {[{name: "Food", value: "food"}, {name: "Drinks", value: "drinks"}].map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
<Typography>Add name of Item</Typography>
   


<TextField
              id="add-item-text"
              label="item name"
              type="add"
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
export default AddItem;