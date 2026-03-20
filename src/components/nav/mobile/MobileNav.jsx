// Package Imports
import {
  Box,
  Collapse,
  Fade,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Portal,
  useTheme,
} from "@mui/material";
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
import MenuIcon from "@mui/icons-material/Menu";

export const MobileNav = () => {
  const theme = useTheme();

  const [menuOpen, setMenuOpen] = useState(false); // controls whether the mobile nav menu is open and controls the backdrop
  const [openCollapse, setOpenCollapse] = useState(null); // controls which collapse is open
  return (
    <>
      {/* Menu Backdrop to close on click */}
      <Portal>
        <Fade in={menuOpen} timeout={250}>
          <Box
            position={"fixed"}
            top={0}
            left={0}
            bottom={0}
            right={0}
            zIndex={1200}
            width={"100vw"}
            height={"100vh"}
            backgroundColor={"rgba(0,0,0,0.5)"}
            onClick={() => setMenuOpen(false)}
          />
        </Fade>
      </Portal>
      <Box
        sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column" }}
      >
        {/* Top Navbar "Row" */}
        <Box
          sx={{ display: "flex", justifyContent: "flex-end" }}
          height={"100%"}
        >
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
            zIndex: 1201,
            position: "absolute",
            top: "100%",
            right: 0,
            width: "100vw",
          }}
        >
          <List
            sx={{
              backgroundColor: theme.palette.blue.primary,
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
    </>
  );
};
