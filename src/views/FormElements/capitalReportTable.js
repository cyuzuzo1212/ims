import React, { useEffect, useState } from "react";
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
 


const reportItem = [

  {
    id: "1",
    item: "Sandals",
    quantity: "30kg",
    unitPrice:"300",
    totalAmount:"3000",
    
  },
  
  {
    id: "2",
    item: "Dresses",
    quantity: "30m",
    unitPrice:"300",
    totalAmount:"2000",
    
  },

];

export const CapitalReportTable = () =>{
    const [reportItem,setReportItem] = useState([]);
    
    return(

        <Table
      aria-label="simple table"
      sx={{
        mt: 3,
        whiteSpace: "nowrap",
      }}
    >
      <TableHead>
        <TableRow style={{backgroundColor:"blue"}}>
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
        {reportItem.map((reportItem,index) => (
          <TableRow key={index}>
            <TableCell>
              <Typography>
                {/* {product.id} */}
                {index + 1}
              </Typography>
            </TableCell>
            
            <TableCell>
              <Box >
                <Box>
                  <Typography>
                    {reportItem.item}
                    
                  </Typography>
                  
                </Box>
              </Box>
            </TableCell>
            <TableCell>
              <Typography >
                {/* {product.pname} */}
                {reportItem.quantity}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography >
                {reportItem.unitPrice}
              </Typography>
            </TableCell>

            <TableCell>
              <Typography >
                {reportItem.totalAmount}
              </Typography>
            </TableCell>
            
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
    )
};
export default CapitalReportTable;
