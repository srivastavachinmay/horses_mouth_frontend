import React from 'react';
import "@fontsource/poppins";
import StudentProfileSPOV from "./Screens/StudentProfileSPOV";
import MentorProfileMPOV from "./Screens/MentorProfileMPOV";
import { createTheme, ThemeProvider } from "@mui/material";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calender from "./Screens/Calender";
import Wallet from "./Screens/Wallet";
import MentorProfileSPOV from "./Screens/MentorProfileSPOV";
import StudentProfileMPOV from "./Screens/StudentProfileMPOV";
import MentorListing from "./Screens/MentorListing";
import MentorReg from "./Screens/MentorReg";
import LoginUser from "./Screens/LoginUser";
import Register from "./Screens/Register";
import LandingPage from "./Screens/Landing Page";


const theme = createTheme({
    palette: {
        primary: {
            main: '#6E3CBC',
            light: "#FFFFFF"
        },
        secondary: {
            main: '#fff',
        },
        text: {
            primary: '#6E3CBC',
        }
    },
    typography: {
        fontFamily: 'Poppins',

    },


});

const studentSignIn = false


function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="calender" element={<Calender/>}/>
                        <Route path="wallet" element={<Wallet/>}/>
                        <Route path="mentorProfileS" element={<MentorProfileSPOV/>}/>
                        <Route path="studentProfileS" element={<StudentProfileSPOV/>}/>
                        <Route path="mentorProfileM" element={<MentorProfileMPOV/>}/>
                        <Route path="studentProfileM" element={<StudentProfileMPOV/>}/>
                        <Route path="mentors" element={<MentorListing/>}/>
                        <Route path="login" element={<LoginUser/>}/>
                        <Route path="register" element={<Register/>}/>
                        <Route path="mentor/login/form" element={<MentorReg/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>

        </>
    );
}

export default App;
