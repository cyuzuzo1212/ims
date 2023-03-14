import { Box, Button, FormControl } from '@material-ui/core';
import * as React from 'react';

export default function AddSale() {
  return (
    <Box
    >
      <FormControl sx={{
        marginTop: "100px",
        marginLeft: "25%",
        

      }}>
        <Box sx={{
          display: "flex",

        }}>
          <Box sx={{
            marginRight: "10px"
          }}>
            <label for="my-input">Select category of item</label><br />
            <select style={{ width: "190px", padding: "10px", borderRadius: "5px" }}>
              <option>Fashion</option>
            </select>
          </Box>
          <Box>
            <label for="my-input">Select item's name</label><br />
            <select style={{ width: "190px", padding: "10px", borderRadius: "5px" }}>
              <option>Sugar</option>
            </select>
          </Box>

          <Box>
            <label for="my-input">Quantity</label><br />
            <select style={{ width: "190px", padding: "10px", borderRadius: "5px" }}>
              <option>kg</option>
            </select>
          </Box>
        </Box>
        <Box sx={{
          display: "flex"
        }}>
          <Box sx={{
            marginRight: "10px",
            marginTop: "20px"
          }}>
            <label for="my-input">Sales Price</label><br />
            <input id="my-input" aria-describedby="my-helper-text" style={{ padding: "10px", borderRadius: "5px" }} />
          </Box>
          <Box sx={{
            marginTop: "20px"
          }}>
            <label for="my-input">Amount</label><br />
            <input id="my-input" aria-describedby="my-helper-text" style={{ padding: "10px", borderRadius: "5px" }} />
          </Box>
        </Box>
        <Box sx={{
          display: "flex"
        }}>
          <Box sx={{
            marginRight: "10px",
            marginTop: "20px"
          }}>
            <label for="my-input">Status</label><br />
            <input id="my-input" aria-describedby="my-helper-text" style={{ padding: "10px", borderRadius: "5px" }} />
          </Box>
          <Box sx={{
            marginTop: "20px"
          }}>
            <label for="my-input">Customer name</label><br />
            <input id="my-input" aria-describedby="my-helper-text" style={{ padding: "10px", borderRadius: "5px" }} />
          </Box>
        </Box>
        <Box sx={{
            marginTop: "20px",
            display:"flex",
            marginLeft:"150px",
            
        }}>
          <Button variant="contained" color="secondary">Save</Button>
        </Box>
      </FormControl>
    </Box>
  );
}