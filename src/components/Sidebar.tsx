import React from 'react';
import { Nav } from "react-bootstrap";

const Sidebar = () => {
    return (
        <div className={'d-flex flex-column w-25'} style={{ width: '200px' }}>
            <Nav variant="pills" className="flex-column m-3"  defaultActiveKey="dashboard">
                <Nav.Item>
                    <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="bookAMentor">Book a Mentor</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="settings">Settings</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="notifications">Notifications</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Sidebar;