// Package Imports
import React from "react";
import { MenuItem, useTheme } from "@mui/material";
import { Link } from "react-router";

export const NavMenuItem = ({ handleClose, label, href }) => {
  const theme = useTheme();

  return (
    <MenuItem
      component={Link}
      to={href}
      onClick={handleClose}
      sx={{
        color: theme.palette.white.secondary,
        backgroundColor: theme.palette.blue.primary,
        "&:hover": {
          backgroundColor: theme.palette.blue.hover,
        },
      }}
    >
      {label}
    </MenuItem>
  );
};

export default NavMenuItem;
