import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@material-ui/core";
import {AiFillEye} from "react-icons/ai";
import {FaPenAlt} from "react-icons/fa";
import {RiDeleteBin6Fill} from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { getExpenses } from "../../components/Landingpage/expensesSlice";


// const products = [
//   {
//     id: "1",
//     title: "title",
//     description: "descr",
//     amount: "frw",
//     category:"rent",
//     pbg: "primary.main",
//     action: <div><NavLink to={'/dashboard/editExpenses'}><FaPenAlt/> </NavLink><RiDeleteBin6Fill/> </div>,
//   },
//   {
//     id: "2",
//     title: "title",
//     description: "descr",
//     amount: "frw",
//     category:"rent",
//     pbg: "secondary.main",
//     action: <div> <NavLink to={'/dashboard/editExpenses'}><FaPenAlt/> </NavLink><RiDeleteBin6Fill/> </div>,
//   },
//   {
//     id: "3",
//     title: "title",
//     description: "descr",
//     amount: "frw",
//     category:"rent",
//     pbg: "error.main",
//     action: <div><NavLink to={'/dashboard/editExpenses'}> <FaPenAlt/></NavLink> <RiDeleteBin6Fill/> </div>,
//   },
  
// ];

export const ExpensesTable = () => {
  const dispatch=useDispatch()
  const expenseTable =useSelector((state)=>state.expenses.expenseTable);

  useEffect(()=>{
    console.log("on expenses table");
  dispatch(getExpenses());
  
  },[]);
  console.log(expenseTable,"expenseeeeeeeeee"); 
  // const totalExpenses = expenseTable.reduce((sum, expenseTable) => sum + expenseTable.amount, 0);
  return (
    <Table
      aria-label="simple table"
      sx={{
        mt: 3,
        whiteSpace: "nowrap",
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography style={{color:"black",fontWeight:"600"}}>
              No
            </Typography>
          </TableCell>
          <TableCell>
            <Typography style={{color:"black",fontWeight:"600"}}>
              Title
            </Typography>
          </TableCell>
          <TableCell>
            <Typography style={{color:"black",fontWeight:"600"}}>
              Description
            </Typography>
          </TableCell>

          <TableCell>
            <Typography style={{color:"black",fontWeight:"600"}}>
              Category of Expense
            </Typography>
          </TableCell>

          <TableCell>
            <Typography style={{color:"black",fontWeight:"600"}}>
              Amount
            </Typography>
          </TableCell>
          <TableCell align="right">
            <Typography style={{color:"black",fontWeight:"600"}}>
              Actions
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {expenseTable?.map((expenseCateg,index) => (
          <TableRow key={index}>
            <TableCell>
              <Typography style={{color:"black",fontWeight:"400"}}>
                {index + 1}
              </Typography>

            </TableCell>
            <TableCell>
               
                <Box >
                  <Typography style={{display: "flex",justifyContent: "center",color:"black",fontWeight:"400"}}>
                    {expenseCateg?.title}
                  </Typography>
                
              </Box>
            </TableCell>

 

            <TableCell>
              <Typography style={{color:"black",fontWeight:"400"}}>
                {expenseCateg?.description}
              </Typography>
            </TableCell>

            <TableCell>
              <Typography style={{color:"black",fontWeight:"400"}}>
                {expenseCateg?.category?.categoryService}
              </Typography>
            </TableCell>

             <TableCell>
              <Typography style={{color:"black",fontWeight:"400"}}>
                {expenseCateg?.amount}
              </Typography>
            </TableCell>

            

           
            <TableCell align="right">
              <Typography style={{color:"black",fontWeight:"600",marginRight:"10px"}}>
                {/* {product.action} */}
                <div><NavLink to={'/dashboard/editExpenses'}> <FaPenAlt/></NavLink> <RiDeleteBin6Fill/> </div>
                </Typography>
            </TableCell>
          </TableRow>
        ))}

{/* <TableRow>
        <TableCell  colSpan={3}></TableCell>
        <TableCell>
          <Typography align="center" style={{fontWeight: 600}}>
          Total: 
          </Typography>
        </TableCell>
        <TableCell>
          <Typography style={{fontWeight: 600}}>
            {totalExpenses}
          </Typography>
          </TableCell>
      </TableRow> */}
      </TableBody>
    </Table>
  );
};

export default ExpensesTable;
