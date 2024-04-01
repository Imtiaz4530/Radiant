import { Box, Typography } from "@mui/material";

import ProtectedRoute from "@/component/protectRoute/ProtectedRoute";
import styles from "@/styles/order.module.css";
import OrderIdentity from "@/component/order/OrderIdentity";
import OrderSummery from "@/component/order/OrderSummery";

const Order = () => {
  return (
    <ProtectedRoute>
      <Box className={styles.order_container}>
        <Typography variant="h3" className={styles.order_upperTitle}>
          Order Details
        </Typography>
        <Box className={styles.order_details}>
          {/* ORDER IDENTITY */}
          <OrderIdentity />

          {/* ORDER SUMMERY */}
          <OrderSummery />
        </Box>
      </Box>
    </ProtectedRoute>
  );
};

export default Order;
