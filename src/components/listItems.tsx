import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { CalendarToday, Notifications, Settings } from "@mui/icons-material";

export const mainListItems = (

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
        <ListItem button>
            <ListItemIcon>
                <Notifications sx={{ color:"white" }}/>
            </ListItemIcon>
            <ListItemText primary="Notifications" sx={{ color:"white" }} />
        </ListItem>
        <ListItem button >
            <ListItemIcon>
                <Settings sx={{ color:"white" }}/>
            </ListItemIcon>
            <ListItemText primary="Settings" sx={{ color:"white" }} />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItem>
    </div>
);
