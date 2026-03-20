// Package Imports
import { AppBar, Toolbar, CssBaseline, useTheme, Avatar } from "@mui/material";
import { Link } from "react-router";

// Project-defined Imports
import { MobileNav } from "./mobile/MobileNav";
import { DesktopNav } from "./desktop/DesktopNav";

// Images
import ZooLogo from "../../assets/ZooLogo.svg";


export const Navbar = ({ isRecruiting }) => {
  const theme = useTheme();

  return (
    <>   
      <AppBar
        id="navbar"
        position="relative"
        sx={{
          backgroundColor: theme.palette.blue.primary,
          height: {xs: "56px", sm: "64px"},
          width: "100vw",
          zIndex: 1202
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
          <MobileNav />
          {/* Desktop Navbar */}
          <DesktopNav isRecruiting={isRecruiting} />
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
