// Package Imports
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router";

export const NonPopoverNavItem = ({ href, label, variant }) => {
  const theme = useTheme();
  return (
    <Box
      alignContent={"center"}
      sx={{
        "&:hover": {
          backgroundColor: theme.palette.blue.hover,
        },
        padding: theme.spacing(1, 2),
        textDecoration: "none"
      }}
      component={Link}
      to={href}
      color={theme.palette.white.secondary}
      border={0}
      borderRadius={theme.spacing(1.25)}
      boxSizing={"border-box"}
    >
      <Typography variant={variant}>{label}</Typography>
    </Box>
  );
};

export default NonPopoverNavItem;
