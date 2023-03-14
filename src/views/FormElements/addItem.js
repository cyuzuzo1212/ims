import { Select } from "@material-ui/core";
import {React} from "react"
import Category from "./categories";
import {IoIosArrowDown} from "react-icons/io"



function AddItem () {
    return (
        <div className="add-item-container" style={{display:"flex",backgroundColor:"white",borderRadius:"10px"}}>
<div className="add-item-form" style={{display:"flex",padding:"10px 0px 20px 20px",marginLeft:"150px"}}>
    <div className="add-item-part1" style={{padding:"20px 20px 0px 0px",marginTop:"-2px"}}>
    <p style={{color:"blue",fontSize:"25px",marginBottom:"80px"}}>Add Item</p>
    <p>Date</p>
    <input  style={{padding:"8px 380px 8px 0px",borderRadius:"8px"}}
        type="text"
        placeholder="Date of entry"
        name="Date"
        required
        />

<p >Select category of item</p>
    <input  style={{padding:"8px 380px 8px 0px",borderRadius:"8px"}}
        type="text"
        placeholder="Select category"
        Select
        label="Select"
        // onSelect={<IoIosArrowDown/>}
       value={""}
        required
/>
<p>Add name of Item</p>
    <input  style={{padding:"8px 380px 8px 0px",borderRadius:"8px"}}
        type="text"
        placeholder="Enter name of item"
        name="Item"
        required
        />

{/* <p>Price per box</p>
    <input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Enter price per box"
        name="Price"
        required
        /> */}
        </div>

        {/* <div className="add-item-part2"  style={{padding:"20px 20px 0px 0px",marginTop:"116px"}}> */}
        {/* <p style={{marginLeft:"-290px"}}>Select category of item</p>
    <input  style={{padding:"4px 100px 4px 0px",marginLeft:"-290px"}}
        type="text"
        placeholder="Select category"
        name="Category"
        required
        /> */}

{/* <p>Select unit of item</p>
    <input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Select Unit"
        name="Unit"
        required
        /> */}

{/* <p>Price per piece</p>
    <input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Enter price per piece"
        name="Price"
        required
        />  */}
        {/* </div> */}

        {/* <div className="add-item-part3" style={{marginTop:"135px"}}>

 <p>Add quantity</p>
    <input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Enter Quantity"
        name="Quantity"
        required
        />

<p>Price of unit</p>
    <input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Enter price of unit"
        name="Price"
        required
        />

<p>Total amount</p>
    <input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Enter amount"
        name="Amount"
        required
        />
        </div> */}
        <button style={{
            marginTop:"410px",
            marginLeft:"-570px",
            backgroundColor:"blue",
            color:"white",
            padding:"8px 50px 8px 50px",
            border:"none",
            borderRadius:"5px",
        }}
        type="save"
        className="save-data"
        >{" "}Save{" "}
        </button>
</div>
        </div>
    )
}
export default AddItem;