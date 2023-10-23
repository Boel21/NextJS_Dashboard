"use client";

// Themes and Styles
import tokens from "@/themes/theme";

// Material UI - Third party Libraries and features
import { Typography, Box, useTheme } from "@mui/material";

// Custom Interfaces
import Header from "@/interfaces/Header";

const Header: React.FC<Header> = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
