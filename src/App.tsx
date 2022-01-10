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
import MentorProfileMPOV from "./Screens/MentorProfileMPOV";

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

const studentSignIn = false

function App() {
    return (
        studentSignIn ? <StudentProfileSPOV/> : <MentorProfileSPOV/>
    );

}

export default App;
