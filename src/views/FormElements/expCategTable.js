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
import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getExpCategory ,editExpCategory, deleteCategory} from "../../components/Landingpage/expCategSlice";
import { Delete } from "@material-ui/icons";


// const products = [
//   {
//     id: "1",
//     date: "2023",
//     category: "category name",
//     action: <div><NavLink to={'/dashboard/editExpenses'}><FaPenAlt/> </NavLink><RiDeleteBin6Fill/> </div>,
//   },
//   {
//     id: "1",
//     date: "2023",
//     category: "category name",
//     action: <div> <NavLink to={'/dashboard/editExpenses'}><FaPenAlt/> </NavLink><RiDeleteBin6Fill/> </div>,
//   },
//   {
//     id: "1",
//     date: "2023",
//     category: "category name",
//     action: <div><NavLink to={'/dashboard/editExpenses'}> <FaPenAlt/></NavLink> <RiDeleteBin6Fill/> </div>,
//   },
  
// ];

const ExpCategTable = () => {
  const dispatch = useDispatch()
  const expCategories = useSelector((state)=>state.expCategories.expCategories)
  const {role} = useSelector(state => state.auth.userData);
  

  useEffect(()=>{
    dispatch(getExpCategory())
  },[])

  const handleDelete = (id) => {
    dispatch(deleteCategory(id))
  }

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
          {/* <TableCell>
            <Typography style={{color:"black",fontWeight:"600"}}>
              Date
            </Typography>
          </TableCell> */}
          <TableCell>
            <Typography style={{color:"black",fontWeight:"600"}}>
              Category Expense Name
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
        {expCategories?.map((expenseCategory,index) => (
          <TableRow key={index}>
            <TableCell>
              <Typography style={{color:"black",fontWeight:"400"}}>
                {index + 1}
              </Typography>



            </TableCell>
            {/* <TableCell>
              

                
                <Box >
                  <Typography style={{display: "flex",justifyContent: "center",color:"black",fontWeight:"400"}}>
                    {expenseCategory.date}
                  </Typography>
                
              </Box>
            </TableCell> */}

 

            <TableCell>
              <Typography style={{color:"black",fontWeight:"400"}}>
                {expenseCategory?.categoryService}
              </Typography>
            </TableCell>

            <TableCell align="right">
              <Typography style={{color:"black",fontWeight:"600",marginRight:"10px"}}>
                {/* {expenseCategory.action} */}
                <div><NavLink to={`/dashboard/dashboard/editExpCateg/${expenseCategory._id}`}> <FaPenAlt/></NavLink>
                { role === "admin" && <Delete style={{cursor: 'pointer', marginLeft: '10px'}} color="danger" onClick={() => handleDelete(expenseCategory._id)} /> }
                 </div>
                </Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ExpCategTable;
