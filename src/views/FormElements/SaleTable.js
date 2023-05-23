import React, { useEffect } from "react";
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
import { useDispatch,useSelector } from "react-redux";
import { getSale } from "../../components/Landingpage/salesSlice";
import { Delete } from "@material-ui/icons";

// const products = [
//   {
//     id: "1",
//     // category:"wears",
//     name: "Sandals",
//     pname: "30kg",
//     price:"300",
    
//     customer:"Nana",
//     priority: "Low",
//     pbg: "primary.main",
//     actions:<div> <NavLink to={'/dashboard/editsale'}><FaPenAlt/></NavLink> <RiDeleteBin6Fill/> </div> ,
//   },
  
//   {
//     id: "2",
//     // category:"wears",
//     name: "Dresses",
//     pname: "30m",
//     price:"300",
    
//     customer:"Keke",
//     priority: "Low",
//     pbg: "primary.main",
//     actions: <div> <NavLink to={'/dashboard/editsale'}><FaPenAlt/></NavLink> <RiDeleteBin6Fill/> </div>,
//   },

//   {
//     id: "3",
//     // category:"drinks",
//     name: "Juices",
//     pname: "300L",
//     price:"300",
    
//     customer:"Carla",
//     priority: "High",
//     pbg: "primary.main",
//     actions: <div> <NavLink to={'/dashboard/editsale'}><FaPenAlt/></NavLink> <RiDeleteBin6Fill/> </div>,
//   },
// ];

const SaleTable = () => {
  const dispatch=useDispatch()
  const salesTable=useSelector((state)=>state.sales.salesTable);

  useEffect(()=>{
  console.log("on sales table");
dispatch(getSale());

},[]);

  return (
    <Table
      aria-label="simple table"
      sx={{
        mt: 3,
        whiteSpace: "nowrap",
      }}
    >
      <TableHead>
        <TableRow >
          <TableCell>
            <Typography fontWeight="600" >
              Id 
            </Typography>
          </TableCell>
          
          <TableCell>
            <Typography fontWeight="600">
              Item
            </Typography>
          </TableCell>
          <TableCell>
            <Typography fontWeight="600">
              Quantity
            </Typography>
          </TableCell>
          <TableCell>
            <Typography fontWeight="600">
              Sales price
            </Typography>
          </TableCell>
          
          <TableCell>
            <Typography fontWeight="600">
              Total Amount
            </Typography>
          </TableCell>

          <TableCell>
            <Typography fontWeight="600">
              Customer Name
            </Typography>
          </TableCell>
          {/* <TableCell>
            <Typography fontWeight="600">
              Status
            </Typography>
          </TableCell> */}
          <TableCell align="right">
            <Typography fontWeight="600">
              Actions
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {salesTable?.map((salesItem,index) => (
          <TableRow key={index}>
            <TableCell>
              <Typography>
                {/* {product.id} */}
                {index + 1}
              </Typography>
            </TableCell>
            
            <TableCell>
              
                
                  <Typography>
                    {salesItem?.items[0].item?.name}
                    
                  </Typography>
                
            </TableCell>
            <TableCell>
              <Typography >
                {/* {product.pname} */}
                {salesItem?.items[0].quantity?.box?.numberOfBoxes}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography >
                {salesItem?.items[0].salesPrice?.box?.price}
              </Typography>
            </TableCell>

            <TableCell>
              <Typography >
                {salesItem?.items[0].totalAmount}
              </Typography>
            </TableCell>
            
            <TableCell>
              <Typography >
                {salesItem?.customerName}
              </Typography>
            </TableCell>
            {/* <TableCell>
              <Chip
                sx={{
                  pl: "4px",
                  pr: "4px",
                  backgroundColor: salesItem?.pbg,
                  color: "#fff",
                }}
                size="small"
                label={salesItem?.priority}
              ></Chip>
            </TableCell> */}
            <TableCell align="right">
              <Typography >
                {/* {product.actions} */}
                <div>
                  <NavLink to={'/dashboard/editSale'}><FaPenAlt/></NavLink>
                  <Delete style={{cursor: 'pointer', marginLeft: '10px'}} color="danger"/>
                </div>
              </Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SaleTable;