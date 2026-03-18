// Package Imports
import { Box } from "@mui/material";

// Project-defined Imports
import NonPopoverNavItem from "./NonPopoverNavItem";
import NavMenuPopover from "./popover/NavMenuPopover";
import {
  CouncilNavMenuItems,
  EventNavMenuItems,
  SponsorNavMenuItems,
} from "../menu-items";

export const DesktopNav = ({ isRecruiting }) => {
  const variant = "body1";
  return (
    <Box
      sx={{ display: { xs: "none", md: "flex" } }}
      height={"100%"}
      alignItems={"center"}
    >
      <NonPopoverNavItem variant={variant} label="About" href="/#about-zoo" />

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
  );
};
