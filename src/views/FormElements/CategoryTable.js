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
import { Delete, EditCategory, getCategory } from "../../components/Landingpage/categoryslice";

export const CategoryTable = () => {
  const dispatch = useDispatch()
  const categories = useSelector((state)=>state.categories.categories)

  useEffect(()=>{
    console.log("On Category Table")
    dispatch(getCategory())
  },[])

console.log(categories.categories)

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
              Item Number
            </Typography>
          </TableCell>
          <TableCell>
            <Typography style={{color:"black",fontWeight:"600"}}>
              Actions
            </Typography>
          </TableCell>
          {/* <TableCell align="right">
            <Typography color="textSecondary" variant="h6">
              Budget
            </Typography>
          </TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {categories?.categories?.map((item, index) => (
          <TableRow key={item.category}>
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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    
                    sx={{
                      fontWeight: "500",
                    }}
                  >
                    {item.name}
                  </Typography>
                  {/* <Typography color="textSecondary" sx={{
                      fontSize: "15px",
                    }}
                  >
                    {item.post}
                  </Typography> */}
                </Box>
              </Box>
            </TableCell>
            <TableCell>
              <Typography style={{fontSize:"15px"}}>
                {item.numberOfItems}
              </Typography>
            </TableCell>

            <TableCell>
              <Typography style={{fontSize:"15px",marginLeft:"10px"}}>
              <div style={{padding:"0"}}> <NavLink to={`/dashboard/editCategory/${item._id}`}><FaPenAlt/></NavLink> <RiDeleteBin6Fill onClick={Delete}/> </div>
              </Typography>
            </TableCell>
            {/* <TableCell>
              <Chip
                sx={{
                  pl: "15px",
                  pr: "20px",
                  padding:"20px",
                  backgroundColor: "grey",
                  // color: "black",
                  
                }}
                size="large"
                label={item.priority}
              ></Chip>
            </TableCell> */}
            {/* <TableCell align="right">
              <Typography variant="h6">${item.budget}k</Typography>
            </TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CategoryTable;
