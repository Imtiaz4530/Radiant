import { Box, Drawer, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import styles from "@/styles/cartDrawer.module.css";
import SimpleButton from "../reusable/Button";
import CartContainer from "./cartContainer";

const CartDrawer = ({ state, toggleDrawer }) => {
  const list = (
    <Box
      className={styles.cart_container}
      role="presentation"
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

      <CartContainer />

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
