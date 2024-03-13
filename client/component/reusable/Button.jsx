import { Button } from "@mui/material";

const SimpleButton = ({ value, variant, sx }) => {
  return (
    <Button variant={variant} sx={{ ...sx }}>
      {value}
    </Button>
  );
};

export default SimpleButton;
