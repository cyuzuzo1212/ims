import React, { useEffect } from "react";
import { TextField, MenuItem, Typography, Button } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editCategory, redirect as redirectAction } from "../../components/Landingpage/categoryslice";
import {
  getCateg,
  data,
  storeCategory,
} from "../../components/Landingpage/categoryslice";

export const EditCategory = () => {
  const params = useParams();
  const id = params.id;
  const [editingCategory, setEditingCategory] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const category = useSelector((state) => state.categories.category);
  const {changeSaved} = useSelector(state => state.categories);

  useEffect(() => {
          if(changeSaved) {
                  dispatch(redirectAction(false));
                  navigate('/dashboard/dashboard/form-elements/category')
          }
  }, [changeSaved])

  const handleEditPost = (e) => {
    e.preventDefault();
    dispatch(
      editCategory( id ,{
        name: editingCategory,
      })
    );
  };
  useEffect(() => {
    dispatch(getCateg(id));
  }, []);

  useEffect(()=>{
    if (category.categories){
      setEditingCategory(category.categories.name)
    }
  },[category.categories])

  return (
    <div
      className="add-category-container"
      style={{
        backgroundColor: "white",
        paddingBottom: "50px",
        borderRadius: "10px",
        justifyContent: "center",
      }}
    >
      <div
        className="add-category-form"
        style={{ marginTop: "0px", padding: "15px 100px" }}
      >
        <Typography
          style={{ color: "blue", fontSize: "25px", marginBottom: "50px" }}
        >
          Edit Category
        </Typography>
        <Typography>Edit Category </Typography>

        <TextField
          id="edit-category-text"
          label="category"
          type="edit"
          variant="outlined"
          fullWidth
          sx={{
            mb: 2,
          }}
          value={editingCategory}
          onChange={(category) => {
            setEditingCategory(category.target.value);
          }}
        />

        <Button
          onClick={handleEditPost}
          style={{
            backgroundColor: "blue",
            textAlign: "center",
            border: "none",
            borderRadius: "6px",
            color: "white",
            paddingTop: "10px",
            paddingBottom: "10px",
            textAlign: "center",
          }}
          type="save"
          className="save-data"
        >
          {" "}
          Save{" "}
        </Button>
      </div>
    </div>
  );
};
export default EditCategory;
