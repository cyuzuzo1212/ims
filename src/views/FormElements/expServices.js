import React from "react";
import { Grid, Box } from "@material-ui/core";
import { Expenses} from "./expenses"

import {Services} from "../FormElements/services"

export const ExpServices = () => {
  

  return (
    <Box style={{flexDirection:"row"}}>
      <Grid container spacing={0}>
        {/* <Services/> */}
     
        <Grid item xs={12} lg={12}>
          <Expenses />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExpServices;
