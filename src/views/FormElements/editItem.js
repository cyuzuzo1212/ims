import {React} from "react"



export const EditItem =()=> {
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
              sx={{
                mb: 2,
              }}
            />


{/* <p>Select unit of item</p>
    <input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Select Unit"
        name="Unit"
        required
        />


 <p>Edit quantity</p>
    <input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Enter Quantity"
        name="Quantity"
        required
        />

<p>Edit Price of unit</p>
    <input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Enter price of unit"
        name="Price"
        required
        />

<p>New total amount</p>
    <input  style={{padding:"4px 100px 4px 0px"}}
        type="text"
        placeholder="Enter amount"
        name="Amount"
        required
        />
        </div> */}
        <Button style={{
            marginTop:"410px",
            marginLeft:"-570px",
            backgroundColor:"blue",
            color:"white",
            padding:"8px 80px 8px 80px",
            border:"none",
            borderRadius:"5px",
        }}
        type="save"
        className="save-data"
        >{" "}Save{" "}
        </Button>
        
        </div>       
// </div>
        
    )
}
export default EditItem;