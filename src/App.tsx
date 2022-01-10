import React from 'react';
import { createTheme, ThemeProvider } from "@mui/material";
import LandingPage from "./Screens/Landing Page";
import "@fontsource/poppins";
import StudentProfileSPOV from "./Screens/StudentProfileSPOV";
import MentorProfileSPOV from "./Screens/MentorProfileSPOV";
import MentorListing from './Screens/MentorListing';
import StudentProfileMPOV from "./Screens/StudentProfileMPOV";
import Calender from "./Screens/Calender";
import Wallet from "./Screens/Wallet";

const theme = createTheme({
    palette: {
        primary: {
            main: '#6E3CBC',
        },
    },
    typography: {
        fontFamily: 'Poppins',

    },


});

function App() {
    return (
        // <ThemeProvider theme={theme}>
        // <LandingPage/>
        // <MentorProfileSPOV/>
        <Wallet/>
        // <Calender/>
        // <StudentProfileSPOV/>
        // <StudentProfileMPOV/>
        // </ThemeProvider>
        // <MentorListing/>
    );

}

export default App;
