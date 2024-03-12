"use client";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import Image from "next/image";
import { imageLoader } from "@/utils/imageLoader";
import InfoIcon from "@mui/icons-material/Info";

import styles from "../../styles/discountCard.module.css";
import Loading from "./Loading";

const Cards = ({ url, name, price, discount }) => {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: "#e0e0e0" }}>
      <CardContent className={styles.content}>
        <Image
          alt="Product Details"
          src={url}
          loader={imageLoader}
          width={220}
          height={220}
        />
        <Typography variant="h6" fontWeight={"bold"} color="text.secondary">
          {name}
        </Typography>
        <Box className={styles.disCountPriceBox}>
          <Typography variant="body1" color="text.primary">
            BDT 2500
          </Typography>
          {discount ? (
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ textDecoration: "line-through" }}
            >
              BDT 3200
              <hr className={styles.discountCross} />
            </Typography>
          ) : (
            ""
          )}
        </Box>
        <Box className={styles.btnBox}>
          <Button size="small" variant="contained" className={styles.cartBtn}>
            Add Cart
          </Button>
          <Button size="small" variant="outlined" className={styles.detailBtn}>
            Details
            <InfoIcon />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const ProductCard = ({ data, loading, error }) => {
  if (loading) {
    return <Loading isLoading={loading} />;
  }
  return (
    <Grid container spacing={10} className={styles.gridContainer}>
      {data?.map((item) => (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
          <Cards
            url={item.displaYImage}
            name={item.name}
            price={item.price}
            discount={item.discount}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductCard;
