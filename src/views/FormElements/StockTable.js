import React from "react";
import {FaPenAlt} from "react-icons/fa";
import {RiDeleteBin6Fill} from "react-icons/ri";
import { NavLink } from "react-router-dom";
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

const products = [
  {
    id: "1",
    category: "Fashion",
    item: "Pant",
    quantity: "30kg",
    unitprice: "100",
    unitbox:"qw",
    Actions: <div> <NavLink to={'/dashboard/editsale'}><FaPenAlt/></NavLink> <RiDeleteBin6Fill/> </div>,
  },

  {
    id: "2",
    category: "Food",
    item: "Spaghetti",
    quantity: "30kg",
    unitprice: "200",
    unitbox:"we",
    Actions: <div> <NavLink to={'/dashboard/editsale'}><FaPenAlt/></NavLink> <RiDeleteBin6Fill/> </div>,
  },
  
];

const StockTable = () => {
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
            <Typography fontWeight="600">
              Id
            </Typography>
          </TableCell>
          <TableCell>
            <Typography fontWeight="600">
              Category
            </Typography>
          </TableCell>
          <TableCell>
            <Typography fontWeight="600">
              Item name
            </Typography>
          </TableCell>
          <TableCell>
            <Typography fontWeight="600">
              Quantity
            </Typography>
          </TableCell>
          <TableCell>
            <Typography fontWeight="600">
              Unit per price
            </Typography>
          </TableCell>
          <TableCell align="right">
            <Typography fontWeight="600">
              Unit per box
            </Typography>
          </TableCell>

          <TableCell align="center" >
            <Typography fontWeight="600">
            Actions
              </Typography >
              
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.category}>
            <TableCell>
              <Typography
                
              >
                {product.id}
              </Typography>
            </TableCell>
            <TableCell>
              <Box
               
              >
                <Box>
                  <Typography
                   
                  >
                    {product.category}
                  </Typography>
                  
                </Box>
              </Box>
            </TableCell>
            <TableCell>
              <Typography >
                {product.item}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography >
                {product.quantity}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography >
                {product.unitprice}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography >
                {product.unitbox}
              </Typography>
            </TableCell>
            
            <TableCell>
              <Typography  >
                {product.Actions}
              </Typography>
            </TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StockTable;