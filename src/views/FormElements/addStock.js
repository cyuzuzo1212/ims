import {
  Box,
  Button,
  MenuItem,
  Typography,
  TextField,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createStocks,
  getStocks, getAllStocks,
} from "../../components/Landingpage/stockSlice";

export const AddStock = () => {
  const dispatch = useDispatch();
  // const [selectCategory,setSelectCategory]= useState("");
  const [selectItem, setSelectItem] = useState("");
  const [selectMesurement, setSelectMesurement] = useState("");
  const [addQuantity, setAddQuantity] = useState("");
  const [selectBoxQuantity, setSelectBoxQuantity] = useState("");
  const [addBoxNumber, setAddBoxNumber] = useState("");
  const [addBoxPieces, setAddBoxPieces] = useState("");
  const [measurementType, setMeasurementType] = useState("");
  const [addUnitPrice, setAddUnitPrice] = useState("");

  const [addBoxUnitPrice, setAddBoxUnitPrice] = useState("");
  const [addBoxSubItem, setAddBoxSubItem] = useState("");
  const [addBoxSubItemPrice, setAddBoxSubItemPrice] = useState("");
  const [addBoxSubPiecesPrice, setAddBoxSubPiecesPrice] = useState("");
  const [addBoxPrice, setAddBoxPrice] = useState("");

  const handlePost = (e) => {
    e.preventDefault();
    let data
    data = {
      item: selectItem,
      measurement: measurementType,
      quantity: addQuantity,
      box: selectBoxQuantity,
      numberOfBoxes: addBoxNumber,
      subItems: addBoxSubItem,
      pieces: addBoxPieces,
      unitPrice: addUnitPrice,
      box: addBoxUnitPrice,
      price: addBoxPrice,
      subItems: addBoxSubItemPrice,
      price: addBoxSubPiecesPrice,
    };
    dispatch(createStocks(data));
  };
  console.log(measurementType.measurementType);

  const getItems = () => {
    dispatch(getStocks());
  };

  const items = useSelector((state) => {
    console.log(state.stocks.items);
    return state.stocks.items;
  });

  const [stock, setStock] = useState([]);

  useEffect(() => {
    console.log("get stock");
    getItems();
    fetch("https://inventory-ciul.onrender.com/api/items", {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setStock(data.items);
        console.log(items);
      })

      .catch((err) => console.log(err));
  }, []);

 

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <div style={{ padding: "50px 100px 50px 100px" }}>
        <Typography for="my-input">Item</Typography>

        <TextField
          fullWidth
          id="item"
          variant="outlined"
          select
          label="Item"
          sx={{
            mb: 0,
          }}
          onChange={(item) => {
            setSelectItem(item.target.value);
          }}
        >
          {stock?.map((option) => (
            <MenuItem key={option.name} value={option._id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>

        <Typography for="my-input">Quantity</Typography>

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
            onChange={(measurement) => {
              setMeasurementType(measurement.target.value);
            }}
          >
            {[
              { name: "box", value: "box" },
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
              variant="outlined"
              fullWidth
              type="number"
              label=" Number of Boxes"
              sx={{
                mb: 2,
              }}
              onChange={(numberOfBoxes) => {
                setAddBoxNumber(numberOfBoxes.target.value);
              }}
            />
            <TextField
              id="my-input"
              aria-describedby="my-helper-text"
              variant="outlined"
              fullWidth
              type="number"
              label="Number of pieces"
              sx={{
                mb: 2,
              }}
              onChange={(pieces) => {
                setAddBoxPieces(pieces.target.value);
              }}
            />
          </div>
        )}

        {measurementType == "box" && (
          <div style={{ display: "flex" }}>
            <TextField
              id="my-input"
              aria-describedby="my-helper-text"
              variant="outlined"
              fullWidth
              type="number"
              label=" Price per Box"
              sx={{
                mb: 2,
              }}
              onChange={(price) => {
                setAddBoxUnitPrice(price.target.value);
              }}
            />
            <TextField
              id="my-input"
              aria-describedby="my-helper-text"
              variant="outlined"
              fullWidth
              type="number"
              label="Price per pieces"
              sx={{
                mb: 2,
              }}
              onChange={(subItems) => {
                setAddBoxSubPiecesPrice(subItems.target.value);
              }}
            />
          </div>
        )}

        <Typography for="my-input">Price Per Unit</Typography>
        <TextField
          id="my-input"
          aria-describedby="my-helper-text"
          fullWidth
          variant="outlined"
          label="Price per unit"
          type="number"
          sx={{
            mb: 2,
          }}
          onChange={(unitPrice) => {
            setAddUnitPrice(unitPrice.target.value);
          }}
        />

        <Button variant="contained" color="secondary" onClick={handlePost}>
          Save
        </Button>
      </div>
    </div>
  );
};
export default AddStock
