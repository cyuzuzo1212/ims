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


const products = [
  {
    id: "1",
    itemname: "Soap",
    // post: "Web Designer",
    // action:"edit",
    quantity: "20 boxes",
    category: "cleaning",
    pbg: "primary.main",
    action: <div><NavLink to={'/dashboard/editItem'}><FaPenAlt/> </NavLink><RiDeleteBin6Fill/> </div>,
  },
  {
    id: "2",
    itemname: "fanta",
    // post: "Project Manager",
    //  action:"edit",
    quantity: "30 casses",
    category: "drinking",
    pbg: "secondary.main",
    action: <div> <NavLink to={'/dashboard/editItem'}><FaPenAlt/> </NavLink><RiDeleteBin6Fill/> </div>,
  },
  {
    id: "3",
    itemname: "potatoes",
    // post: "Project Manager",
    //  action:"edit",
    quantity: "5 packages",
    category: "foods",
    pbg: "error.main",
    action: <div><NavLink to={'/dashboard/editItem'}> <FaPenAlt/></NavLink> <RiDeleteBin6Fill/> </div>,
  },
  {
    id: "4",
    itemname: "cotes",
    // post: "Frontend Engineer",
    //  action:"edit",
    quantity: "7 packages",
    category: "clothes",
    pbg: "success.main",
    action: <div> <NavLink to={'/dashboard/editItem'}><FaPenAlt/> </NavLink><RiDeleteBin6Fill/> </div>,
  },
];

const ItemTable = () => {
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
              Item Name
            </Typography>
          </TableCell>
          <TableCell>
            <Typography style={{color:"black",fontWeight:"600"}}>
              Quantity
            </Typography>
          </TableCell>

          {/* <TableCell>
            <Typography color="textSecondary" variant="h6">
              action
            </Typography>
          </TableCell> */}

          <TableCell>
            <Typography style={{color:"black",fontWeight:"600"}}>
              Category
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
        {products.map((product) => (
          <TableRow key={product.itemname}>
            <TableCell>
              <Typography style={{color:"black",fontWeight:"400"}}>
                {product.id}
              </Typography>



            </TableCell>
            <TableCell>
              <Box sx={{display: "flex",alignItems: "center",}}>

                
                <Box>
                  <Typography style={{color:"black",fontWeight:"400"}}>
                    {product.itemname}
                  </Typography>

                 

                  {/* <Typography
                    color="textSecondary"
                    sx={{
                      fontSize: "13px",
                    }}
                  >
                    {product.post}
                  </Typography> */}
                </Box>
              </Box>
            </TableCell>

 

            <TableCell>
              <Typography style={{color:"black",fontWeight:"400"}}>
                {product.quantity}
              </Typography>
            </TableCell>

             <TableCell>
              <Typography style={{color:"black",fontWeight:"400"}}>
                {product.category}
              </Typography>
            </TableCell>

            {/* <TableCell>
              <Typography color="textSecondary" variant="h6">
                {product.action}
              </Typography>
            </TableCell> */}

            {/* <TableCell>
              <Chip
                sx={{
                  pl: "4px",
                  pr: "4px",
                  backgroundColor: product.pbg,
                  color: "#fff",
                }}
                size="small"
                label={product.priority}
              ></Chip>
            </TableCell> */}
            <TableCell align="right">
              <Typography style={{color:"black",fontWeight:"600",marginRight:"10px"}}>{product.action}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ItemTable;
