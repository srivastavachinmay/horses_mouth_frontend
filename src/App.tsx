import React from 'react';
import "@fontsource/poppins";
import StudentProfileSPOV from "./Screens/StudentProfileSPOV";
import MentorProfileMPOV from "./Screens/MentorProfileMPOV";
import StudentProfileMPOV from "./Screens/StudentProfileMPOV";
import MentorProfileSPOV from "./Screens/MentorProfileSPOV";

const studentSignIn = true

function App() {
    return (
        studentSignIn ? <MentorProfileSPOV/> : <MentorProfileMPOV/>

    );
}

export default App;
