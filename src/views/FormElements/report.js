import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@material-ui/core";
import image1 from "../../images/service1.jpg";
import image2 from "../../images/service2.jpg";

const BlogSheet = [
    {
    image:image1,
    title:"Balance Sheet",
    // button: "Generate Balance Sheet",
},
{
    image:image2,
    title: "Income Statement",
    // button: "Generate Income Statement",
},
];

const CardSheet = () => {
   
   return (
    <div style={{backgroundColor:"white",borderRadius:"10px"}}>
        <h style={{display:"flex",color:"blue",padding:"30px 0px 0px 20px",fontSize:"25px"}}>Reports</h>
    <Grid container style={{paddingTop:"20px"}}>
        {/* <h>report</h> */}
        {BlogSheet.map((blog,index) =>(

<Grid
key={index}
item
xs={12}
lg={4}
sx={{
  display: "flex",
  alignItems: "stretch",
}}
>
    
<Card
  variant="outlined"
  sx={{
    p: 0,
    width: "100%",
  }}
>
  <img src={blog.image} alt="image" width="100%" height="55%" />
  <CardContent
    sx={{
      paddingLeft: "35px",
      paddingRight: "30px",
    }}
  >
    <Typography
      sx={{
        fontSize: "25px",
        fontWeight: "600",
      }}
    >
      {blog.title}
    </Typography>
    <Typography
      color="textSecondary"
      sx={{
        fontSize: "14px",
        fontWeight: "400",
        mt: 1,
      }}
    >
      {blog.button}
    </Typography>
    <Button
      variant="contained"
      sx={{
        mt: "15px",
      }}
      color={blog.btncolor}
    >
      Generate {blog.title}
    </Button>

    {/* <Button
      variant="contained"
      sx={{
        mt: "15px",
      }}
      color={blog.btncolor}
    >
      Generate Income Statement
    </Button> */}


  </CardContent>
</Card>

</Grid>

        ))}
        
    </Grid>
    </div>
   )
    
}
export default CardSheet;