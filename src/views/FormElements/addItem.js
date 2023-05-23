import { React, useEffect, useState } from "react";
import Category from "./categories";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { Typography, Button, TextField } from "@material-ui/core";

function AddItem() {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [itemName, setItemName] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  async function handleItemSave() {
    console.log("event");
    const token = await localStorage.getItem("token");
    console.log(token)
    fetch(
      `https://inventory-ciul.onrender.com/api/items/${selectedCategory.id}/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // token: localStorage.getItem("inv-token"),
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: itemName }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        navigate("/dashboard/dashboard/form-elements/items");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetch("https://inventory-ciul.onrender.com/api/category/all", {
      headers: {
        // token: localStorage.getItem("inv-token"),
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) =>
        setCategories([
          ...data.categories.map((category) => ({
            id: category._id,
            label: category.name,
            value: category.name,
          })),
        ])
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      className="add-item-container"
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        marginBottom: "10px",
        padding: "50px",
      }}
    >
      <div className="add-item-form">
        <div className="add-item-part1">
          <Typography
            style={{ color: "blue", fontSize: "25px", marginBottom: "80px" }}
          >
            Add Item
          </Typography>
          {/* <Typography>Date</Typography>
          <TextField
            fullWidth
            className="form-control"
            type="date"
            placeholder="Date of entry"
            name="date"
            required
          /> */}

          <Typography>Select category of item</Typography>
          <Select
            options={categories}
            value={selectedCategory}
            onChange={(selected) => setSelectedCategory(selected)}
            placeholder="Select category"
            name="category"
            required
            isSearchable
          />
          <Typography>Add name of Item</Typography>
          <TextField
            fullWidth
            className="form-control"
            type="text"
            placeholder="Enter name of item"
            name="item"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>

       
        <Button
          type="save"
          style={{ backgroundColor: "blue", marginTop: "20px", color: "white" }}
          // className="btn btn-primary"
          onClick={() => {
            console.log("Click");
            handleItemSave();
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
export default AddItem;
