import { Select } from "@material-ui/core";
import {React, useEffect, useState} from "react"
import { TextField, MenuItem,Typography ,Box, Button } from "@material-ui/core"
import Category from "./categories";
import {IoIosArrowDown} from "react-icons/io"
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { updateItemRequest } from "../../reducers/itemsReducer";


export const EditItem =()=> {
    const [item, setItem] = useState({});
    const {items, loading, redirect} = useSelector(state => state.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        // get from "store / state"
        const theItem = items?.find((item) => item._id === id)
        if(!theItem) {
            navigate('/dashboard/dashboard/form-elements/items');
        }
        setItem({
            id: theItem._id,
            name: theItem.name
        });
    }, [])

    useEffect(() => {
        if(redirect)
            navigate('/dashboard/dashboard/form-elements/items');
    }, [redirect])

    const handleChange = ({target}) => {
        setItem(st => ({
            id: item.id,
            name: target.value
        }));
    }

    const handleSave = () => {
        if(!item.name) return;
        dispatch(updateItemRequest(item));
    }

    return (
        <div className="add-item-container" style={{backgroundColor:"white",borderRadius:"10px",justifyContent:"center",paddingBottom:"20px"}}>
        <div style={{padding:"20px 100px 0px 100px"}}>
    
        <Typography style={{color:"blue",fontSize:"25px",marginBottom:"50px"}}>Edit Items</Typography>
        <Typography>Edit Item Name</Typography>
    
        <TextField
              id="date-text"
              label="Item Name"
              type="item"
              variant="outlined"
              fullWidth
              value={item.name}
              onChange={handleChange}
              sx={{
                mb: 2,
              }}
            />







<Button style={{
            backgroundColor:"blue",
            color:"white",
            padding:"10px 0px 10px 0px",
            textAlign:"center",
            border:"none",
            borderRadius:"5px",
            width: "100%"
        }}
        type="save"
        className="save-data"
        onClick={handleSave}
        >
            {
                loading && <LoadingOutlined style={{marginRight: 5}} />
            }
            Save
        </Button>
        
        </div>       
</div>
        
    )
}
export default EditItem;