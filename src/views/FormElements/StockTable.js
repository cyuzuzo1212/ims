import React from "react";
import { FaPenAlt } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
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
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllStocks } from "../../components/Landingpage/stockSlice";

// const products = [
//   {
//     id: "1",
//     category: "Fashion",
//     item: "Pant",
//     quantity: "30kg",
//     unitprice: "100",
//     unitbox:"qw",
//     Actions: <div> <NavLink to={'/dashboard/editsale'}><FaPenAlt/></NavLink> <RiDeleteBin6Fill/> </div>,
//   },

//   {
//     id: "2",
//     category: "Food",
//     item: "Spaghetti",
//     quantity: "30kg",
//     unitprice: "200",
//     unitbox:"we",
//     Actions: <div> <NavLink to={'/dashboard/editsale'}><FaPenAlt/></NavLink> <RiDeleteBin6Fill/> </div>,
//   },

// ];

const StockTable = () => {
  const dispatch = useDispatch();
  const { stocksTable} = useSelector((state) => state.stocks);

  useEffect(() => {
    console.log("on stock table");
    dispatch(getAllStocks());
    // console.log(stocks)
  }, []);
  console.log(stocksTable, "++++++++++++++++++");

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
            <Typography fontWeight="600">Id</Typography>
          </TableCell>
          {/* <TableCell>
            <Typography fontWeight="600">
              Category
            </Typography>
          </TableCell> */}
          <TableCell>
            <Typography fontWeight="600">Name of Item</Typography>
          </TableCell>
          <TableCell>
            <Typography fontWeight="600">Quantity</Typography>
          </TableCell>
          <TableCell>
            <Typography fontWeight="600">Box items</Typography>
          </TableCell>
          <TableCell align="right">
            <Typography fontWeight="600">Unit per box</Typography>
          </TableCell>

          <TableCell align="center">
            <Typography fontWeight="600">Actions</Typography>
          </TableCell>

          <TableCell align="center" >
            <Typography fontWeight="600">
            Actions
              </Typography >
              
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {stocksTable?.map((stockItem, index) => (
          <TableRow key={index}>
            <TableCell>
              <Typography>{index + 1}</Typography>
            </TableCell>
            {/* <TableCell>
              <Box>
                <Box>
                  <Typography>
                    {product.category}
                  </Typography>
                  
                </Box>
              </Box>
            </TableCell> */}
            <TableCell>
              <Typography>{stockItem?.item?.name}</Typography>
            </TableCell>
            <TableCell>
              <Typography>{stockItem?.quantity?.box?.numberOfBoxes}</Typography>
            </TableCell>
            <TableCell>
              <Typography>{stockItem?.quantity?.box?.subItems?.pieces}</Typography>
            </TableCell>
            <TableCell>
              <Typography>{stockItem?.unitPrice?.box?.price}</Typography>
            </TableCell>

            <TableCell>
              <Typography>
                {/* {product.Actions} */}
                <div>
                  {" "}
                  <NavLink to={"/dashboard/editStock"}>
                    <FaPenAlt />
                  </NavLink>{" "}
                  <RiDeleteBin6Fill />{" "}
                </div>
              </Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StockTable;
