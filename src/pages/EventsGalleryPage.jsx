// Package Imports
import { Typography, useTheme, Container } from "@mui/material";

const EventsGalleryPage = () => {
  const theme = useTheme();

  return (
    <div
      style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
    >
      <Container maxWidth="md" style={{ margin: theme.spacing(6, 0, 7) }}>
        <Typography variant="h4">Past Event Gallery</Typography>
        <Typography variant="body1" paragraph>
          Take a scroll to see our various past events.
        </Typography>
      </Container>
    </div>
  );
};

export default EventsGalleryPage;
