import { Select } from "@material-ui/core";
import {React, useState,useEffect} from "react"
import { TextField, MenuItem,Typography ,Box, Button } from "@material-ui/core"
import {IoIosArrowDown} from "react-icons/io";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editExpCategory,getExpCateg} from "../../components/Landingpage/expCategSlice";




export const EditExpCateg =()=> {
    const params = useParams();
    const id = params.id;
    console.log(id,"edit expense id");
    const [editExpenseCategory,setEditExpenseCategory] = useState("");
    const expCategory = useSelector((state) => state.expCategories.expCategory);
  const dispatch = useDispatch();

  const handleEditPost = (e) => {
    e.preventDefault();
    dispatch(
      editExpCategory( id ,{
        categoryService: editExpenseCategory,
      })
    );
  };

  useEffect(() => {
    dispatch(getExpCateg(id));
  }, []);

  useEffect(()=>{
    if (expCategory.expCategories){
      setEditExpenseCategory(expCategory.expCategories.categoryService)
    }
  },[expCategory.expCategories])

  console.log(expCategory.expCategories, "category expense to edit");
    return (
        <div className="add-item-container" style={{backgroundColor:"white",borderRadius:"10px",justifyContent:"center",paddingBottom:"20px"}}>
<div style={{padding:"20px 100px 0px 100px"}}>
    
    <Typography style={{color:"blue",fontSize:"25px",marginBottom:"50px"}}>Edit Category Expenses</Typography>
    <Typography>Edit Category Name</Typography>
    
        <TextField
              id="category-text"
              label="Category Name"
              type="name"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}

              value={editExpenseCategory}
              onChange={(expCategory) => {
                setEditExpenseCategory(expCategory.target.value);
              }}
            />

<Box onClick={handleEditPost} style={{
            cursor:"pointer",
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
export default EditExpCateg;