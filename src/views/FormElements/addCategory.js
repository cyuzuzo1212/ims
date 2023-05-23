
import React from "react";
import { TextField, MenuItem,Typography ,Button } from "@material-ui/core";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { createCateg, redirect as redirectAction } from "../../components/Landingpage/categoryslice";
import { useNavigate } from "react-router-dom";





export const AddCategory =() =>{
        const [addingCategory,setAddingCategory]= useState("");
        const [addingItemNum,setAddingItemNum]= useState("");
        const {changeSaved} = useSelector(state => state.categories);

        const dispatch=useDispatch();
        const navigate = useNavigate();

        useEffect(() => {
                if(changeSaved) {
                        dispatch(redirectAction(false));
                        navigate('/dashboard/dashboard/form-elements/category')
                }
        }, [changeSaved])

        const handlePost = (e) => {
                e.preventDefault();
                const data = {
                        name:addingCategory,
                        numberOfItems:  addingItemNum
                }
                dispatch(createCateg(data));
        };

    return (
 <div className="add-category-container" style={{backgroundColor:"white",paddingBottom:"50px",borderRadius:"10px",justifyContent:"center"}}>
    
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
    paddingTop:"10px",
    paddingBottom:"10px",
    textAlign:"center",
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