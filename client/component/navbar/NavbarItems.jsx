"use client";
import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Logout, ShoppingBasketOutlined } from "@mui/icons-material";
import Link from "next/link";
import dynamic from "next/dynamic";

const NavIcon = dynamic(() => import("./NavIcon"), { ssr: false });

const NavbarItem = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {" "}
      <MenuItem>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <ShoppingBasketOutlined />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge color="error">
            <Logout />
          </Badge>
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#31363F",
          padding: { xs: 0, sm: "0 100px" },
          height: "45px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <Link href="/" className="link">
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                letterSpacing: 5,
              }}
            >
              RADIANT
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          {/* NAVICON COMING HERE */}
          <NavIcon
            menuId={menuId}
            mobileMenuId={mobileMenuId}
            setMobileMoreAnchorEl={setMobileMoreAnchorEl}
          />
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
};

export default NavbarItem;
