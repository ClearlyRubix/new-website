// Package Imports
import React from "react";
import {
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export const CommDialog = ({
  open,
  setOpen,
  role,
  description,
  names,
  isRecruiting,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.only("xs"));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Dialog */}
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        fullScreen={fullScreen}
      >
        <DialogTitle>
          <Typography variant="h5">Responsibilities of {role}s</Typography>
        </DialogTitle>
        <DialogContent sx={{ padding: theme.spacing(0, 5) }}>
          <Typography variant="subtitle1" paragraph>
            {description}
          </Typography>
          {names.length !== 0 ? (
            <>
              <Typography variant="h6">Active Commissioner(s):</Typography>
              <ul style={{ margin: (theme) => theme.spacing(0.5, 0) }}>
                {names.map((name) => {
                  return (
                    <li key={name}>
                      <Typography variant="subtitle1">{name}</Typography>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <>
              <Typography variant="h6">
                There are no active commissioners for this role!
              </Typography>

              <Typography variant="subtitle1" paragraph>
                {isRecruiting ? (
                  <>If you're interested, apply today!</>
                ) : (
                  <>
                    If you're interested, reach out to{" "}
                    <a href={`mailto:execs@zooengg.ca`}>execs@zooengg.ca</a> to
                    see if they're accepting for this role.
                  </>
                )}
              </Typography>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
