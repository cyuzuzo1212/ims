
import React, { useEffect } from "react"
import { TextField, MenuItem,Typography ,Button } from "@material-ui/core";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { EditCategories } from "../../components/Landingpage/categoryslice";



export const EditCategory =()=> {
        const params = useParams();
        const id = params.id;
        console.log(id, "User ID")
        const [editingCategory,setEditingCategory]= useState("");
        const [editingItemNum,setEditingItemNum]= useState("");
                
        
        dispatch(EditCategory())

        const category = useSelector((state)=>state.categories.category)

        const dispatch=useDispatch();
        const handlePost = (e) => {
                e.preventDefault();
                const data = {
                        name:editingCategory,
                        numberOfItems:  editingItemNum
                }
                dispatch(EditCategories(id, "token", data));
                
        };
        console.log(category)

    return (
 <div className="add-category-container" style={{backgroundColor:"white",paddingBottom:"50px",borderRadius:"10px",justifyContent:"center"}}>
    
<div className="add-category-form" style={{marginTop:"0px",padding:"15px 100px"}}>
<Typography style={{color:"blue",fontSize:"25px",marginBottom:"50px"}}>Edit Category</Typography>
<Typography >Edit Category </Typography>



<TextField
              id="edit-category-text"
              label="category"
              type="edit"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
              onChange={(category)=>{
                setEditingCategory(category.target.value);
              }}
            />

<Typography>Edit Item</Typography>


<TextField
              id="edit-item-text"
              label="item name"
              type="edit"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
              onChange={(itemname)=>{
                setEditingItemNum(itemname.target.value);
        }}
            />








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
export default EditCategory;