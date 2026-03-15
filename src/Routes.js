// Package imported components
import { Route, Routes as ReactRoutes } from "react-router";
import { ThemeProvider } from "@mui/material";

// Project-defined components
import { rootTheme } from "./components/Theme";
import { Navbar } from "./components/nav/Navbar";
import LandingPage from "./pages/LandingPage";
import EventPage from "./pages/EventPage";
import ZooMeaningPage from "./pages/ZooMeaningPage";
import ScrollToAnchor from "./components/nav/ScrollToAnchor";

// Variable to manually update when we are no longer recruiting. Improved approach to commenting out code as needed :)
const isRecruiting = true;

export const Routes = () => {
    return (
        <ThemeProvider theme={rootTheme}>
            <ScrollToAnchor />
            <Navbar id="back-to-top-anchor" isRecruiting={isRecruiting} />
            <ReactRoutes>
                <Route path="/" element={<LandingPage isRecruiting={isRecruiting} />} />
                <Route path="/past-events" element={<EventPage />} />
                <Route path="/meaning-of-zoo" element={<ZooMeaningPage />} />
            </ReactRoutes>
        </ThemeProvider>
    );
};