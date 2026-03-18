// Package Imports
import React from "react";
import {
  Paper,
  Typography,
  useTheme,
} from "@mui/material";

export const EventCard = ({ icon, eventName }) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        minHeight: theme.spacing(34),
        maxWidth: theme.spacing(34),
        minWidth: theme.spacing(34),
        padding: theme.spacing(5, 4),
        textAlign: "center",
        boxShadow: {xs: theme.shadows[1], sm: theme.shadows},
      }}
    >
      {icon}
      <Typography
        sx={{
          fontWeight: "bold",
        }}
      >
        {eventName}
      </Typography>
    </Paper>
  );
};