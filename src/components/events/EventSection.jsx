// Package Imports
import React from "react";
import { Box, Container, Typography, useTheme, Grid } from "@mui/material";

// Project-defined Components
import { Calendar } from "./Calendar";
import { EventCard } from "./EventCard";
import { eventList } from "./EventInfo";
import { StyledButton } from "../buttons/StyledButton";

export const EventSection = () => {
  const theme = useTheme();

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            display: "block",
            width: "calc(115% + 1.3px)",
            height: " 200px",
            transform: "rotateY(180deg)",
          }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            style={{ fill: "#F8F8F8" }}
          ></path>
        </svg>
      </div>

      <Container maxWidth="md">
        <Typography variant="h4" id="events">
          Our Events
        </Typography>
        <Typography variant="body1" paragraph>
          ZOO is constantly working hard to bring the student population new
          events, along with some other classics, that will ultimately benefit
          them socially, academically, and professionally.
        </Typography>
        <Typography variant="body1" paragraph>
          The following is a non-exhaustive list of some such events we
          organize!
        </Typography>

        {/* Renders the multiple buttons that can be clicked on to reveal more info on the events */}
        <Grid
          container
          rowSpacing={3}
          columnSpacing={3}
          columns={3}
          sx={{
            justifyContent: "center",
          }}
        >
          {eventList.map((event, index) => {
            return (
              <Grid
                item
                key={index}
                xs={2}
                md={1}
                sx={{
                  margin: theme.spacing(1, 0, 3),
                  width: theme.spacing(20),
                  justifyItems: "center",
                  padding: 0,
                }}
              >
                <EventCard icon={event?.icon} eventName={event?.name} />
              </Grid>
            );
          })}
        </Grid>

        <Box sx={{ justifyContent: "center", display: "flex" }}>
          <Box sx={{ textAlign: "center", width: theme.spacing(46.25) }}>
            <Typography variant="h5">...and More!</Typography>
            <Typography variant="body1" sx={{ fontStyle: "italic" }} paragraph>
              If you're curious to see what's up and coming from ZOO, check out
              our calendar below!
            </Typography>
          </Box>
        </Box>

        <Calendar />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            textAlign: "right",
            margin: theme.spacing(5, 0, 0),
          }}
        >
          <Typography id="past-events" variant="h4">
            Our Past Events
          </Typography>
          <Typography variant="body1" sx={{ width: "60%" }} paragraph>
            Interested in our past events? Check our event and activity gallery
            for a look into our other successful events
          </Typography>
          <StyledButton href="/events-gallery">
            VIEW Events GALLERY
          </StyledButton>
        </div>
      </Container>
    </>
  );
};
