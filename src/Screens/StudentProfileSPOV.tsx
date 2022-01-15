import React, { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Avatar, Card, CardHeader, Chip, List, Stack, Typography, } from "@mui/material";
import { StudentSidebarList } from "./Components/listItems";
import Grid from "@mui/material/Grid";
import { LinkedIn, Verified } from "@mui/icons-material";
import Container from "@mui/material/Container";
import { Drawer } from "./Components/Drawer";
import AppointmentDialog from "./Components/AppointmentDialog";

function useHover() {
    const [hovering, setHovering] = useState(false)
    const onHoverProps = {
        onMouseEnter: () => setHovering(true),
        onMouseLeave: () => setHovering(false),
    }
    return [hovering, onHoverProps]
}

const baseUrl = "https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";

const StudentProfileSPOV = () => {
    const [buttonAIsHovering, buttonAHoverProps] = useHover()
    const [buttonBIsHovering, buttonBHoverProps] = useHover()
    const [buttonCIsHovering, buttonCHoverProps] = useHover()
    const [buttonDIsHovering, buttonDHoverProps] = useHover()
    const [buttonEIsHovering, buttonEHoverProps] = useHover()
    const [buttonFIsHovering, buttonFHoverProps] = useHover()
    const [buttonGIsHovering, buttonGHoverProps] = useHover()
    const [buttonHIsHovering, buttonHHoverProps] = useHover()

    let currentE = ""
    let firstPreference = ""
    let secondPreference = ""
    let thirdPreference = ""
    let campus = ""
    let degree = ""
    let language = ""
    let previousE = ""
    let upcomingAppointment = []
    let pastAppointments = []
    let aboutMe = ""


    const [pastOpenDialog, setPastOpenDialog] = useState(false);
    const [upcomingOpenDialog, setUpcomingOpenDialog] = useState(false);

    const handleClickPastOpen = () => {
        setPastOpenDialog(true);
    };

    const handlePastClose = () => {
        setPastOpenDialog(false);
    };
    const handleClickUpcomingOpen = () => {
        setUpcomingOpenDialog(true);
    };

    const handleUpcomingClose = () => {
        setUpcomingOpenDialog(false);
    };


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
        <>
            <Box sx={{ display: "flex" }}>
                <CssBaseline/>
                {/*"Drawer"*/}
                <Drawer variant="permanent" open={true} sx={{ bgcolor: "#7267CB" }}>
                    <Avatar sx={{ alignSelf: "center", margin: 2 }}/>
                    <Typography textAlign={"center"} sx={{ color: "white" }}>
                        John Doe
                    </Typography>
                    <List sx={{ justifyContent: "center", m: 2, ml: 4 }}>{StudentSidebarList}</List>
                </Drawer>


                <Box
                    component="main"
                    sx={{
                        backgroundColor: "#EFEDFF",
                        flexGrow: 1,
                        height: "100vh",
                        overflow: "auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: 2
                    }}
                >
                    <Container
                        maxWidth="xl"
                        sx={{
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
                            marginTop={5}
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
                        <Stack>
                            <Box
                                sx={{
                                    zIndex: 1,
                                    position: "relative",
                                    mt: 5,
                                    width: 360,
                                    borderRadius: 3,
                                    display: "flex",
                                    flexDirection: "column",
                                    // height: 560,
                                    // bgcolor:"black",
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
                                        onClick={handleClickUpcomingOpen}
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
                                    mt: 5,
                                    width: 360,
                                    borderRadius: 3,
                                    display: "flex",
                                    flexDirection: "column",

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
                                    <Box onClick={handleClickPastOpen}>
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
                            mt: 3,
                            borderRadius: 3,
                            display: "flex",
                            flexDirection: "column",
                            height: 200,
                            width: '90%',
                            p: 3,
                        }}
                    >
                        <Typography color={"#6E3CBC"} fontSize={15} fontWeight={700}>
                            Your interest / Academic qualifications
                        </Typography>
                        <Grid container columnGap={5}>
                            <Chip
                                {...buttonAHoverProps}
                                label={buttonAIsHovering ? "" : "Current Education"}
                                variant={"filled"}
                                sx={chipCSS}
                            />
                            <Chip
                                {...buttonBHoverProps}
                                label={buttonBIsHovering ? "" : "1st preference course"}
                                variant={"filled"}
                                sx={chipCSS}
                            />
                            <Chip
                                {...buttonCHoverProps}
                                label={buttonCIsHovering ? "" : "2nd preference course"}
                                variant={"filled"}
                                sx={chipCSS}
                            />
                            <Chip
                                {...buttonDHoverProps}
                                label={buttonDIsHovering ? "STEP" : "3rd preference course"}
                                variant={"filled"}
                                sx={chipCSS}
                            />
                            <Chip
                                {...buttonEHoverProps}
                                label={buttonEIsHovering ? "Canada" : "Campus Preference"}
                                variant={"filled"}
                                sx={chipCSS}
                            />
                            <Chip
                                {...buttonFHoverProps}
                                label={buttonFIsHovering ? "" : "Degree preference"}
                                variant={"filled"}
                                sx={chipCSS}
                            />
                            <Chip
                                {...buttonGHoverProps}
                                label={buttonGIsHovering ? "" : "Language preference"}
                                variant={"filled"}
                                sx={chipCSS}
                            />
                            <Chip
                                {...buttonHHoverProps}
                                label={buttonHIsHovering ? "" : "Previous Education"}
                                variant={"filled"}
                                sx={chipCSS}
                            />
                        </Grid>
                    </Box>
                </Box>
            </Box>
            <AppointmentDialog open={upcomingOpenDialog} handleClose={handleUpcomingClose}
                               title={"Upcoming Appointments"}/>
            <AppointmentDialog open={pastOpenDialog} handleClose={handlePastClose} title={"Past Appointments"}/>
        </>
    );
};

export default StudentProfileSPOV;