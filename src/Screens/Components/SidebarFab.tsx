import React from 'react';
import { Fab } from "@mui/material";
import { ChatBubble, ConnectWithoutContact, FactCheck, Home, Person } from "@mui/icons-material";

const SidebarFab = () => {
    return (
        <div className={'d-flex justify-content-between flex-column w-25'} style={{
            margin: 5,
            padding:5,
            top: 'auto',
            left: 20,
            bottom: 20,
            right: 'auto',
            position: 'fixed',
        }}>
            <Fab sx={{ bgcolor: '   #6E3CBC',margin:1 }}>
                <Home sx={{ color: 'white' }}/>
            </Fab>
            <Fab sx={{ bgcolor: '#6E3CBC' ,margin:1}}>
                <FactCheck sx={{ color: 'white' }}/>
            </Fab>
            <Fab sx={{ bgcolor: '#6E3CBC',margin:1 }}>
                <Person sx={{ color: 'white' }}/>
            </Fab>
            <Fab sx={{ bgcolor: '#6E3CBC' ,margin:1}}>
                <ChatBubble sx={{ color: 'white' }}/>
            </Fab>
            <Fab sx={{ bgcolor: '#6E3CBC' ,margin:1}}>
                <ConnectWithoutContact sx={{ color: 'white' }}/>
            </Fab>
        </div>
    );
};

export default SidebarFab;