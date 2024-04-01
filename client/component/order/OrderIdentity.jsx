import { Box, Typography } from "@mui/material";
import { Email, Person, Phone } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import styles from "@/styles/order.module.css";

const OrderIdentity = () => {
  return (
    <Box className={styles.order_identity}>
      <Box className={styles.order_identityBox}>
        <Box className={styles.order_identityBoxIcon}>
          <Person className={styles.order_identityIcon} fontSize="large" />
        </Box>
        <Typography variant="h6" className={styles.order_identityName}>
          SM Imtiaz Rubayet
        </Typography>
      </Box>
      <Box className={styles.order_identityBox}>
        <Box className={styles.order_identityBoxIcon}>
          <Email className={styles.order_identityIcon} fontSize="large" />
        </Box>
        <Typography variant="h6" className={styles.order_identityName}>
          imtiazdemo@gmail.com
        </Typography>
      </Box>
      <Box className={styles.order_identityBox}>
        <Box className={styles.order_identityBoxIcon}>
          <Phone className={styles.order_identityIcon} fontSize="large" />
        </Box>
        <Typography variant="h6" className={styles.order_identityName}>
          01432-123213
        </Typography>
      </Box>
      <Box className={styles.order_identityBox}>
        <Box className={styles.order_identityBoxIcon}>
          <LocationOnIcon
            className={styles.order_identityIcon}
            fontSize="large"
          />
        </Box>
        <Typography variant="h6" className={styles.order_identityName}>
          Talukdarpara, Uttar Vurulia, DUET, Gazipur Sadar, Gazipur
        </Typography>
      </Box>
    </Box>
  );
};

export default OrderIdentity;
