import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
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
import { getPurchase, stock } from "../../components/Landingpage/stockSlice";
 


// const stocksWithAmounts = [

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

export const PurchaseReportTable = () =>{
  const dispatch = useDispatch();
  const stocksWithAmounts = useSelector((state) => state.stocks.stocksWithAmounts);
  

  useEffect(() => {
    dispatch(getPurchase());
  },[])
 

  const grandTotal = stocksWithAmounts.reduce((sum, stock) => sum + stock.totalAmount, 0);
  
    return(
      <Table
        aria-label="simple table"
        sx={{
          mt: 3,
          whiteSpace: "nowrap",
        }}
      >
      <TableHead>
        <TableRow style={{backgroundColor:"#1565C0"}}>
          <TableCell>
            <Typography color="white" fontWeight="600">
              Id
            </Typography>
          </TableCell>
          
          <TableCell>
            <Typography color="white" fontWeight="600">
              Item
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="white" fontWeight="600">
              Quantity
            </Typography>
          </TableCell>
          <TableCell>
            <Typography color="white" fontWeight="600">
              Unit per price
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
        {stocksWithAmounts.map(({stock,item, totalAmount}, index) => (
          
          <TableRow key={index}>
            <TableCell>
              <Typography>
                {/* {product.id} */}
                {index + 1}
              </Typography>
            </TableCell>
            
            <TableCell>
              <Typography>
                {stock?.item?.name}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography >
                {/* {product.pname} */}
                {
                  stock.measurement === 'box' ? stock.quantity.box.numberOfBoxes :
                  stock.measurement === 'kg' ? stock.quantity.kg : '-'
                }
              </Typography>
            </TableCell>
            <TableCell>
              <Typography >
                {
                  stock.measurement === 'box' ? stock.unitPrice.box.price :
                  stock.measurement === 'kg' ? stock.unitPrice.kg : '-'
                }
              </Typography>
            </TableCell>

            <TableCell>
              <Typography >
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
            {grandTotal}
          </Typography>
          </TableCell>
      </TableRow>
      </TableBody>
    </Table>
    )
};
export default PurchaseReportTable;
