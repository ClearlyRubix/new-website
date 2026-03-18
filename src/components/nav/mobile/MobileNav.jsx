// Package Imports
import { Box, Collapse, IconButton, List, ListItemButton, ListItemText, useTheme } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router";

// Project-defined Imports
import CollapseNavItem from "./CollapseNavItem";
import {
  CouncilNavMenuItems,
  EventNavMenuItems,
  SponsorNavMenuItems,
} from "../menu-items";

// Images
import MenuIcon from "@mui/icons-material/Menu"


export const MobileNav = ({ menuOpen, setMenuOpen}) => {
  const theme = useTheme();

  const [openCollapse, setOpenCollapse] = useState(null); // controls which collapse is open
  return (
    <Box
      sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column" }}
    >
      {/* Top Navbar "Row" */}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }} height={"100%"}>
        <IconButton
          sx={{
            ".MuiSvgIcon-root": {
              color: theme.palette.white.primary,
            },
          }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      {/* Collapsed Navbar */}
      <Collapse
        in={menuOpen}
        timeout={"auto"}
        sx={{
          zIndex: 1200,
          position: "absolute",
          top: "100%",
          right: 0,
          width: "100vw",
        }}
      >
        <List
          sx={{
            backgroundColor: theme.palette.blue.primary,
            zIndex: 1200,
          }}
        >
          <ListItemButton
            component={Link}
            to={"/#about-zoo"}
            onClick={() => setMenuOpen(false)}
          >
            <ListItemText primary="About" />
          </ListItemButton>
          <CollapseNavItem
            id="council"
            buttonText="Council"
            setMainMenuOpen={() => setMenuOpen(false)}
            openCollapse={openCollapse}
            setOpenCollapse={setOpenCollapse}
            items={[<CouncilNavMenuItems />]}
          />
          <CollapseNavItem
            id="events"
            buttonText="Events"
            setMainMenuOpen={() => setMenuOpen(false)}
            openCollapse={openCollapse}
            setOpenCollapse={setOpenCollapse}
            items={[<EventNavMenuItems />]}
          />
          <CollapseNavItem
            id="sponsors"
            buttonText="Sponsors"
            setMainMenuOpen={() => setMenuOpen(false)}
            openCollapse={openCollapse}
            setOpenCollapse={setOpenCollapse}
            items={[<SponsorNavMenuItems />]}
          />
          <ListItemButton
            component={Link}
            to={"/#contact-us"}
            onClick={() => setMenuOpen(false)}
          >
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </List>
      </Collapse>
    </Box>
  );
};
