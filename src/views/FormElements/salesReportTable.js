import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { FaPenAlt } from "react-icons/fa";
import { RiDeleteBin6Fill} from "react-icons/ri";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getDailySales } from "../../components/Landingpage/salesSlice";
 


// const reportItem = [

//   {
//     id: "1",
//     item: "Sandals",
//     quantity: "30kg",
//     unitPrice:"300",
//     totalAmount:"3000",
    
//   },
  
//   {
//     id: "2",
//     item: "Dresses",
//     quantity: "30m",
//     unitPrice:"300",
//     totalAmount:"2000",
    
//   },

// ];

export const SalesReportTable = () =>{
  const dispatch = useDispatch();
  const purchase = useSelector((state) => state.sales.dailySales);
  
  useEffect(() => {
    dispatch(getDailySales());
  }, []);
  
  const totalDailySales = purchase.reduce((sum, dailySale) => sum + dailySale.totalAmount, 0);

  return(
      <Table
        aria-label="simple table"
        sx={{
          mt: 3,
          whiteSpace: "nowrap",
        }}
      >
      <TableHead>
        <TableRow style={{backgroundColor:"red"}}>
          <TableCell>
            <Typography color="white" fontWeight="600">
              Id
            </Typography>
          </TableCell>
          
          <TableCell>
            <Typography color="white" fontWeight="600">
              items
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="white" fontWeight="600">
              quantity
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="white" fontWeight="600">
              Unit price
            </Typography>
          </TableCell>
          
          <TableCell>
            <Typography color="white" fontWeight="600">
              Total Amount
            </Typography>
          </TableCell>

         
        </TableRow>
      </TableHead>
      <TableBody>
        {purchase.map(({item, quantity, salesPrice, totalAmount}, index) => (
          <TableRow key={index}>
            <TableCell>
              <Typography>
                
                {index + 1}
              </Typography>
            </TableCell>
            
            <TableCell>               
              <Box>
                <Typography>
                  {item}
                </Typography>
              </Box>
            </TableCell>
            <TableCell>
              <Typography >
               {/* Quantity */}
                {
                  quantity.box.numberOfBoxes > 0 ? quantity.box.numberOfBoxes :
                  quantity.kg > 0 ? quantity.kg :
                  quantity.liters > 0 ? quantity.liters : "0"
                }
              </Typography>
            </TableCell>
            <TableCell>
              <Typography >
                {/* Unit Price */}
                {
                  salesPrice.box.price ? salesPrice.box.price :
                  salesPrice.kg ? salesPrice.kg :
                  salesPrice.liters ? salesPrice.liters : "0"
                }
              </Typography>
            </TableCell>

            <TableCell>
              <Typography >
                {/* Total */}
                {totalAmount}
              </Typography>
            </TableCell>
            
            
          </TableRow>
        ))}
      <TableRow>
        <TableCell  colSpan={3}></TableCell>
        <TableCell>
          <Typography align="center" style={{fontWeight: 600}}>
          Total: 
          </Typography>
        </TableCell>
        <TableCell>
          <Typography style={{fontWeight: 600}}>
            {totalDailySales}
          </Typography>
          </TableCell>
      </TableRow>
      </TableBody>
    </Table>
    )
};
export default SalesReportTable;