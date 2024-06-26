"use client";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

import ProtectedRoute from "@/component/protectRoute/ProtectedRoute";
import styles from "@/styles/order.module.css";
import OrderIdentity from "@/component/order/OrderIdentity";
import OrderSummery from "@/component/order/OrderSummery";
import ProtectedOrder from "@/component/protectRoute/ProtectedOrder";

const Order = () => {
  const [profileID, setProfileID] = useState(null);
  return (
    <ProtectedRoute>
      <ProtectedOrder>
        <Box className={styles.order_container}>
          <Typography variant="h3" className={styles.order_upperTitle}>
            Order Details
          </Typography>
          <Box className={styles.order_details}>
            {/* ORDER IDENTITY */}
            <OrderIdentity setProfileID={setProfileID} />

            {/* ORDER SUMMERY */}
            <OrderSummery profileID={profileID} />
          </Box>
        </Box>
      </ProtectedOrder>
    </ProtectedRoute>
  );
};

export default Order;
