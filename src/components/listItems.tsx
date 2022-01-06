import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { CalendarToday, Settings } from "@mui/icons-material";

export const MentorSidebarList = (

    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon sx={{ color:"white" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ color:"white" }}/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <CalendarToday sx={{ color:"white" }}  />
            </ListItemIcon>
            <ListItemText primary="Calender" sx={{ color:"white" }}/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AccountBalanceWalletIcon sx={{ color:"white" }} />
            </ListItemIcon>
            <ListItemText primary="Wallet" sx={{ color:"white" }} />
        </ListItem>
        <ListItem button >
            <ListItemIcon>
                <Settings sx={{ color:"white" }}/>
            </ListItemIcon>
            <ListItemText primary="Settings" sx={{ color:"white" }} />
        </ListItem>
    </div>
);

export const StudentSidebarList = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon sx={{ color:"white" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ color:"white" }}/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <CalendarToday sx={{ color:"white" }}  />
            </ListItemIcon>
            <ListItemText primary="Book a Mentor" sx={{ color:"white" }}/>
        </ListItem>
        <ListItem button >
            <ListItemIcon>
                <Settings sx={{ color:"white" }}/>
            </ListItemIcon>
            <ListItemText primary="Settings" sx={{ color:"white" }} />
        </ListItem>
    </div>
);
