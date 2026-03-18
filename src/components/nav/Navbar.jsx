// Package Imports
import { AppBar, Toolbar, CssBaseline, useTheme, Avatar, Box, Fade } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router";

// Project-defined Imports
import { MobileNav } from "./mobile/MobileNav";
import { DesktopNav } from "./desktop/DesktopNav";

// Images
import ZooLogo from "../../assets/ZooLogo.svg";


export const Navbar = ({ isRecruiting }) => {
  const theme = useTheme();

  const [menuOpen, setMenuOpen] = useState(false); // controls whether the mobile nav menu is open and controls the backdrop



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
          <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          {/* Desktop Navbar */}
          <DesktopNav />
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
