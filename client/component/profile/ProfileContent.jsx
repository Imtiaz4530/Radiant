"use client";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import GlobalLoading from "../reusable/loading/GlobalLoading";
import styles from "@/styles/profile.module.css";
import SimpleButton from "../reusable/Button";
import ProfileForm from "./ProfileModal";
import { useProfile } from "@/hooks/useProfile";

const ProfileContent = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const profileData = useProfile(user?.id);
  const name = profileData?.name || "";
  const address = profileData?.address || "";
  const phone = profileData?.phone || "";

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            {name && (
              <Typography variant="h4" className={styles.contentValue}>
                <span className={styles.contentLebel}>Name:</span> {name}
              </Typography>
            )}
            <Typography variant="h4" className={styles.contentValue}>
              <span className={styles.contentLebel}>Username:</span>{" "}
              {user?.username}
            </Typography>
            <Typography variant="h4" className={styles.contentValue}>
              <span className={styles.contentLebel}>Email:</span> {user?.email}
            </Typography>
            {phone && address && (
              <>
                <Typography variant="h4" className={styles.contentValue}>
                  <span className={styles.contentLebel}>Phone:</span> {phone}
                </Typography>
                <Typography variant="h4" className={styles.contentValueAddress}>
                  <span className={styles.contentLebel}>Address:</span>{" "}
                  {address.toLowerCase()}
                </Typography>
              </>
            )}

            {!name && (
              <>
                <SimpleButton
                  value={"Create Full Profile"}
                  variant={"contained"}
                  className={styles.createBTN}
                  onClick={handleClickOpen}
                />
                <ProfileForm
                  open={open}
                  handleClose={handleClose}
                  userId={user?.id}
                />
              </>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ProfileContent;
