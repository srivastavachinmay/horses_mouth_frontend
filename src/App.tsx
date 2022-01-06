import React from 'react';
import { createTheme, ThemeProvider } from "@mui/material";
import LandingPage from "./components/Landing Page";
import "@fontsource/poppins";
import Sidebar from "./components/MentorListing";
import StudentProfileSPOV from "./components/StudentProfileSPOV";
import MentorProfileSPOV from "./components/MentorProfileSPOV";
import MentorListing from './components/MentorListing';

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
        //      {/* <LandingPage/>  */}
             
        // <StudentProfileSPOV/>
        
        // </ThemeProvider> 
        // <Sidebar/>
        // <MentorProfileSPOV/>
        <MentorListing/>
    );

}

export default App;
