import { MenuItem, Button, Typography, TextField } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createSales,
  getStockItem,
  redirectAction,
} from "../../components/Landingpage/salesSlice";
import { useNavigate } from "react-router-dom";

export const AddSale = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [addQuantity, setAddQuantity] = useState("");
  const [addSalesPrice, setAddSalesPrice] = useState("");
  const [addCustomerName, setAddCustomerName] = useState("");
  const [selectBox, setSelectBox] = useState("");
  const [addBoxNumber, setAddBoxNumber] = useState("");
  const [addSubItemQuant, setAddSubItemQuant] = useState("");
  const [addPiece, setAddPiece] = useState("");
  const [selectBoxPrice, setSelectBoxPrice] = useState("");
  const [addBoxPrice, setAddBoxPrice] = useState("");
  const [addSubItem, setAddSubItem] = useState("");
  const [addSubItemPrice, setAddSubItemPrice] = useState("");
  const [measurementType, setMeasurementType] = useState("");
  const [totalAmount, setTotalAmount] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { changeSaved, stocksTable: stock } = useSelector(state => state.sales);

  const handlePost = (e) => {
    e.preventDefault();
    const data = {
      itemId: selectedItem,
      quantity: addQuantity,
      salesPrice: addSalesPrice,
      customerName: addCustomerName,
      box: selectBox,
      numberOfBoxes: addBoxNumber,
      subItems: addSubItemQuant,
      pieces: addPiece,
      box: selectBoxPrice,
      price: addBoxPrice,
      subItems: addSubItem,
      price: addSubItemPrice,
      totalAmount:totalAmount,
    };
    dispatch(createSales(data));
  };

  useEffect(() => {
    if(changeSaved) {
      dispatch(redirectAction(false));
      navigate('/dashboard/dashboard/form-elements/sale')
    }
  }, [changeSaved])

  const getSales = () => {
    dispatch(getStockItem());
  };
  
  const items = useSelector((state) => {
    return state.stocks.items;
  });

  useEffect(() => {
    getSales();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        marginBottom: "10px",
      }}
    >
      <div style={{ padding: "20px 20px 20px 20px" }}>
        <Typography>Select item's name</Typography>

        <TextField
          fullWidth
          id="standard-select-item"
          variant="outlined"
          select
          label="Select"
          sx={{
            mb: 2,
          }}
          onChange={(itemId) => {
            setSelectedItem(itemId.target.value);
          }}
        >
          {stock?.map((option, index) =>
            (option.item && option.item.name) &&
            <MenuItem key={index} value={option.item._id}>
              {option.item.name}
            </MenuItem>
          )}
        </TextField>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            id="my-input"
            type="quantity"
            aria-describedby="my-helper-text"
            fullWidth
            variant="outlined"
            label="Quantity"
            sx={{
              mb: 2,
            }}
            onChange={(quantity) => {
              setAddQuantity(quantity.target.value);
            }}
          />

          <TextField
            fullWidth
            id="standard-select-item"
            variant="outlined"
            select
            label="Select"
            sx={{
              mb: 2,
            }}
            onChange={(itemId) => {
              setMeasurementType(itemId.target.value);
            }}
          >
            {[
              { name: "Box", value: "box" },
              { name: "Piece", value: "piece" },
              { name: "1 Kg", value: "kilogram" },
              { name: "1 Liter", value: "liter" },
            ].map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                style={{ flexDirection: "column" }}
              >
                {option.name}
              </MenuItem>
            ))}
          </TextField>

          
        </div>

        {measurementType == "box" && (
          <div style={{ display: "flex" }}>
        <TextField 
        id="my-input" 
        aria-describedby="my-helper-text" 
        fullWidth 
        type="numbers"
            variant="outlined"  
            label="Number of Boxes"
            sx={{
              mb: 2,}} 
              onChange={(numberOfBoxes)=>{
                setAddBoxNumber(numberOfBoxes.target.value);
              }}
              />
              </div>
        )}
        {/* <Typography>Sales Price</Typography> */}

        {/* <Typography>Amount</Typography> */}

        {/* <Typography>Status</Typography> */}
        {/* <TextField id="my-input" aria-describedby="my-helper-text" variant="outlined" fullWidth   label="Status"
            sx={{
              mb: 2,
              }}
              
              /> */}

        {/* <Typography>Customer name</Typography> */}
        {measurementType == "box" && (
          <div style={{ display: "flex" }}>
            <TextField
              id="my-input"
              type="number"
              aria-describedby="my-helper-text"
              variant="outlined"
              fullWidth
              label=" Number of Pieces"
              sx={{
                mb: 2,
              }}
              onChange={(pieces) => {
                setAddPiece(pieces.target.value);
              }}
            />
            <TextField
              id="my-input"
              type="price"
              aria-describedby="my-helper-text"
              variant="outlined"
              fullWidth
              label="Price per piece"
              sx={{
                mb: 2,
              }}
              onChange={(subItems) => {
                setAddSubItemPrice(subItems.target.value);
              }}
            />
          </div>
        )}

        <TextField
          id="my-input"
          type="price"
          aria-describedby="my-helper-text"
          variant="outlined"
          fullWidth
          label="Sales Price"
          sx={{
            mb: 2,
          }}
          onChange={(salesPrice) => {
            setAddSalesPrice(salesPrice.target.value);
          }}
        />

        <div style={{ display: "flex" }}>
          {/* <TextField id="my-input" aria-describedby="my-helper-text" variant="outlined"  fullWidth   label="Sales price per box"
            sx={{
              mb: 2,}}
              onChange={(box)=>{
                setSelectBoxPrice(box.target.value);
              }}
              /> */}

          {/* <TextField id="my-input" aria-describedby="my-helper-text" variant="outlined"  fullWidth   label="Sales price per price"
            sx={{
              mb: 2,}}
              onChange={(price)=>{
                setAddBoxPrice(price.target.value);
              }}
              /> */}
        </div>
        <div style={{ display: "flex" }}>
          <TextField
          type="name"
            id="my-input"
            aria-describedby="my-helper-text"
            variant="outlined"
            fullWidth
            label="Name of customer"
            sx={{
              mb: 2,
            }}
            onChange={(customerName) => {
              setAddCustomerName(customerName.target.value);
            }}
          />
        </div>
        <Button onClick={handlePost} variant="contained" color="secondary">
          Save
        </Button>
      </div>
    </div>
  );
};
export default AddSale;
