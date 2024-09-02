import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

const Products = ({ product }) => {
  const styles = {
    root: {
      maxWidth: "100%",
    },
    media: {
      height: 0,
      paddingTop: "56.25%",
    },
    cardActions: {
      display: "flex",
      justifyContent: "space-between",
    },
    cardContent: {
      display: "flex",
      justifyContent: "space-between",
    },
  };
  return (
    <Card style={styles.root}>
      <CardMedia
        style={styles.media}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <div style={styles.cardContent}>
          <Typography varient="h3" gutterbutton>
            {product.name}
          </Typography>
          <Typography varient="h3">{product.price}</Typography>
        </div>
        <Typography varient="h2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={styles.CardActions}>
        <Button
          varient="text"
          style={{ flexGrow: 1, justifyContent: "flex-start" }}
        >
          {product.businessName}
        </Button>
        <IconButton area-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Products;
