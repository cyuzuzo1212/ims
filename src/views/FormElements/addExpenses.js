import { Select } from "@material-ui/core";
import { React } from "react";
import axios from "axios";
import {
  TextField,
  MenuItem,
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import Category from "./categories";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createExpenses,
  getCategexp,
} from "../../components/Landingpage/expensesSlice";

export const AddExpenses = () => {
  const [addTitle, setAddTitle] = useState("");
  const [addDescription, setAddDescription] = useState("");
  const [addAmount, setAddAmount] = useState("");
  const [selectCategory,setSelectCategory] = useState("");
  const [expense, setExpense] = useState([]);
  // const [catId, setCatId]=useState('')
 


  const dispatch = useDispatch();
  

  // const getExpenses = () => {
  //   dispatch(getCategexp());
  // };

  const expenses = useSelector((state) => {
    console.log(state.expCategories.expenses);
    // return state.expCategories.expenses;
  });

  useEffect(() => {
    console.log("get expense category from category");
    // getExpenses();
    
    axios({
      method: "GET",
      url: "https://inventory-ciul.onrender.com/api/expensesCat/all",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((data) => {
        console.log(data,"yyyyyyy");
        setExpense(data.data.categories);
        console.log(data.data.categories);
        
      })
      .catch((err) => console.log(err));
  }, []);
  const handlePost = (e) => {
    e.preventDefault();
    const data = {
      title: addTitle,
      description: addDescription,
      amount: addAmount,
      categoryService:selectCategory,
    };
    console.log(selectCategory,"+++++++++++++");
    dispatch(createExpenses(selectCategory,data));
  };

  return (
    <div
      className="add-item-container"
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        justifyContent: "center",
        paddingBottom: "20px",
      }}
    >
      <div style={{ padding: "20px 100px 0px 100px" }}>
        <Typography
          style={{ color: "blue", fontSize: "25px", marginBottom: "50px" }}
        >
          Add Expenses
        </Typography>
        <Typography>Title</Typography>

        <TextField
          id="title-text"
          label="Title"
          type="Title"
          variant="outlined"
          fullWidth
          sx={{
            mb: 1,
          }}
          onChange={(title)=>{
            setAddTitle(title.target.value);
          }}
        />

        <Typography>Description</Typography>

        <TextField
          fullWidth
          id="standard-select-number"
          variant="outlined"
          type="description"
          label="Description"
          sx={{
            mb: 1,
          }}
          onChange={(description)=>{
            setAddDescription(description.target.value);
          }}
        >
          {/* {[{name: "Food", value: "food"}, {name: "Drinks", value: "drinks"}].map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.name}
                </MenuItem>
              ))} */}
        </TextField>

        <Typography>Select Category</Typography>

        <TextField
          fullWidth
          select
          id="standard-select-category"
          variant="outlined"
          label="Select"
          
          sx={{
            mb: 1,
          }}
          onChange={(categoryService)=>{
            setSelectCategory(categoryService.target.value);

           
          }}
         
        >
           
{expense?.map((option,index) => (
            <MenuItem key={index} value={option?._id}>
              {console.log(option)}
              {option?.categoryService}
            </MenuItem>
          ))}

        </TextField>
        <Typography>Amount</Typography>

        <TextField
          id="add-number"
          label="Amount"
          type="add"
          variant="outlined"
          fullWidth
          sx={{
            mb: 2,
          }}
          onChange={(amount)=>{
            setAddAmount(amount.target.value);
          }}
        />

        <Button onClick={handlePost}
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px 0px 10px 0px",
            textAlign: "center",
            border: "none",
            borderRadius: "5px",
          }}
          type="save"
          className="save-data"
        >
          {" "}Save{" "}
        </Button>
      </div>
    </div>
  );
};
export default AddExpenses;
