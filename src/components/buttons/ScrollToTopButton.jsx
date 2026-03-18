// Package Imports
import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Box, Fade, Fab, useTheme } from "@mui/material";
import { useWindowScroll } from "@uidotdev/usehooks";

// Icon Imports
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const ScrollToTopButton = () => {
  const theme = useTheme();
  const [{}, scrollTo] = useWindowScroll();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Fade in={trigger}>
      <Box
        onClick={() => scrollTo({ left: 0, top: 0, behavior: "smooth" })}
        role="presentation"
        sx={{
          position: "fixed",
          bottom: theme.spacing(2),
          right: theme.spacing(2),
        }}
      >
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  );
};

ScrollToTopButton.propTypes = {};
