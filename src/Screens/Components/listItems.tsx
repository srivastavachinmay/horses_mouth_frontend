import { CalendarToday, Settings } from "@mui/icons-material";
import AccountBalanceWalletIcon    from '@mui/icons-material/AccountBalanceWallet';
import DashboardIcon               from '@mui/icons-material/Dashboard';
import ListItem                    from '@mui/material/ListItem';
import ListItemIcon                from '@mui/material/ListItemIcon';
import ListItemText                from '@mui/material/ListItemText';
import * as React                  from 'react';
import { Link }                    from 'react-router-dom';

export const MentorSidebarList = (
    
    <div>
        <Link to={'/mentorProfile'} style={{ textDecoration: "none" }}>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon sx={{ color: "white" }}/>
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={{ color: "white" }}/>
            </ListItem>
        </Link>
        <Link to={'/calender'} style={{ textDecoration: "none" }}>
            <ListItem button>
                <ListItemIcon>
                    <CalendarToday sx={{ color: "white" }}/>
                </ListItemIcon>
                <ListItemText primary="Calender" sx={{ color: "white" }}/>
            </ListItem>
        </Link>
        <Link to={'/wallet'} style={{ textDecoration: "none" }}>
            
            <ListItem button>
                <ListItemIcon>
                    <AccountBalanceWalletIcon sx={{ color: "white" }}/>
                </ListItemIcon>
                <ListItemText primary="Wallet" sx={{ color: "white" }}/>
            </ListItem>
        </Link>
    </div>
);

export const StudentSidebarList = (
    <div>
        <Link to={'/studentProfile'} style={{ textDecoration: "none" }}>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon sx={{ color: "white" }}/>
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={{ color: "white" }}/>
            </ListItem>
        </Link>
        <Link to={'/mentors'} style={{ textDecoration: "none" }}>
            <ListItem button>
                <ListItemIcon>
                    <CalendarToday sx={{ color: "white" }}/>
                </ListItemIcon>
                <ListItemText primary="Book a Mentor" sx={{ color: "white" }}/>
            </ListItem>
        </Link>
        <ListItem button>
            <ListItemIcon>
                <Settings sx={{ color: "white" }}/>
            </ListItemIcon>
            <ListItemText primary="Settings" sx={{ color: "white" }}/>
        </ListItem>
    </div>
);
