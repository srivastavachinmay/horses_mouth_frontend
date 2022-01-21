import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Avatar, Button, Card, CardHeader, Chip, List, ListItem, Stack, Typography, } from "@mui/material";
import { MentorSidebarList } from "./Components/listItems";
import Grid from "@mui/material/Grid";
import { LinkedIn, Mail, Verified } from "@mui/icons-material";
import Container from "@mui/material/Container";
import { Drawer } from "./Components/Drawer";
import AppointmentDialog from "./Components/AppointmentDialog";
import { User } from "../models/IUser";
import { useHover } from "../Hooks/useHover";
import { getUser } from "../axios/User";

const MentorProfileMPOV = () => {
    const [pastOpenDialog, setPastOpenDialog] = useState(false);
    const [upcomingOpenDialog, setUpcomingOpenDialog] = useState(false);
    const [buttonAIsHovering, buttonAHoverProps] = useHover()
    const [buttonBIsHovering, buttonBHoverProps] = useHover()
    const [buttonCIsHovering, buttonCHoverProps] = useHover()
    const [buttonDIsHovering, buttonDHoverProps] = useHover()
    const [buttonEIsHovering, buttonEHoverProps] = useHover()
    const [buttonFIsHovering, buttonFHoverProps] = useHover()
    const [buttonGIsHovering, buttonGHoverProps] = useHover()
    const [buttonHIsHovering, buttonHHoverProps] = useHover()
    const [buttonIIsHovering, buttonIHoverProps] = useHover()
    const [buttonJIsHovering, buttonJHoverProps] = useHover()
    const [buttonKIsHovering, buttonKHoverProps] = useHover()
    const [buttonLIsHovering, buttonLHoverProps] = useHover()
    const [buttonMIsHovering, buttonMHoverProps] = useHover()
    const [buttonNIsHovering, buttonNHoverProps] = useHover()
    const [buttonOIsHovering, buttonOHoverProps] = useHover()

    const buttonIsHovering = [buttonAIsHovering, buttonBIsHovering, buttonCIsHovering, buttonDIsHovering, buttonEIsHovering, buttonFIsHovering, buttonGIsHovering, buttonHIsHovering, buttonIIsHovering, buttonJIsHovering, buttonKIsHovering, buttonLIsHovering, buttonMIsHovering, buttonNIsHovering, buttonOIsHovering]
    const buttonHoverProps = [buttonAHoverProps, buttonBHoverProps, buttonCHoverProps, buttonDHoverProps, buttonEHoverProps, buttonFHoverProps, buttonGHoverProps, buttonHHoverProps, buttonIHoverProps, buttonJHoverProps, buttonKHoverProps, buttonLHoverProps, buttonMHoverProps, buttonNHoverProps, buttonOHoverProps]

    let upcomingSessions = []
    let prevSessions = []
    let aboutMe = "hello"

    const [mentorData, setMentorData] = useState<User>()
    const [chipData, setChipData] = useState({
        "Country of study": "",
        "Area of study": "",
        // "University Relation": "",
        "Previous Education": "",
        "Year of Graduation": "",
        "Specialization": "",
        "On Campus Exp.": "",
        "On Campus Job": "",
        "Scholarship": "",
        "Place of Stay": "",
        "Languages": "",
        "Current GPA": "",
        "GMAT Score": "",
        "SAT Score": "",
        "Country": ""
    })
    // const chipDataValue = useState([])

    useEffect(() => {
        ( async () => {
            const mentorD = await getUser()

            if(!mentorD) {
                // TODO: SHOW ERROR
                return;
            }
            setMentorData(mentorD!)
            const mentorMeta = mentorD[ "mentorMeta" ]
            setChipData({
                "Country of study": mentorMeta.countryOfStudy || "",
                "Area of study": mentorMeta.major || "",
                // "University Relation": mentorMeta.campusInfo.,
                "Previous Education": mentorMeta.campusInfo.previousInstitute || "",
                "Year of Graduation": mentorMeta.campusInfo.yearOfGrad as unknown as string,
                "Specialization": mentorMeta.campusInfo.specialisation || "",
                "On Campus Exp.": mentorMeta.campusInfo.campusExperience || "",
                "On Campus Job": mentorMeta.campusInfo.campusJob || "",
                "Scholarship": mentorMeta.campusInfo.scholarship || "",
                "Place of Stay": mentorMeta.campusInfo.placeOfStay || "",
                "Languages": mentorMeta.languages[ 0 ] || "",
                "Current GPA": mentorMeta.campusInfo.scores.gpa || "",
                "GMAT Score": mentorMeta.campusInfo.scores.gmat || "",
                "SAT Score": mentorMeta.campusInfo.scores.sat || "",
                "Country": mentorMeta.countryOfOrigin || "",
            })


        } )()
    }, [])


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
        mentorData?.type === 'mentor' ?
            <>
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
                            backgroundColor: "#EFEDFF",
                            flexGrow: 1,
                            height: "100vh",
                            overflow: "auto",
                        }}>

                        <Box position={"static"} mt={5} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                            <Typography fontWeight={"bold"}>University of Waterloo</Typography>
                            <Typography fontWeight={"bold"}>Bachelor’s, Mechanical engineering </Typography>
                        </Box>
                        <Container
                            maxWidth="xl"
                            sx={{
                                p: 3,
                                backgroundColor: "#EFEDFF",
                                height: "100%",
                                display: "flex",
                                flexWrap: "wrap"
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
                                    <Typography fontWeight={"bold"} fontSize={30}>
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
                                        {mentorData?.about || "NA"}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Stack>
                                <Box
                                    sx={{
                                        zIndex: 1,
                                        position: "relative",

                                        width: 360,
                                        borderColor: "black",
                                        borderWidth: 1,
                                        borderRadius: 3,
                                        display: "flex",
                                        flexDirection: "column",
                                        height: 400,
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
                                            Upcoming Sessions
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

                                    </List>
                                </Box>
                                <Box
                                    sx={{
                                        zIndex: 1,
                                        position: "relative",

                                        width: 360,
                                        borderColor: "black",
                                        borderWidth: 1,
                                        borderRadius: 3,
                                        display: "flex",
                                        flexDirection: "column",

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
                                            Previous Sessions
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
                                        <ListItem>
                                            <Card sx={{ borderRadius: 5, width: "80%", m: 0.5 }}>
                                                <CardHeader
                                                    avatar={<Avatar/>}
                                                    title={"6th november"}
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
                                                    subheader={"10:30 to 11:30 "}
                                                />
                                            </Card>
                                            <Button variant={"contained"}
                                                    sx={{
                                                        color: "white",
                                                        height: 67,
                                                        width: 84,
                                                        borderRadius: 5,
                                                        fontSize: 14,
                                                        bgcolor: "#6E3CBC",
                                                        transition: "ease-in",
                                                        ":hover": {
                                                            bgcolor: "white",
                                                            color: "#6E3CBC"
                                                        }
                                                    }}><Mail/></Button>
                                        </ListItem>
                                        <ListItem>
                                            <Card sx={{ borderRadius: 5, width: "80%", m: 0.5 }}>
                                                <CardHeader
                                                    avatar={<Avatar/>}
                                                    title={"6th november"}
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
                                                    subheader={"10:30 to 11:30 "}
                                                />
                                            </Card>
                                            <Button variant={"contained"}
                                                    sx={{
                                                        color: "white",
                                                        height: 67,
                                                        width: 84,
                                                        borderRadius: 5,
                                                        fontSize: 14,
                                                        bgcolor: "#6E3CBC",
                                                        transition: "ease-in",
                                                        ":hover": {
                                                            bgcolor: "white",
                                                            color: "#6E3CBC"
                                                        }
                                                    }}><Mail/></Button>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Stack>
                            <Box
                                sx={{
                                    zIndex: 1,
                                    // position: "relative",
                                    // top: 100,
                                    borderRadius: 3,
                                    display: "flex",
                                    flexDirection: "column",
                                    height: 200,
                                    m: 2,
                                    ml: 10,
                                    // alignItems:"center",
                                    width: '85%',
                                    // padding: 10,
                                    // paddingLeft: 20,
                                    bgcolor: "#EFEDFF",
                                }}
                            >
                                <Typography fontSize={15} fontWeight={700}>
                                    Your interest / Academic qualifications
                                </Typography>
                                <Grid container maxWidth="100%" columnGap={5} pb={2}>
                                    {Object.keys(chipData).map(( key, index ) => {

                                        const hoverProp = buttonHoverProps[ index ]
                                        const isHovering = buttonIsHovering[ index ]

                                        return <Chip
                                            {...hoverProp}
                                            // @ts-ignore
                                            label={( !isHovering ? key : chipData[ key ].length > 0 ? ( chipData[ key ] as string ) : "NA" )}
                                            variant={"filled"}
                                            sx={chipCSS}
                                        />
                                    })}

                                </Grid>
                            </Box>
                        </Container>

                    </Box>
                </Box>
                <AppointmentDialog open={upcomingOpenDialog} handleClose={handleUpcomingClose}
                                   title={"Upcoming Sessions"}/>
                <AppointmentDialog open={pastOpenDialog} handleClose={handlePastClose}
                                   title={"Previous Sessions"}/>
            </> :
            <>Unauthorized access</>
    );
};

export default MentorProfileMPOV;