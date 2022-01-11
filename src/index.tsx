import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calender from "./Screens/Calender";
import Wallet from "./Screens/Wallet";
import MentorProfileSPOV from "./Screens/MentorProfileSPOV";
import StudentProfileSPOV from "./Screens/StudentProfileSPOV";
import StudentProfileMPOV from "./Screens/StudentProfileMPOV";
import MentorProfileMPOV from "./Screens/MentorProfileMPOV";
import MentorListing from "./Screens/MentorListing";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#6E3CBC',
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

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="calender" element={<Calender/>}/>
                <Route path="wallet" element={<Wallet/>}/>
                <Route path="mentorProfileS" element={<MentorProfileSPOV/>}/>
                <Route path="studentProfileS" element={<StudentProfileSPOV/>}/>
                <Route path="mentorProfileM" element={<MentorProfileMPOV/>}/>
                <Route path="studentProfileM" element={<StudentProfileMPOV/>}/>
                <Route path="mentors" element={<MentorListing/>}/>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
);