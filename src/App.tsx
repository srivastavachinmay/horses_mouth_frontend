import React from 'react';
import "@fontsource/poppins";
import StudentProfileSPOV from "./Screens/StudentProfileSPOV";
import MentorProfileMPOV from "./Screens/MentorProfileMPOV";

const studentSignIn = true

function App() {
    return (
        studentSignIn ? <StudentProfileSPOV/> : <MentorProfileMPOV/>

    );
}

export default App;
