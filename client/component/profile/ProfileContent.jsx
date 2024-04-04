"use client";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import GlobalLoading from "../reusable/loading/GlobalLoading";
import styles from "@/styles/profile.module.css";
import SimpleButton from "../reusable/Button";
import ProfileForm from "./ProfileModal";

const ProfileContent = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchUserInfo = () => {
      setLoading(true);
      const storedUserInfo = localStorage.getItem("user");
      if (storedUserInfo) {
        setUser(JSON.parse(storedUserInfo));
      }
    };

    setLoading(false);
    fetchUserInfo();
  }, []);

  if (loading) {
    <GlobalLoading isLoading={loading} />;
  }

  const thumbnailText = user?.username.slice(0, 2).toUpperCase();

  return (
    <Box className={styles.profileContainer}>
      {user && (
        <Box className={styles.profileCard}>
          <Box className={styles.thumbnail}>
            <Typography color={"white"} variant="h1">
              {thumbnailText}
            </Typography>
          </Box>
          <Box className={styles.content}>
            <Typography variant="h4" className={styles.contentValue}>
              <span className={styles.contentLebel}>Username:</span>{" "}
              {user?.username}
            </Typography>
            <Typography variant="h4" className={styles.contentValue}>
              <span className={styles.contentLebel}>Email:</span> {user?.email}
            </Typography>

            {!isProfile && (
              <>
                <SimpleButton
                  value={"Create Full Profile"}
                  variant={"contained"}
                  className={styles.createBTN}
                  onClick={handleClickOpen}
                />
                <ProfileForm open={open} handleClose={handleClose} />
              </>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ProfileContent;
