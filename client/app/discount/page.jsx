import CardContainer from "@/component/reusable/CardContainer";
import { Box, Typography } from "@mui/material";

const Discount = () => {
  return (
    <Box>
      <Typography variant="h3" className="discountBannerText">
        GET 5% Discount on these selected products!
      </Typography>
      <CardContainer dc={true} />
    </Box>
  );
};

export default Discount;
