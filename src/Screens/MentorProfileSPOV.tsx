import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import {
    Avatar,
    Button,
    Card,
    CardHeader,
    Chip,
    FormControl,
    List,
    ListItem,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    Typography,
} from "@mui/material";
import { StudentSidebarList } from "./Components/listItems";
import Grid from "@mui/material/Grid";
import { LinkedIn, Verified } from "@mui/icons-material";
import Container from "@mui/material/Container";
import { Drawer } from "./Components/Drawer";


const MentorProfileSPOV = () => {


    const [day, setDay] = React.useState('');

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
        width: 170,
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
                        // height: "100%",
                        display: "flex",
                        width: "100%",
                        flexWrap: "wrap"
                    }}
                >
                    <Typography position={"absolute"} sx={{
                        width: 205,
                        height: 26,
                        left: 716,
                        top: 50,
                        fontSize: 17,
                        color: "#6E3CBC",
                        fontWeight: 700
                    }}>
                        University of WaterLoo
                    </Typography>
                    <Typography position={"absolute"} sx={{
                        width: 205,
                        height: 26,
                        left: 716,
                        top: 71,
                        fontSize: 17,
                        color: "#6E3CBC",
                        fontWeight: 700
                    }}>
                        Bachelor’s, Mechanical engineering
                    </Typography>
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

                                <Typography
                                    fontWeight={"bold"}
                                    fontSize={16}
                                    alignSelf={"center"}
                                    color={"#6E3CBC"}
                                >
                                    Connect with me on
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        width: 160,
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
                                About me &#128075;
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
                    <Stack spacing={3} sx={{ mt: 10 }}>
                        <Typography color={'#6E3CBC'} fontWeight={700} fontSize={13}>John Doe’s available
                            slots</Typography>
                        <FormControl variant={"standard"} sx={{ m: 1, bgcolor: '#6E3CBC', borderRadius: 3 }}>

                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
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
                        <Box
                            sx={{
                                zIndex: 1,
                                position: "relative",
                                // top: 100,
                                width: 360,

                                borderWidth: 1,
                                borderRadius: 5,
                                display: "flex",
                                flexDirection: "column",
                                height: 500,
                                // bgcolor:"red"
                                // bgcolor: "#EFEDFF",
                            }}
                        >

                            <List sx={{
                                borderRadius: 5,
                                paddingBottom: 2,
                                overflowY: "scroll",
                                scrollbarColor: "#6E3CBC"
                            }}>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(( index ) => (
                                    <ListItem>

                                        <Card sx={{ borderRadius: 5, m: 0.5, width: "100%" }}>
                                            <CardHeader
                                                avatar={<Avatar>{index}</Avatar>}
                                                title={"Date"}
                                                titleTypographyProps={{
                                                    fontSize: 12,
                                                    fontWeight: "bold",
                                                    color: "#6E3CBC"
                                                }}
                                                subheaderTypographyProps={{
                                                    color: "#6E3CBC",
                                                    fontWeight: 700,
                                                    fontSize: 12,
                                                }}
                                                subheader={"Time to time"}
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
                                                }}>
                                            Book
                                        </Button>
                                    </ListItem>
                                ))}
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
                            // height: 200,
                            padding: 10,
                            paddingLeft: 9,
                            bgcolor: "#EFEDFF",
                        }}
                    >
                        <Typography color={"#6E3CBC"} fontSize={15} fontWeight={700}>
                            John Doe’s interest / Academic qualifications
                        </Typography>
                        <Grid container maxWidth="xl" columns={{ xs: 1, sm: 3, md: 4, xl: 5 }}>
                            <Chip
                                label={"Country of  study"}
                                variant={"filled"}
                                sx={chipCSS}
                            />
                            <Chip
                                label={"Area of study"}
                                variant={"filled"}
                                sx={chipCSS}
                            />
                            <Chip
                                label={"University Relation"}
                                variant={"filled"}
                                sx={chipCSS}
                            />
                            <Chip
                                label={"Previous Institution"}
                                variant={"filled"}
                                sx={chipCSS}
                            />
                            <Chip
                                label={"Previous Course"}
                                variant={"filled"}
                                sx={chipCSS}
                            />
                            <Chip
                                label={"Specialisation"}
                                variant={"filled"}
                                sx={chipCSS}
                            />
                            <Chip
                                label={"Country of Origin"}
                                variant={"filled"}
                                sx={chipCSS}
                            />
                            <Chip
                                label={"On campus job"}
                                variant={"filled"}
                                sx={chipCSS}
                            />
                            <Chip
                                label={"Scholarship"}
                                variant={"filled"}
                                sx={chipCSS}
                            />
                            <Chip
                                label={"Place of Stay"}
                                variant={"filled"}
                                sx={chipCSS}
                            />
                            <Chip
                                label={"Languages"}
                                variant={"filled"}
                                sx={chipCSS}
                            />
                            <Chip
                                label={"Current GPA"}
                                variant={"filled"}
                                sx={chipCSS}
                            />
                            <Chip
                                label={"Gmat score "}
                                variant={"filled"}
                                sx={chipCSS}
                            />
                            <Chip
                                label={"Year of Graduation"}
                                variant={"filled"}
                                sx={chipCSS}
                            />


                        </Grid>
                    </Box>

                </Container>
            </Box>
        </Box>

    );
};

export default MentorProfileSPOV;