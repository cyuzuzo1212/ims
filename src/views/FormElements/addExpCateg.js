import { Select } from "@material-ui/core";
import {React} from "react"
import { TextField, MenuItem,Typography ,Box ,Button} from "@material-ui/core"
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { createExpCateg } from "../../components/Landingpage/expCategSlice";



export const AddExpCateg = () => {
  const [addExpCategory, setAddExpCategory] = useState("");


  const dispatch=useDispatch();
        const handlePost = (e) => {
                e.preventDefault();
                const data = {
                        categoryService:addExpCategory,
                }
                dispatch(createExpCateg(data));
        };

    return (
        <div className="add-item-container" style={{backgroundColor:"white",borderRadius:"10px",justifyContent:"center",paddingBottom:"20px"}}>
<div style={{padding:"20px 100px 0px 100px"}}>
    
    <Typography style={{color:"blue",fontSize:"25px",marginBottom:"50px"}}>Add Expense's Category</Typography>
    {/* <Typography>Date</Typography>
   
        <TextField
              id="title-text"
              label=""
              date
              type="date"
              variant="outlined"
              fullWidth
              sx={{
                mb: 1,
              }}
            /> */}

<Typography >Add Category of Expenses</Typography>
    
<TextField
              fullWidth
              id="standard-select-number"
              variant="outlined"
              type="category"
              label="Category of Expenses"
              sx={{
                mb: 2,
              }}
              onChange={(categoryService)=>{
                setAddExpCategory(categoryService.target.value);
              }}
            >
              
            </TextField>

<Button onClick={handlePost} style={{
            
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
        </Button>
        
        </div>       
</div>
        
    )
}
export default AddExpCateg;