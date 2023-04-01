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
const [purchase,setPurchase] = useState([]);
    
  useEffect(() => {
    
    axios.get('https://inventory-ciul.onrender.com/api/sales/daily')
    
      .then(response => {
        setPurchase(response.data);
        console.log(response.data,"jjjjjjjjjjjj");
        
      })
      .catch(error => {
        console.error(error);
    
      });
    
  }, []);
  
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
        {purchase.map((reportItem,index) => (
          <TableRow key={index}>
            <TableCell>
              <Typography>
                
                {index + 1}
              </Typography>
            </TableCell>
            
            <TableCell>               
              <Box >
                <Box>
                  <Typography>
                    {reportItem.date}
                    
                  </Typography>
                  
                </Box>
              </Box>
            </TableCell>
            <TableCell>
              <Typography >
                {/* {product.pname} */}
                {reportItem.sales}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography >
                {reportItem.numberOfSales}
              </Typography>
            </TableCell>

            <TableCell>
              <Typography >
                {reportItem.totalSales}
              </Typography>
            </TableCell>
            
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
    )
};
export default SalesReportTable;