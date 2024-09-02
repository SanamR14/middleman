import React from "react";
import Header from "./Header";
import { Box, TextField, Grid } from "@material-ui/core";
import Products from "./Products";
import img from "../asserts/kids1.png";

const products = [
  {
    id: 1,
    name: "productName1",
    description: "productDescription1",
    price: "Rs.499",
    image: img,
    businessName: "Business Name",
  },
  {
    id: 2,
    name: "productName2",
    description: "productDescription2",
    price: "Rs.799",
    image: img,
    businessName: "Business Name",
  },
  {
    id: 3,
    name: "productName3",
    description: "productDescription3",
    price: "Rs.499",
    image: img,
    businessName: "Business Name",
  },
  {
    id: 4,
    name: "productName4",
    description: "productDescription4",
    price: "Rs.799",
    image: img,
    businessName: "Business Name",
  },
  {
    id: 5,
    name: "productName5",
    description: "productDescription5",
    price: "Rs.499",
    image: img,
    businessName: "Business Name",
  },
  {
    id: 6,
    name: "productName6",
    description: "productDescription6",
    price: "Rs.799",
    image: img,
    businessName: "Business Name",
  },
];

const LandingPage = () => {
  return (
    <>
      <Header></Header>
      <Box style={{ textAlign: "center", margin: "1.5rem 0 2rem 0" }}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          style={{ width: "30rem", background: "white" }}
        />
      </Box>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Products product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default LandingPage;
