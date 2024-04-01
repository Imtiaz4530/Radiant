import MoreIcon from "@mui/icons-material/MoreVert";
import { Badge, Box, IconButton } from "@mui/material";
import { AccountCircle, Logout } from "@mui/icons-material";
import Link from "next/link";

import { useIsLoggedIn, useLogout } from "@/hooks/useAuth";
import SimpleButton from "../reusable/Button";
import CartManager from "./CartManager";

const NavIcon = ({
  menuId,
  mobileMenuId,
  handleProfileMenuOpen,
  setMobileMoreAnchorEl,
}) => {
  const { logged, setLogged } = useIsLoggedIn();
  const { handleLogout } = useLogout(setLogged);

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  return (
    <>
      {" "}
      {logged ? (
        <>
          <Box
            sx={{
              display: { xs: "none", md: "flex", lg: "flex" },
              gap: { xs: "0px", lg: "15px" },
            }}
          >
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Link href={"/private/profile"} className="link profileButton">
                <AccountCircle />
              </Link>
            </IconButton>
            <IconButton size="large" color="inherit">
              <CartManager />
            </IconButton>
            <IconButton size="large" color="inherit">
              <Badge color="error">
                <Logout onClick={handleLogout} />
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              sx={{ m: 0, p: 0 }}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </>
      ) : (
        <Link href={"/auth/login"} className="link">
          <SimpleButton
            value={"LOG-IN"}
            variant={"outlined"}
            className={"navLoginButton"}
          />
        </Link>
      )}
    </>
  );
};

export default NavIcon;
