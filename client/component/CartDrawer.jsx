import { Box, Drawer, Typography } from "@mui/material";
import { Add, Close, Remove } from "@mui/icons-material";

import styles from "@/styles/cartDrawer.module.css";
import item1 from "@/public/hc.webp";
import item2 from "@/public/r.webp";
import item3 from "@/public/rb.webp";
import item4 from "@/public/w.webp";
import Image from "next/image";
import SimpleButton from "./reusable/Button";

const cartList = [
  {
    id: 1,
    url: item1,
    title: `Hammer Stroke Bluetooth Calling Smartwatch With largest 1.96" TFT Display`,
    price: 2000,
    color: "Black",
  },
  {
    id: 2,
    url: item2,
    title: `Hammer Stroke Bluetooth Calling Smartwatch With largest 1.96" TFT Display`,
    price: 2700,
    color: "Navy Blue",
  },
  {
    id: 3,
    url: item3,
    title: `Hammer Stroke Bluetooth Calling Smartwatch With largest 1.96" TFT Display`,
    price: 3500,
    color: "White",
  },
  {
    id: 4,
    url: item4,
    title: `Hammer Stroke Bluetooth Calling Smartwatch With largest 1.96" TFT Display`,
    price: 5600,
    color: "Black",
  },
];

const CartDrawer = ({ state, toggleDrawer }) => {
  const list = (
    <Box
      className={styles.cart_container}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box className={styles.cart_upper}>
        <Typography variant="h2" className={styles.cart_upperText}>
          Cart
        </Typography>
        <Close
          className={styles.cart_upperIcon}
          onClick={toggleDrawer(false)}
        />
      </Box>

      <Box className={styles.cart_itemsContainer}>
        {cartList.map((item) => (
          <Box className={styles.cart_item} key={item.id}>
            <Box className={styles.cart_itemImageContainer}>
              <Image
                src={item.url}
                alt="nothing"
                width={100}
                height={100}
                className={styles.cart_itemImage}
              />
            </Box>
            <Box className={styles.cart_itemDetails}>
              <Typography variant="h5" className={styles.cart_itemTitle}>
                {item.title}
              </Typography>
              <Typography variant="body2" className={styles.cart_itemColor}>
                Color: <span>{item.color}</span>
              </Typography>
              <Box className={styles.cart_itemPriceQuantity}>
                <Box className={styles.cart_itemQuantity}>
                  <Add fontSize="small" />
                  <Typography
                    variant="body2"
                    className={styles.cart_itemQuantityText}
                  >
                    1
                  </Typography>
                  <Remove fontSize="small" />
                </Box>
                <Typography variant="body2" className={styles.cart_itemPrice}>
                  BDT. {item.price}.00
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Box className={styles.cart_lower}>
        <Box className={styles.cart_lowerSubtotal}>
          <Typography className={styles.cart_lowerSubtotalText}>
            SUBTOTAL
          </Typography>
          <Typography className={styles.cart_lowerSubtotalNum}>
            BDT. 6700.00
          </Typography>
        </Box>
        <Typography className={styles.cart_lowerPolicy}>
          Shipping, taxes, and discount codes calculated at checkout.
        </Typography>
        <SimpleButton
          className={styles.cart_lowerCheckoutBTN}
          value={"CHECKOUT"}
          variant={"contained"}
        />
      </Box>
    </Box>
  );

  return (
    <div>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </div>
  );
};

export default CartDrawer;
