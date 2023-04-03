import React from "react";
import { Grid, Box } from "@material-ui/core";

import  SalesReport from "./salesReport";
import ReportButton from "./reportButton";
import PurchaseReport from "./purchaseRep";
import WeeklyReport from "./weeklyReport";
import MonthlyReport from "./monthlyReport";

export const AllReports = () => {
  

  return (
    <Box >
      <Grid  xs={12} lg={12}>
        {/* <SalesReport/> */}
     
        {/* <Grid item xs={12} lg={12}>
          <PurchaseReport />
        </Grid> */}

        {/* <Grid item xs={12} lg={12}>
          <WeeklyReport />
        </Grid> */}

        {/* <Grid item xs={12} lg={12}>
          <MonthlyReport />
        </Grid> */}

        <Grid item xs={12} lg={12}>
          <ReportButton />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AllReports;
