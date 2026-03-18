// Package Imports
import React from "react";

// Project-defined Imports
import NavMenuItem from "./NavMenuItem";

export const EventNavMenuItems = ({ handleClose }) => (
  <>
    <NavMenuItem
      handleClose={handleClose}
      href={"/#events"}
      label="Our Events"
    />
    <NavMenuItem
      handleClose={handleClose}
      href={"/#calendar"}
      label="Calendar"
    />
    <NavMenuItem
      handleClose={handleClose}
      href={"/#past-events"}
      label="Past Events"
    />
    <NavMenuItem
      handleClose={handleClose}
      href={"/events-gallery"}
      label="Events Gallery"
    />
  </>
);

export default EventNavMenuItems;
