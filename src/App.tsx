import "@fontsource/poppins";
import { createTheme, ThemeProvider }   from "@mui/material";
import React                            from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calender                         from "./Screens/Calender";
import LandingPage                      from "./Screens/Landing Page";
import MentorListing                    from "./Screens/MentorListing";
import MentorProfileMPOV                from "./Screens/MentorProfileMPOV";
import MentorProfileSPOV                from "./Screens/MentorProfileSPOV";
import Register                         from "./Screens/Register";
import StudentProfileMPOV               from "./Screens/StudentProfileMPOV";
import StudentProfileSPOV               from "./Screens/StudentProfileSPOV";
import Wallet                           from "./Screens/Wallet";

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

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="calender" element={<Calender/>}/>
                        <Route path="wallet" element={<Wallet/>}/>
                        <Route path="mentorProfile/:id" element={<MentorProfileSPOV/>}/>
                        <Route path="studentProfile" element={<StudentProfileSPOV/>}/>
                        <Route path="mentorProfile" element={<MentorProfileMPOV/>}/>
                        <Route path="studentProfile/:id" element={<StudentProfileMPOV/>}/>
                        <Route path="mentors" element={<MentorListing/>}/>
                        <Route path="register" element={<Register/>}/>
                        <Route path="register" element={<Register/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        
        </>
    );
}

export default App;
