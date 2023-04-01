import React from "react";
import { Grid, Box } from "@material-ui/core";

import  SalesReport from "./salesReport";

import PurchaseReport from "./purchaseRep";
import CapitalReport from "./capitalReport";

export const AllReports = () => {
  

  return (
    <Box >
      <Grid  xs={12} lg={12}>
        <SalesReport/>
     
        <Grid item xs={12} lg={12}>
          <PurchaseReport />
        </Grid>

        <Grid item xs={12} lg={12}>
          <CapitalReport />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AllReports;
