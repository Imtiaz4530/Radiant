"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "@/styles/order.module.css";
import { cartList } from "@/data";
import SimpleButton from "../reusable/Button";

const OrderSummery = () => {
  const router = useRouter();
  return (
    <Box className={styles.order_summery}>
      <Typography variant="body1" textAlign={"center"} fontWeight={"bold"}>
        YOUR ORDER
      </Typography>

      <Box className={styles.order_summeryItems}>
        {cartList.map((item) => (
          <Box key={item.id} className={styles.order_summeryItem}>
            <Box className={styles.order_summeryItemImg}>
              <Image src={item.url} alt="desc" width={75} />
            </Box>
            <Box className={styles.order_summeryItemDesc}>
              <Typography variant="body2">{item.title}</Typography>
              <Typography variant="body2">
                BDT. {item.price} * {item.quantity}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Box className={styles.order_summeryAmount}>
        <Box className={styles.order_summerySubtotal}>
          <Box className={styles.order_summerySubtotalAdd}>
            <Typography variant="body2" fontWeight={"bold"}>
              SUBTOTAL
            </Typography>
            <Typography variant="body2">13,000.00</Typography>
          </Box>
          <Box className={styles.order_summerySubtotalAdd}>
            <Typography variant="body2" fontWeight={"bold"}>
              DELIVERY CHARGE(COD)
            </Typography>
            <Typography variant="body2"> 150.00</Typography>
          </Box>
        </Box>
      </Box>
      <Box className={styles.order_summeryAmount}>
        <Box className={styles.order_summerySubtotalAdd}>
          <Typography variant="body2" fontWeight={"bold"}>
            TOTAL
          </Typography>
          <Typography variant="body2">BDT. 13,150.00</Typography>
        </Box>
      </Box>
      <Box className={styles.order_summeryCOD}>
        <Typography variant="body2" fontWeight={"bold"}>
          Payment must be made after recieving the product.
        </Typography>
      </Box>
      <SimpleButton
        value={"Place Order"}
        variant={"container"}
        className={styles.orderBTN}
        onClick={() => router.push("/private/order/greeting")}
      />
    </Box>
  );
};

export default OrderSummery;
