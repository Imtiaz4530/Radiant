import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";

import Input from "../reusable/Form/Input";
import styles from "@/styles/profile.module.css";
import SimpleButton from "../reusable/Button";

const ProfileForm = ({ open, handleClose }) => {
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit,
      }}
      className={styles.dialog}
    >
      <DialogTitle textAlign={"center"}>Create Your Profile</DialogTitle>
      <DialogContent className={styles.dialogContent}>
        <Input type="text" label="name" register={register} />
        {errors?.name && (
          <Alert
            severity="error"
            onClose={() => {
              clearErrors("name");
            }}
            className={styles.error}
          >
            {errors?.name?.message}
          </Alert>
        )}

        <Input type="number" label="phone" register={register} />
        {errors?.phone && (
          <Alert
            severity="error"
            onClose={() => {
              clearErrors("phone");
            }}
            className={styles.error}
          >
            {errors?.phone?.message}
          </Alert>
        )}

        <Input type="text" label="address" register={register} />
        {errors?.address && (
          <Alert
            severity="error"
            onClose={() => {
              clearErrors("address");
            }}
            className={styles.error}
          >
            {errors?.address?.message}
          </Alert>
        )}
      </DialogContent>
      <DialogActions className={styles.dialogActions}>
        <SimpleButton
          variant={"contained"}
          value={"CREATE"}
          className={styles.createBTN}
        />
      </DialogActions>
    </Dialog>
  );
};

export default ProfileForm;
