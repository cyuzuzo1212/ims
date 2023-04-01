
import React from "react";
import { TextField, MenuItem,Typography ,Button } from "@material-ui/core";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { createCateg } from "../../components/Landingpage/categoryslice";




function AddCategory () {
    return (
 <div className="add-category-container" style={{display:"flex",backgroundColor:"white",paddingBottom:"50px",borderRadius:"10px",justifyContent:"center"}}>
    
<div className="add-category-form" style={{marginTop:"0px",padding:"15px 100px"}}>
<Typography style={{color:"blue",fontSize:"25px",marginBottom:"50px"}}>Add Category</Typography>
<Typography >Add Category </Typography>



<TextField
              id="edit-category-text"
              label="Category Name"
              type="edit"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
              onChange={(category)=>{
                setAddingCategory(category.target.value);
              }}
            />

<Typography>Add Category Number</Typography>


<TextField
              id="edit-item-text"
              label="Category Number"
              type="edit"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
              onChange={(itemname)=>{
                setAddingItemNum(itemname.target.value);
        }}
            />






{/* <p>Add Unit</p>
<input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Symbol of Unit"
        name="Unit"
        required
        /> */}

<Button onClick={handlePost} style={{

    backgroundColor:"blue",
    textAlign:"center",
    border:"none",
    borderRadius:"6px",
    color:"white",
    paddingTop:"8px",
    paddingBottom:"8px",
}}
        type="save"
        className="save-data"
        >{" "}Save{" "}
        </Button>

</div>
 </div>
    )
}
export default AddCategory;