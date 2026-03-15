// TODO: Create mobile nav bar

// Package Imports
import { AppBar, Toolbar, CssBaseline, useTheme, Avatar, Box, IconButton, SwipeableDrawer, List, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react";


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
import { Link } from "react-router";


const clickScroll = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const Navbar = ({ isRecruiting }) => {
  const theme = useTheme();
  const variant = "body1";

  const [menuOpen, setMenuOpen] = useState(false)


  return (
    <AppBar
      id="navbar"
      position="static"
      sx={{
        backgroundColor: theme.palette.blue.primary,
      }}
    >
      <CssBaseline />
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <a
          href={"/meaning-of-zoo"}
          style={{
            textDecoration: "none",
          }}
        >
          <Avatar alt="Zoo Logo" src={ZooLogo} />
        </a>
          
        {/* Mobile Navbar */}
        <Box sx={{
          display: {xs: "flex", md: "none"}
        }}>
          <IconButton sx={{
            ".MuiSvgIcon-root": {
              color: theme.palette.white.primary,
            },
          }}
          onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
          anchor={"right"}
          open={menuOpen}
          onOpen={() => setMenuOpen(true)}
          onClose={() => setMenuOpen(false)}
          disableSwipeToOpen={false}
          disableScrollLock={true}
          >
            <List>
              <ListItemButton component={Link} to={"/#about-zoo"} onClick={() => setMenuOpen(false)}>
                <ListItemText primary="About"/>
              </ListItemButton>
              <CollapseNavItem buttonText="Council" items={[
                <CouncilNavMenuItems />
              ]}/>
              <CollapseNavItem buttonText="Events" items={[
                <EventNavMenuItems />
              ]}/>
              <CollapseNavItem buttonText="Sponsors" items={[
                <SponsorNavMenuItems />
              ]}/>
              <ListItemButton component={Link} to={"/#contact-us"} onClick={() => setMenuOpen(false)}>
                <ListItemText primary="Contact Us"/>
              </ListItemButton>
            </List>

          </SwipeableDrawer>
        </Box>
        {/* Desktop Navbar */}
        <Box sx={{ display: {xs: "none", md: "flex"} }}>
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
  );
};
export default Navbar;
