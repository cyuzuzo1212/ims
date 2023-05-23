import React from "react";
import { useState,useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { Delete as deleteCategory, EditCategory, getCategory } from "../../components/Landingpage/categoryslice";
import { Delete } from "@material-ui/icons";



export const CategoryTable = () => {
  const dispatch = useDispatch()
  const categories = useSelector((state)=>state.categories.categories)
  const {role} = useSelector(state => state.auth.userData);

  useEffect(()=>{
    console.log("On Category Table")
    dispatch(getCategory())
  },[])

console.log(categories);

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
          <TableCell>
            <Typography style={{color:"black",fontWeight:"600"}}>
              Category Name
            </Typography>
          </TableCell>
          <TableCell>
            <Typography style={{color:"black",fontWeight:"600"}}>
              Category Number
            </Typography>
          </TableCell>
          <TableCell>
            <Typography style={{color:"black",fontWeight:"600"}}>
              Actions
            </Typography>
          </TableCell>
         
        </TableRow>
      </TableHead>
      <TableBody>
      {categories?.map((item, index) => {
        console.log("Here")
        return (
          <TableRow key={index}>
            <TableCell>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {index + 1}
              </Typography>
            </TableCell>
            <TableCell>
              <Box>
                
                  <Typography
                    
                    sx={{
                      fontWeight: "500",
                    }}
                  >
                    {item.name}
                  </Typography>
                  
                
              </Box>
            </TableCell>
            <TableCell>
              <Typography style={{fontSize:"15px"}}>
              {item.numberOfItems}
              </Typography>
            </TableCell>

            <TableCell>
              <Typography style={{fontSize:"15px",marginLeft:"10px"}}>
              <div style={{padding:"0"}}> <NavLink to={`/dashboard/dashboard/editCategory/${item._id}`}><FaPenAlt/></NavLink>
                { role === "admin" && <Delete style={{cursor: 'pointer', marginLeft: '10px'}} color="danger" onClick={() => handleDelete(item._id)} /> }
              </div>
              </Typography>
            </TableCell>
            
          </TableRow>
        )})}
      </TableBody>
    </Table>
  );
};

export default CategoryTable;
