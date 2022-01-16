import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Avatar, Chip, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { MentorSidebarList } from "./Components/listItems";
import Grid from "@mui/material/Grid";
import { LinkedIn, Verified } from "@mui/icons-material";
import Container from "@mui/material/Container";
import { Drawer } from "./Components/Drawer";


const StudentProfileMPOV = () => {
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
                                        John Doe{" "}
                                    </Typography>
                                    <Verified
                                        sx={{
                                            width: 52,
                                            height: 52,
                                            color: "#0FA958",
                                        }}
                                    />

                                    <Typography
                                        fontWeight={"bold"}
                                        fontSize={25}
                                        color={"#6E3CBC"}
                                    >
                                        Connect with me on
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
                                    // height: 300,
                                    flexWrap: "wrap",
                                }}
                            >
                                <Typography fontWeight={"bold"} color={"#6E3CBC"} fontSize={30}>
                                    About me &#128075;
                                </Typography>
                                <Typography
                                    fontWeight={"normal"}
                                    color={"#6E3CBC"}
                                    fontSize={19}
                                    sx={{
                                        pt: 2,
                                        width: 463.73,
                                        height: 190,
                                        // left: 361.06,
                                        // top: 563.34,
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </Grid>
                        </Grid>
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
                            <Typography
                                color={"#6E3CBC"}
                                fontSize={15}
                                fontWeight={700}
                                padding={1}
                            >
                                John Doe’s interest / Academic qualifications
                            </Typography>
                            <Stack>
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
                            </Stack>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default StudentProfileMPOV;