
import React from "react"
import { TextField, MenuItem,Typography ,Box } from "@material-ui/core";



function AddCategory () {
    return (
 <div className="add-category-container" style={{backgroundColor:"white",paddingBottom:"50px",borderRadius:"10px",justifyContent:"center"}}>
    
<div className="add-category-form" style={{marginTop:"0px",padding:"15px 100px"}}>
<Typography style={{color:"blue",fontSize:"25px",marginBottom:"50px"}}>Add Category</Typography>
<Typography >Add Category </Typography>
{/* <input  style={{padding:"8px 380px 8px 0px",borderRadius:"8px"}}
        type="text"
        placeholder="Name of Category"
        name="Category"
        required
        /> */}


<TextField
              id="edit-category-text"
              label="category"
              type="edit"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />

<Typography>Add Item</Typography>
{/* <input  style={{padding:"8px 380px 8px 0px",borderRadius:"8px"}}
        type="text"
        placeholder="Name of Item"
        name="Item"
        required
        /> */}

<TextField
              id="edit-item-text"
              label="item name"
              type="edit"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />






{/* <p>Add Unit</p>
<input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Symbol of Unit"
        name="Unit"
        required
        /> */}

<Box style={{
//     display:"flex",
//     marginTop:"30px",
//     paddingRight:"80px",
//     paddingLeft:"80px",
    backgroundColor:"blue",
    textAlign:"center",
    border:"none",
    borderRadius:"6px",
    color:"white",
    paddingTop:"10px",
    paddingBottom:"10px",
    textAlign:"center",
}}
        type="save"
        className="save-data"
        >{" "}Save{" "}
        </Box>

</div>
 </div>
    )
}
export default AddCategory;