import React from 'react';
import Sidebar from "./components/Sidebar";
import StudentsPage from "./components/StudentsPage";

function App() {
    return (
        <div className="d-inline-flex">
            <Sidebar/>
            <StudentsPage/>
        </div>
    );
}

export default App;
