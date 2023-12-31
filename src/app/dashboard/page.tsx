"use client";

// Themes and Styles
import tokens from "@/themes/theme";

// Material UI - Third party Libraries and features
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

// Material UI Icons
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

// Data Utils
import { mockTransactions } from "@/data/mockData";

// Components
import Header from "@/Global/Header";
import LineChart from "@/components/LineChart";
import GeographyChart from "@/components/GeographyChart";
import BarChart from "@/components/BarChart";
import ProgressCircle from "@/components/ProgressCircle";
import StatBox from "@/components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;
