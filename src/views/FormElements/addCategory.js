import React from "react";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { createCateg } from "../../components/Landingpage/categoryslice";




export const AddCategory =()=>{
        const [addingCategory,setAddingCategory]= useState("");
        const [addingItemNum,setAddingItemNum]= useState("");


        const dispatch=useDispatch();
        const handlePost = (e) => {
                e.preventDefault();
                const data = {
                        name:addingCategory,
                        numberOfItems:  addingItemNum
                }
                dispatch(createCateg(data));
        };

       
        

    return (
 <div className="add-category-container" style={{display:"flex",backgroundColor:"white",paddingBottom:"50px",borderRadius:"10px",justifyContent:"center"}}>
    
<div className="add-category-form" style={{marginTop:"30px",paddingLeft:"50px"}}>
<p style={{color:"blue",fontSize:"20px",marginBottom:"80px"}}>Add Category</p>
<p >Add Category </p>
<input  style={{padding:"8px 380px 8px 0px",borderRadius:"8px"}}
        type="text"
        placeholder="Name of Category"
        name="Category"
        required
        onChange={(category)=>{
                setAddingCategory(category.target.value);
        }}
        />

<p>Add Item</p>
<input  style={{padding:"8px 380px 8px 0px",borderRadius:"8px"}}
        type="text"
        placeholder="Name of Item"
        name="Item"
        required
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

<button onClick={handlePost} style={{
    display:"flex",
    marginTop:"30px",
    paddingRight:"80px",
    paddingLeft:"80px",
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
        </button>

</div>
 </div>
    )
}
export default AddCategory;