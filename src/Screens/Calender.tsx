import React from "react";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import {
    Avatar,
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    ToggleButton,
    ToggleButtonGroup
} from "@mui/material";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { MentorSidebarList } from "./Components/listItems";
import Container from "@mui/material/Container";
import MuiDrawer from "@mui/material/Drawer";

const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: ( prop ) => prop !== "open",
})(( { theme, open } ) => ( {
    "& .MuiDrawer-paper": {
        backgroundColor: "#7267CB",
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: "border-box",
        ...( !open && {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [ theme.breakpoints.up("sm") ]: {
                width: theme.spacing(9),
            },
        } ),
    },
} ));

const mdTheme = createTheme();

const Calender = () => {

    const [day, setDay] = React.useState('');
    const [formats, setFormats] = React.useState(() => ['Sunday']);

    const handleFormat = (
        event: React.MouseEvent<HTMLElement>,
        newFormats: string[] ) => {
        setFormats(newFormats);
    };
    const handleChange = ( event: SelectChangeEvent ) => {
        setDay(event.target.value);
    };
    const selectCSS = {
        alignSelf: "center",
        justifyContent: "center",
        color: '#6E3CBC',
        fontWeight: "bold"
    }
    const chipCSS = {
        bgcolor: "white",
        width: 340,
        height: 45,
        margin: 1,
        border: "none",
        fontSize: 15,
        color: "#6E3CBC",
        fontWeight: "bolder",
        borderRadius: 2,
        ":hover": {
            bgcolor: "#6E3CBC",
            color: "white",
        },
    };
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline/>
                {/*"Drawer"*/}
                <Drawer variant="permanent" open={true} sx={{ bgcolor: "#7267CB" }}>
                    <Avatar sx={{ alignSelf: "center", margin: 2 }}/>
                    <Typography textAlign={"center"} sx={{ color: "white" }}>
                        John Doe
                    </Typography>
                    <List sx={{ justifyContent: "center", m: 2, ml: 4 }}>{MentorSidebarList}</List>
                </Drawer>

                <Box
                    component="main"
                    sx={{

                        flexGrow: 1,
                        height: "100vh",
                        overflow: "auto",
                    }}
                >
                    <Container
                        maxWidth="xl"
                        sx={{
                            p: 5,

                            height: "100%",
                            display: "flex",
                            justifyContent: "center"
                        }}>
                        <Stack width={'90%'} alignItems={"center"}>
                            <Typography color={'#6E3CBC'} fontWeight={700} sx={{
                                textAlign: "start",
                                pt: 2,
                                pb: 2,
                                width: '100%'
                            }}>India Heat zone 24 hr timeline</Typography>
                            <Box sx={{
                                color: '#6E3CBC',
                                height: 236,
                                border: 2,
                                width: '100%',
                                pt: 2,
                                pb: 1,
                                background: 'linear-gradient(90deg, #E38686 0%, rgba(205, 62, 62, 0.536687) 35.06%, rgba(255, 168, 0, 0.316841) 59.66%, rgba(112, 255, 0, 0.165602) 96.43%)'
                            }}/>
                            <Box display={"flex"} width={'100%'} margin={2} justifyContent={"space-around"}>
                                <Box display={"flex"}>
                                    <Box display={"flex"} justifyContent={'space-around'}
                                         sx={{
                                             bgcolor: '#F57676',
                                             width: 18,
                                             mr: 1,
                                             height: 18
                                         }}/>
                                    <Typography color={'#6E3CBC'} fontSize={12} fontWeight={700} lineHeight={1}>Red
                                        zones: most no. of
                                        sessions schedeuled </Typography>
                                </Box>

                                <Box display={"flex"}>
                                    <Box display={"flex"} justifyContent={'space-around'}
                                         sx={{
                                             bgcolor: '#FAFF00',
                                             width: 18,
                                             mr: 1,
                                             height: 18
                                         }}/>
                                    <Typography color={'#6E3CBC'} fontSize={12} fontWeight={700} lineHeight={1}>yellow
                                        zones: moderate no. of sessions schedeuled </Typography>
                                </Box>

                                <Box display={"flex"}>
                                    <Box display={"flex"} justifyContent={'space-around'}
                                         sx={{
                                             bgcolor: '#52FF00',
                                             width: 18,
                                             mr: 1,
                                             height: 18
                                         }}/>
                                    <Typography color={'#6E3CBC'} fontSize={12} fontWeight={700} lineHeight={1}>green
                                        zones: least no. of sessions schedeuled </Typography>
                                </Box>
                            </Box>
                            <Typography sx={{
                                fontSize: 18,
                                fontWeight: 700,
                                color: '#6E3CBC',
                                textAlign: "start",
                                width: '100%'
                            }}>
                                Schedeule your available slots
                            </Typography>
                            <Box display={"flex"} flexWrap={"wrap"} width={'100%'}
                                 justifyContent={"space-around"}>
                                <Stack width={'50%'} padding={2}>
                                    <Typography sx={{
                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: '#7267CB',
                                        textAlign: "center",
                                        width: '100%'
                                    }}>
                                        Your time zone 24 hr format
                                    </Typography>
                                    <FormControl variant={"standard"}
                                                 sx={{ m: 1, bgcolor: '#6E3CBC', borderRadius: 3 }}>

                                        <Select
                                            value={day}
                                            defaultValue={"Day"}
                                            inputProps={{
                                                underline: {
                                                    "&&&:before": {
                                                        borderBottom: "none"
                                                    },
                                                    "&&:after": {
                                                        borderBottom: "none"
                                                    },
                                                },
                                            }}
                                            sx={{
                                                textAlignLast: "center",
                                                alignSelf: "center",
                                                justifySelf: "center",
                                                color: 'white',
                                                width: "100%",
                                                fontWeight: "bold"
                                            }}
                                            onChange={handleChange}
                                        >
                                            <MenuItem sx={selectCSS} value={"Sunday"}>Sunday</MenuItem>
                                            <MenuItem sx={selectCSS} value={"Monday"}>Monday</MenuItem>
                                            <MenuItem sx={selectCSS} value={"Tuesday"}>Tuesday</MenuItem>
                                            <MenuItem sx={selectCSS} value={"Wednesday"}>Wednesday</MenuItem>
                                            <MenuItem sx={selectCSS} value={"Thursday"}>Thursday</MenuItem>
                                            <MenuItem sx={selectCSS} value={"Friday"}>Friday</MenuItem>
                                            <MenuItem sx={selectCSS} value={"Saturday"}>Saturday</MenuItem>

                                        </Select>
                                    </FormControl>

                                    <ToggleButtonGroup
                                        value={formats}
                                        onChange={handleFormat}
                                        color={"primary"}
                                    >
                                        <ToggleButton value="Sunday">
                                            S
                                        </ToggleButton>
                                        <ToggleButton value="Monday" sx={{
                                            borderRadius: '50%'
                                        }}>
                                            M
                                        </ToggleButton>
                                        <ToggleButton value="Tuesday">
                                            T
                                        </ToggleButton>
                                        <ToggleButton value="Wednesday">
                                            W
                                        </ToggleButton>
                                        <ToggleButton value="Thursday">
                                            T
                                        </ToggleButton>
                                        <ToggleButton value="Friday">
                                            F
                                        </ToggleButton>
                                        <ToggleButton value="Saturday">
                                            S
                                        </ToggleButton>


                                    </ToggleButtonGroup>
                                </Stack>
                                <Stack width={'50%'} padding={2}>
                                    <Typography sx={{
                                        fontSize: 18,
                                        fontWeight: 700,
                                        color: '#7267CB',
                                        textAlign: "center",
                                        width: '100%'
                                    }}>
                                        Indian timezone 24 hr format
                                    </Typography>
                                    <FormControl variant={"standard"}
                                                 sx={{ m: 1, bgcolor: '#6E3CBC', borderRadius: 3 }}>

                                        <Select
                                            value={day}
                                            defaultValue={"Day"}
                                            inputProps={{
                                                underline: {
                                                    "&&&:before": {
                                                        borderBottom: "none"
                                                    },
                                                    "&&:after": {
                                                        borderBottom: "none"
                                                    },
                                                },
                                            }}
                                            sx={{
                                                textAlignLast: "center",
                                                alignSelf: "center",
                                                justifySelf: "center",
                                                color: 'white',
                                                width: "100%",
                                                fontWeight: "bold"
                                            }}
                                            onChange={handleChange}
                                        >
                                            <MenuItem sx={selectCSS} value={"Sunday"}>Sunday</MenuItem>
                                            <MenuItem sx={selectCSS} value={"Monday"}>Monday</MenuItem>
                                            <MenuItem sx={selectCSS} value={"Tuesday"}>Tuesday</MenuItem>
                                            <MenuItem sx={selectCSS} value={"Wednesday"}>Wednesday</MenuItem>
                                            <MenuItem sx={selectCSS} value={"Thursday"}>Thursday</MenuItem>
                                            <MenuItem sx={selectCSS} value={"Friday"}>Friday</MenuItem>
                                            <MenuItem sx={selectCSS} value={"Saturday"}>Saturday</MenuItem>

                                        </Select>
                                    </FormControl>
                                </Stack>
                            </Box>


                        </Stack>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Calender;