import { Box, Typography } from "@mui/material";

import ProtectedRoute from "@/component/protectRoute/ProtectedRoute";

const Profile = () => {
  return (
    <ProtectedRoute>
      <Box>
        <Typography variant="h3">MY Profile</Typography>
      </Box>
    </ProtectedRoute>
  );
};

export default Profile;
