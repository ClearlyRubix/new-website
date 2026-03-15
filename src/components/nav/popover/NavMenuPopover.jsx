// Package Imports
import React, { Children, isValidElement, cloneElement } from "react";
import { Menu, Button, Typography, useTheme, Box } from "@mui/material";

// Icon Imports
import { ExpandLess, ExpandMore } from "@mui/icons-material";

// Project-defined Imports
import { usePopoverHook } from "./usePopoverHook";

export const NavMenuPopover = ({
  variant,
  children,
  menuId,
  buttonId,
  buttonLabel,
}) => {
  const theme = useTheme();
  const { anchorEl, open, handleClick, handleClose } = usePopoverHook();

  const childrenWithProps = Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript error too.
    if (isValidElement(child)) {
      return cloneElement(child, { handleClose });
    }
    return child;
  });

  return (
    <>
      <Box
        height={"100%"}
        alignContent={"center"}
        sx={{
          "&:hover": {
            backgroundColor: theme.palette.blue.hover,
          },
          padding: theme.spacing(1, 2),
          textTransform: "none",
          color: theme.palette.white.secondary,
          "& .MuiButton-endIcon": {
            marginLeft: 0,
          },
          border: 0,
          borderRadius: 0,
        }}
        component={Button}
        onClick={handleClick}
        id={buttonId}
        aria-controls={open ? menuId : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        endIcon={open ? <ExpandMore /> : <ExpandLess />}
        classes={{ endIcon: { marginLeft: 0 } }}
      >
        <Typography variant={variant}>{buttonLabel}</Typography>
      </Box>
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": buttonId,
        }}
        sx={{
          boxShadow: theme.shadows[0].boxShadow,
          "& .MuiList-root": {
            padding: 0,
          },
        }}
      >
        {childrenWithProps}
      </Menu>
    </>
  );
};

export default NavMenuPopover;
