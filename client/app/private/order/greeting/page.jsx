import SimpleButton from "@/component/reusable/Button";
import { Box, Typography } from "@mui/material";

import styles from "@/styles/greeting.module.css";

const Greeting = () => {
  return (
    <Box className={styles.greetingContainer}>
      <Typography variant="h4" className={styles.name}>
        Hey, Imtiaz!
      </Typography>
      <Typography variant="h3" className={styles.greetingText}>
        Your order is completed.❤
      </Typography>
      <Typography variant="h6" className={styles.orderId}>
        Order ID - 4313
      </Typography>
      <Box className={styles.buttonBox}>
        <SimpleButton
          value={"Go Back To Home"}
          variant={"contained"}
          className={styles.goback}
        />
        <SimpleButton
          value={"Continue Shopping"}
          variant={"contained"}
          className={styles.continue}
        />
      </Box>
    </Box>
  );
};

export default Greeting;
