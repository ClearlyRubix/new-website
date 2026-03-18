// Package Imports
import React from "react";
import { Typography, Box, Button, useTheme, Container } from "@mui/material";

// Project-defined Imports
import { ExecSubSection } from "./execs/ExecSubSection";
import { CommSubSection } from "./comms/CommSubSection";
import { StyledButton } from "../buttons/StyledButton";

export const CouncilSection = ({ isRecruiting }) => {
  const theme = useTheme();

  return (
    <div
      style={{
        background: theme.palette.white.secondary,
        padding: theme.spacing(0, 0, 5),
      }}
    >
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            position: "relative",
            display: "block",
            width: "calc(150% + 1.3px)",
            height: "90px",
          }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            style={{ fill: "#fff" }}
          ></path>
        </svg>
      </div>

      <Container maxWidth="md">
        <ExecSubSection />
        <CommSubSection isRecruiting={isRecruiting} />
        {isRecruiting && (
          <Box id="join-team" sx={{ textAlign: "right" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  padding: theme.spacing(5, 0, 3),
                  width: "51%",
                }}
              >
                <b>If you're interested in joining ZOO</b> as one of the above
                roles, click the button to download our form and submit it to{" "}
                <a href={`mailto:execs@zooengg.ca`}>execs@zooengg.ca</a> to
                apply!
              </Typography>
              <StyledButton>Download Form</StyledButton>
            </div>
          </Box>
        )}
      </Container>
    </div>
  );
};
