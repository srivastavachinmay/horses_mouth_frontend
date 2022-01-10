import React, { useEffect, useState } from "react";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import {
    Avatar,
    Button,
    Card,
    CardHeader,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    List,
    ListItem,
    Stack,
    Typography,
} from "@mui/material";
import { StudentSidebarList } from "./Components/listItems";
import Grid from "@mui/material/Grid";
import { LinkedIn, Verified } from "@mui/icons-material";
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

const StudentProfileSPOV = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    useEffect(() => {
        console.log(open)
    }, [open])

    const chipCSS = {
        bgcolor: "white",
        width: 200,
        height: 45,
        margin: 1,
        border: "none",
        fontSize: 15,
        color: "#6E3CBC",
        fontWeight: "bolder",
        borderRadius: 20,
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
                    <List>{StudentSidebarList}</List>
                </Drawer>


                    <Box
                        component="main"
                        sx={{
                            backgroundColor: ( theme ) =>
                                theme.palette.mode === "light"
                                    ? theme.palette.grey[ 100 ]
                                    : theme.palette.grey[ 900 ],
                            flexGrow: 1,
                            height: "100vh",
                            overflow: "auto",
                        }}
                    >
                        <Container
                            maxWidth="xl"
                            sx={{
                                p: 3,
                                backgroundColor: "#EFEDFF",
                                height: "100%",
                                display: "flex",
                            }}
                        >
                            <Grid
                                xs={12}
                                md={6}
                                xl={7}
                                rowGap={5}
                                display={"flex"}
                                alignItems={"center"}
                                flexDirection={"column"}
                                marginTop={10}
                                bgcolor={"#EFEDFF"}
                            >
                                {/*<Masonry columns={{ md: 1, xl: 1 }} spacing={3} sx={{ mt: 10 }}>*/}
                                <Box
                                    sx={{
                                        p: 2,
                                        pl: 5,
                                        width: 600,
                                        // bgcolor: "red",
                                        borderRadius: 3,
                                        display: "flex",
                                        flexDirection: "row",
                                        // height: 200,
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            width: 200,
                                            height: 200,
                                            borderColor: "#6E3CBC",
                                            borderWidth: 5,
                                        }}
                                    />
                                    <Box
                                        sx={{ display: "flex", ml: 5, flexWrap: "wrap", width: 250 }}
                                    >
                                        <Typography
                                            fontWeight={"bolder"}
                                            fontSize={40}
                                            color={"#6E3CBC"}
                                        >
                                            John Doe
                                        </Typography>
                                        <Verified
                                            sx={{
                                                width: 52,
                                                height: 52,
                                                color: "#0FA958",
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                display: "flex",
                                                width: 280,
                                                height: 45,
                                                color: "white",
                                                bgcolor: "#6E3CBC",
                                                borderRadius: 3,
                                                justifyContent: "center",
                                                alignItems: "center",
                                                ":hover": {
                                                    color: "#6E3CBC",
                                                    bgcolor: "white",
                                                },
                                            }}
                                        >
                                            <Typography fontWeight={"bold"} fontSize={17}>
                                                Edit Profile
                                            </Typography>

                                        </Box>
                                        <Typography
                                            fontWeight={"bold"}
                                            fontSize={25}
                                            color={"#6E3CBC"}
                                        >
                                            Connected Profiles
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                width: 280,
                                                height: 45,
                                                bgcolor: "white",
                                                color: "#6E3CBC",
                                                borderRadius: 3,
                                                justifyContent: "center",
                                                alignItems: "center",
                                                ":hover": {
                                                    bgcolor: "#6E3CBC",
                                                    color: "white",
                                                },
                                            }}
                                        >
                                            <Typography fontWeight={"bold"} fontSize={17}>
                                                Linkedin
                                            </Typography>
                                            <LinkedIn
                                                sx={{
                                                    width: 16,
                                                    height: 16,
                                                    // mt: 0.7,
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                </Box>

                                <Grid
                                    item
                                    sx={{
                                        zIndex: 1,
                                        position: "relative",
                                        bgcolor: "white",
                                        p: 2,
                                        pl: 5,
                                        width: 600,
                                        borderRadius: 3,
                                        display: "flex",
                                        flexDirection: "column",
                                        height: 320,
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <Typography fontWeight={"bold"} color={"#6E3CBC"} fontSize={30}>
                                        About me
                                    </Typography>

                                    <Typography
                                        fontWeight={"normal"}
                                        color={"#6E3CBC"}
                                        fontSize={19}
                                        sx={{
                                            pt: 2,
                                            width: 463.73,
                                            height: 215.23,
                                            left: 361.06,
                                            top: 563.34,
                                        }}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Stack spacing={3}>
                                <Box
                                    sx={{
                                        zIndex: 1,
                                        position: "relative",
                                        top: 100,
                                        width: 360,
                                        borderColor: "black",
                                        borderWidth: 1,
                                        borderRadius: 3,
                                        display: "flex",
                                        flexDirection: "column",
                                        height: 560,
                                        bgcolor: "#EFEDFF",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <Box display={"flex"} justifyContent={"space-between"}>
                                        <Typography
                                            color={"#6E3CBC"}
                                            fontSize={15}
                                            fontWeight={700}
                                            padding={1}
                                        >
                                            Upcoming appointments
                                        </Typography>
                                        <Typography
                                            onClick={handleClickOpen}
                                            color={"#6E3CBC"}
                                            fontSize={15}
                                            fontWeight={700}
                                            sx={{ cursor: "pointer" }}
                                            padding={1}
                                        >
                                            See all
                                        </Typography>
                                    </Box>

                                    <List sx={{ overflowY: "auto", height: 324 }}>
                                        <Card sx={{ borderRadius: 5, m: 0.5 }}>
                                            <CardHeader
                                                avatar={<Avatar/>}
                                                title={"You have a session on-"}
                                                titleTypographyProps={{
                                                    sx: {
                                                        color: "#6E3CBC",
                                                        fontWeight: 700,
                                                        fontSize: 12,
                                                    },
                                                }}
                                                subheaderTypographyProps={{
                                                    sx: {
                                                        color: "#6E3CBC",
                                                        fontWeight: 700,
                                                        fontSize: 12,
                                                    },
                                                }}
                                                subheader={"8th November from 8:30 to 9:30"}
                                            />
                                        </Card>
                                        <Card sx={{ borderRadius: 5, m: 0.5 }}>
                                            <CardHeader
                                                avatar={<Avatar/>}
                                                title={"You have a session on-"}
                                                titleTypographyProps={{
                                                    sx: {
                                                        color: "#6E3CBC",
                                                        fontWeight: 700,
                                                        fontSize: 12,
                                                    },
                                                }}
                                                subheaderTypographyProps={{
                                                    sx: {
                                                        color: "#6E3CBC",
                                                        fontWeight: 700,
                                                        fontSize: 12,
                                                    },
                                                }}
                                                subheader={"8th November from 8:30 to 9:30"}
                                            />
                                        </Card>
                                        <Card sx={{ borderRadius: 5, m: 0.5 }}>
                                            <CardHeader
                                                avatar={<Avatar/>}
                                                title={"You have a session on-"}
                                                titleTypographyProps={{
                                                    sx: {
                                                        color: "#6E3CBC",
                                                        fontWeight: 700,
                                                        fontSize: 12,
                                                    },
                                                }}
                                                subheaderTypographyProps={{
                                                    sx: {
                                                        color: "#6E3CBC",
                                                        fontWeight: 700,
                                                        fontSize: 12,
                                                    },
                                                }}
                                                subheader={"8th November from 8:30 to 9:30"}
                                            />
                                        </Card>
                                        <Card sx={{ borderRadius: 5, m: 0.5 }}>
                                            <CardHeader
                                                avatar={<Avatar/>}
                                                title={"You have a session on-"}
                                                titleTypographyProps={{
                                                    sx: {
                                                        color: "#6E3CBC",
                                                        fontWeight: 700,
                                                        fontSize: 12,
                                                    },
                                                }}
                                                subheaderTypographyProps={{
                                                    sx: {
                                                        color: "#6E3CBC",
                                                        fontWeight: 700,
                                                        fontSize: 12,
                                                    },
                                                }}
                                                subheader={"8th November from 8:30 to 9:30"}
                                            />
                                        </Card>
                                    </List>
                                </Box>
                                <Box
                                    sx={{
                                        zIndex: 1,
                                        position: "relative",
                                        top: 100,
                                        width: 360,
                                        borderColor: "black",
                                        borderWidth: 1,
                                        borderRadius: 3,
                                        display: "flex",
                                        flexDirection: "column",
                                        height: 560,
                                        bgcolor: "#EFEDFF",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <Box display={"flex"} justifyContent={"space-between"}>
                                        <Typography
                                            color={"#6E3CBC"}
                                            fontSize={15}
                                            fontWeight={700}
                                            padding={1}
                                        >
                                            Past appointments
                                        </Typography>
                                        <Box onClick={handleClickOpen}>
                                            <Typography
                                                color={"#6E3CBC"}
                                                fontSize={15}
                                                sx={{ cursor: "pointer" }}
                                                fontWeight={700}
                                                padding={1}
                                            >
                                                See all
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <List sx={{ overflowY: "auto", height: 150 }}>
                                        <Card sx={{ borderRadius: 5, m: 0.5 }}>
                                            <CardHeader
                                                avatar={<Avatar/>}
                                                title={"You have a session on-"}
                                                titleTypographyProps={{
                                                    sx: {
                                                        color: "#6E3CBC",
                                                        fontWeight: 700,
                                                        fontSize: 12,
                                                    },
                                                }}
                                                subheaderTypographyProps={{
                                                    sx: {
                                                        color: "#6E3CBC",
                                                        fontWeight: 700,
                                                        fontSize: 12,
                                                    },
                                                }}
                                                subheader={"8th November from 8:30 to 9:30"}
                                            />
                                        </Card>
                                        <Card sx={{ borderRadius: 5, m: 0.5 }}>
                                            <CardHeader
                                                avatar={<Avatar/>}
                                                title={"You have a session on-"}
                                                titleTypographyProps={{
                                                    sx: {
                                                        color: "#6E3CBC",
                                                        fontWeight: 700,
                                                        fontSize: 12,
                                                    },
                                                }}
                                                subheaderTypographyProps={{
                                                    sx: {
                                                        color: "#6E3CBC",
                                                        fontWeight: 700,
                                                        fontSize: 12,
                                                    },
                                                }}
                                                subheader={"8th November from 8:30 to 9:30"}
                                            />
                                        </Card>
                                        <Card sx={{ borderRadius: 5, m: 0.5 }}>
                                            <CardHeader
                                                avatar={<Avatar/>}
                                                title={"You have a session on-"}
                                                titleTypographyProps={{
                                                    sx: {
                                                        color: "#6E3CBC",
                                                        fontWeight: 700,
                                                        fontSize: 12,
                                                    },
                                                }}
                                                subheaderTypographyProps={{
                                                    sx: {
                                                        color: "#6E3CBC",
                                                        fontWeight: 700,
                                                        fontSize: 12,
                                                    },
                                                }}
                                                subheader={"8th November from 8:30 to 9:30"}
                                            />
                                        </Card>
                                    </List>
                                </Box>
                            </Stack>
                        </Container>
                        <Box
                            sx={{
                                zIndex: 1,
                                // position: "relative",
                                // top: 100,
                                borderRadius: 3,
                                display: "flex",
                                flexDirection: "column",
                                height: 200,
                                padding: 10,
                                paddingLeft: 20,
                                bgcolor: "#EFEDFF",
                            }}
                        >
                            <Typography color={"#6E3CBC"} fontSize={15} fontWeight={700}>
                                John Doe’s interest / Academic qualifications
                            </Typography>
                            <Grid container maxWidth="xl" columnGap={2}>
                                <Chip
                                    label={"Current Education"}
                                    variant={"filled"}
                                    sx={chipCSS}
                                />
                                <Chip
                                    label={"1st preference course"}
                                    variant={"filled"}
                                    sx={chipCSS}
                                />
                                <Chip
                                    label={"2nd preference course"}
                                    variant={"filled"}
                                    sx={chipCSS}
                                />
                                <Chip
                                    label={"3rd preference course"}
                                    variant={"filled"}
                                    sx={chipCSS}
                                />
                                <Chip
                                    label={"Campus Preference"}
                                    variant={"filled"}
                                    sx={chipCSS}
                                />
                                <Chip
                                    label={"Degree preference"}
                                    variant={"filled"}
                                    sx={chipCSS}
                                />
                                <Chip
                                    label={"Language preference"}
                                    variant={"filled"}
                                    sx={chipCSS}
                                />
                                <Chip
                                    label={"Previous Education"}
                                    variant={"filled"}
                                    sx={chipCSS}
                                />
                            </Grid>
                        </Box>
                    </Box>
            </Box>
            <Dialog
                open={open}
                // TransitionComponent={Transition}
                scroll={"paper"}
                // onBackdropClick={handleClose}
                onClose={handleClose}
                sx={{
                    scrollbarColor: '#6E3CBC',
                }}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle sx={{ display: "flex", justifyContent: "center" }}><Typography color={'#6E3CBC'}
                                                                                            fontWeight={"bold"}> Upcoming
                    Appointments</Typography></DialogTitle>
                <DialogContent sx={{
                    scrollbarColor: '#6E3CBC',
                }}>

                    <List style={{
                        height: 500, width: 330,
                        scrollbarColor: '#6E3CBC',

                    }}>
                        <ListItem>
                            <Card sx={{ borderRadius: 5, m: 0.5 }}>
                                <CardHeader
                                    avatar={<Avatar/>}
                                    title={"You have a session on-"}
                                    titleTypographyProps={{
                                        sx: {
                                            color: "#6E3CBC",
                                            fontWeight: 700,
                                            fontSize: 12,
                                        },
                                    }}
                                    subheaderTypographyProps={{
                                        sx: {
                                            color: "#6E3CBC",
                                            fontWeight: 700,
                                            fontSize: 12,
                                        },
                                    }}
                                    subheader={"8th November from 8:30 to 9:30"}
                                />
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card sx={{ borderRadius: 5, m: 0.5 }}>
                                <CardHeader
                                    avatar={<Avatar/>}
                                    title={"You have a session on-"}
                                    titleTypographyProps={{
                                        sx: {
                                            color: "#6E3CBC",
                                            fontWeight: 700,
                                            fontSize: 12,
                                        },
                                    }}
                                    subheaderTypographyProps={{
                                        sx: {
                                            color: "#6E3CBC",
                                            fontWeight: 700,
                                            fontSize: 12,
                                        },
                                    }}
                                    subheader={"8th November from 8:30 to 9:30"}
                                />
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card sx={{ borderRadius: 5, m: 0.5 }}>
                                <CardHeader
                                    avatar={<Avatar/>}
                                    title={"You have a session on-"}
                                    titleTypographyProps={{
                                        sx: {
                                            color: "#6E3CBC",
                                            fontWeight: 700,
                                            fontSize: 12,
                                        },
                                    }}
                                    subheaderTypographyProps={{
                                        sx: {
                                            color: "#6E3CBC",
                                            fontWeight: 700,
                                            fontSize: 12,
                                        },
                                    }}
                                    subheader={"8th November from 8:30 to 9:30"}
                                />
                            </Card>
                        </ListItem>
                        <ListItem>
                            <Card sx={{ borderRadius: 5, m: 0.5 }}>
                                <CardHeader
                                    avatar={<Avatar/>}
                                    title={"You have a session on-"}
                                    titleTypographyProps={{
                                        sx: {
                                            color: "#6E3CBC",
                                            fontWeight: 700,
                                            fontSize: 12,
                                        },
                                    }}
                                    subheaderTypographyProps={{
                                        sx: {
                                            color: "#6E3CBC",
                                            fontWeight: 700,
                                            fontSize: 12,
                                        },
                                    }}
                                    subheader={"8th November from 8:30 to 9:30"}
                                />
                            </Card>
                        </ListItem>
                    </List>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} sx={{
                        bgcolor: '#6E3CBC',
                        color: "white",
                        ":hover": { color: '#6E3CBC', bgcolor: "white" }
                    }}>Close</Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    )
        ;
};

export default StudentProfileSPOV;