import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Discount } from "@mui/icons-material";
import Link from "next/link";

const DiscountBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          height: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#50727B",
        }}
      >
        <Toolbar variant="dense">
          <Link href={"/discount"} className="link">
            <Typography
              variant="body2"
              color="inherit"
              component="div"
              sx={{ letterSpacing: "5px", fontSize: "12px" }}
            >
              <IconButton edge="start" color="inherit" aria-label="menu">
                <Discount sx={{ fontSize: 14 }} />
              </IconButton>
              GET 5% FLAT DISCOUNT!
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default DiscountBar;
