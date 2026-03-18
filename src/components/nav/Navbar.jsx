// TODO: Create mobile nav bar

// Package Imports
import { AppBar, Toolbar, CssBaseline, useTheme, Avatar, Box, IconButton, Collapse, List, ListItemButton, ListItemText, Fade } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react";
import { Link } from "react-router";

// Project-defined Imports
import {
  CouncilNavMenuItems,
  EventNavMenuItems,
  SponsorNavMenuItems,
} from "./menu-items";
import NonPopoverNavItem from "./NonPopoverNavItem";
import NavMenuPopover from "./popover/NavMenuPopover";
import CollapseNavItem from "./CollapseNavItem";

// Images
import ZooLogo from "../../assets/ZooLogo.svg";


export const Navbar = ({ isRecruiting }) => {
  const theme = useTheme();
  const variant = "body1";

  const [menuOpen, setMenuOpen] = useState(false) // controls whether the mobile nav menu is open and controls the backdrop
  const [openCollapse, setOpenCollapse] = useState(null) // controls which collapse is open



  return (
    <>
      {/* Backdrop for when mobile nav menu is open */}
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
      <AppBar
        id="navbar"
        position="relative"
        sx={{
          backgroundColor: theme.palette.blue.primary,
          height: {xs: "56px", sm: "64px"},
          width: "100vw",
          zIndex: 1200
        }}
      >
        <CssBaseline />
        <Toolbar
          sx={{
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Link
            to={"/meaning-of-zoo"}
            style={{
              textDecoration: "none",
            }}
          >
            <Avatar alt="Zoo Logo" src={ZooLogo} />
          </Link>
            
          {/* Mobile Navbar */}
          <Box
            sx={{display: {xs: "flex", md: "none"}, flexDirection: "column"}}
            height={"100%"}
          >
            {/* Top Navbar "Row" */}
            <Box
              sx={{ display: "flex", justifyContent: "flex-end"}}
              height={"100%"}
            >
              <IconButton sx={{
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
                width: "100vw"
              }}
            >
              <List
                sx={{
                  backgroundColor: theme.palette.blue.primary,
                  zIndex: 1200,
                }}
              >
                <ListItemButton component={Link} to={"/#about-zoo"} onClick={() => setMenuOpen(false)}>
                  <ListItemText primary="About"/>
                </ListItemButton>
                <CollapseNavItem id="council" buttonText="Council" setMainMenuOpen={() => setMenuOpen(false)} openCollapse={openCollapse} setOpenCollapse={setOpenCollapse} items={[
                  <CouncilNavMenuItems />
                ]}/>
                <CollapseNavItem id="events" buttonText="Events" setMainMenuOpen={() => setMenuOpen(false)} openCollapse={openCollapse} setOpenCollapse={setOpenCollapse} items={[
                  <EventNavMenuItems />
                ]}/>
                <CollapseNavItem id="sponsors" buttonText="Sponsors" setMainMenuOpen={() => setMenuOpen(false)} openCollapse={openCollapse} setOpenCollapse={setOpenCollapse} items={[
                  <SponsorNavMenuItems />
                ]}/>
                <ListItemButton component={Link} to={"/#contact-us"} onClick={() => setMenuOpen(false)}>
                  <ListItemText primary="Contact Us"/>
                </ListItemButton>
              </List>
            </Collapse>
            
          </Box>
          {/* Desktop Navbar */}
          <Box sx={{ display: {xs: "none", md: "flex"} }} height={"100%"} alignItems={"center"}>
            <NonPopoverNavItem
              variant={variant}
              label="About"
              href="/#about-zoo"
            />

            <NavMenuPopover
              variant={variant}
              menuId={"council-menu"}
              buttonLabel={"Council"}
              buttonId={"council-nav-button"}
            >
              <CouncilNavMenuItems isRecruiting={isRecruiting} />
            </NavMenuPopover>

            <NavMenuPopover
              variant={variant}
              menuId={"events-menu"}
              buttonLabel={"Events"}
              buttonId={"events-nav-button"}
            >
              <EventNavMenuItems />
            </NavMenuPopover>

            <NavMenuPopover
              variant={variant}
              menuId={"sponsor-menu"}
              buttonLabel={"Sponsors"}
              buttonId={"sponsor-nav-button"}
            >
              <SponsorNavMenuItems />
            </NavMenuPopover>

            <NonPopoverNavItem
              variant={variant}
              label="Contact Us "
              href="/#contact-us"
            />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
