// Package Imports
import React, { useState } from "react";
import { useTheme, Button } from "@mui/material";

// Icon Imports
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

// Project-Defined Imports
import { CommDialog } from "./CommDialog";

export const CommDialogButton = ({ role, description, names }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button
        variant="text"
        aria-label="show-more"
        onClick={handleClickOpen}
        sx={{
          width: theme.spacing(40),
          justifyContent: "space-between",
          textTransform: "uppercase",
          boxShadow: theme.shadows[3],
          color: theme.palette.text.primary,
          background: "#fff",
          padding: theme.spacing(1, 1, 1, 3),
        }}
      >
        {role}
        <ArrowForwardIosRoundedIcon />
      </Button>

      <CommDialog
        open={open}
        setOpen={setOpen}
        role={role}
        description={description}
        names={names}
      />
    </>
  );
};
