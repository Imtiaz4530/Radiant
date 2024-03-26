"use client";
import { Box, Button, Typography } from "@mui/material";

import styles from "@/styles/productDetails.module.css";
import ProductImageSlider from "@/component/productDetails/ProductImageSlide";
import SimpleButton from "@/component/reusable/Button";

const ProductDescription = ({ data }) => {
  let discountPrice;
  if (data?.discount) {
    discountPrice = Math.round(
      data?.price - data?.price * (data?.discount / 100)
    );
  }
  return (
    <Box className={styles.productDetails}>
      <Box className={styles.productDetails_image}>
        <ProductImageSlider images={data?.productImages} />
      </Box>
      <Box className={styles.productDetails_details}>
        <Typography variant="h4" className={styles.productDetails_title}>
          {data?.title}
        </Typography>
        <Typography
          variant="h5"
          textAlign={"center"}
          className={styles.productDetails_price}
        >
          {data?.discount ? (
            <>
              Sale Price: BDT {discountPrice}{" "}
              <span className={styles.productDetails_discountPrice}>
                BDT {data?.price}
              </span>
            </>
          ) : (
            `Price: ${data?.price}`
          )}
        </Typography>

        {/* COLOR */}
        <Box className={styles.productDetails_colorContainer}>
          <Box className={styles.productDetails_colorSelected}>
            <Box className={styles.productDetails_color}></Box>
          </Box>
          <Box className={styles.productDetails_colorSelected}>
            <Box className={styles.productDetails_color}></Box>
          </Box>
          <Box className={styles.productDetails_colorSelected}>
            <Box className={styles.productDetails_color}></Box>
          </Box>
        </Box>

        {/* BUTTONS */}
        <SimpleButton
          variant={"outlined"}
          value={"ADD TO CART"}
          className={styles.productDetails_cartBTN}
        />
        <Button variant="contained" className={styles.productDetails_orderBTN}>
          BUY NOW
          <Typography
            variant="body2"
            className={styles.productDetails_instantOrderBTN}
          >
            INSTANT DISCOUNT WITH ANY CREDIT CARDS
          </Typography>
        </Button>

        {/* CUPPON */}
        <Typography variant="h6" className={styles.productDetails_cuppon}>
          Use Code SALE10 and avail Flat 10% off.
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductDescription;
