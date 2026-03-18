// Package Imports
import React from "react";
import { Grid, Typography, useTheme } from "@mui/material";

// Project-defined Imports
import { CommDialogButton } from "./CommDialogButton";
import { commInfo } from "../CouncilInfo";

export const CommSubSection = ({ isRecruiting }) => {
  const theme = useTheme();

  return (
    <>
      <Typography id="comms" variant="h4">
        ZOO Commissioners
      </Typography>
      <Typography variant="body1" sx={{ fontStyle: "italic" }} paragraph>
        The work we do would not be possible without the help of our many
        commissioners. The following are all the Society's Commissioner
        positions, and those taking on the responsibilities for the school year!
      </Typography>

      {/* Renders the multiple buttons that can be clicked on to reveal more data on commissioner roles and responsibilities */}
      <Grid container columns={2} sx={{ margin: "unset", textAlign: "center" }}>
        {commInfo.map((comm, index) => {
          return (
            <Grid
              item
              key={index}
              xs={2}
              md={1}
              sx={{ margin: theme.spacing(1, 0) }}
            >
              <CommDialogButton
                role={comm.commRole}
                description={comm.commDescription}
                names={comm.commNames}
                isRecruiting={isRecruiting}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
