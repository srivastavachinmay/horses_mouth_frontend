import { LinkedIn, Verified }                                       from "@mui/icons-material";
import { Avatar, Card, CardHeader, Chip, List, Stack, Typography, } from "@mui/material";
import Box                                                          from "@mui/material/Box";
import Button                                                          from "@mui/material/Button";
import Container                                                    from "@mui/material/Container";
import CssBaseline                                                  from "@mui/material/CssBaseline";
import Grid                                                         from "@mui/material/Grid";
import React, { useEffect, useState }                               from "react";
import { getUser }                                                  from "../axios/User";
import { useHover }                                                 from "../Hooks/useHover";
import { Schedule, User }                                           from "../models/IUser";
import AppointmentDialog                                            from "./Components/AppointmentDialog";
import { Drawer }                                                   from "./Components/Drawer";
import { StudentSidebarList }                                       from "./Components/listItems";

const StudentProfileSPOV = () => {

    const [buttonAIsHovering, buttonAHoverProps] = useHover();
    const [buttonBIsHovering, buttonBHoverProps] = useHover();
    const [buttonCIsHovering, buttonCHoverProps] = useHover();
    const [buttonDIsHovering, buttonDHoverProps] = useHover();
    const [buttonEIsHovering, buttonEHoverProps] = useHover();
    const [buttonFIsHovering, buttonFHoverProps] = useHover();
    const [buttonGIsHovering, buttonGHoverProps] = useHover();
    const [buttonHIsHovering, buttonHHoverProps] = useHover();
    const [slots, setSlots] = useState<Schedule>();

    const buttonIsHovering = [buttonAIsHovering, buttonBIsHovering, buttonCIsHovering, buttonDIsHovering, buttonEIsHovering, buttonFIsHovering, buttonGIsHovering, buttonHIsHovering];
    const buttonHoverProps = [buttonAHoverProps, buttonBHoverProps, buttonCHoverProps, buttonDHoverProps, buttonEHoverProps, buttonFHoverProps, buttonGHoverProps, buttonHHoverProps];

    const [mentorData, setMentorData] = useState<User>();
    const [chipData, setChipData] = useState({
                                                 "1st Preference Course": "",
                                                 "2nd Preference Course": "",
                                                 "3rd Preference Course": "",
                                                 "Current Institute": "",
                                                 "Campus Preference": "",
                                                 "Degree Preference": "",
                                                 "Language Preference": "",
                                                 "Previous Institute": "",
                                             });
    const [pastOpenDialog, setPastOpenDialog] = useState(false);
    const [upcomingOpenDialog, setUpcomingOpenDialog] = useState(false);

    const weekDays = ["sunday",
                      "monday",
                      "tuesday",
                      "wednesday",
                      "thursday",
                      "friday",
                      "saturday"];

    useEffect(() => {
        ( async () => {
            const mentorD = await getUser();

            if(!mentorD) {
                // TODO: SHOW ERROR
                return;
            }
            setMentorData(mentorD!);
            const mentorMeta = mentorData?.[ "mentorMeta" ];
            setSlots(mentorMeta?.schedule);
            setChipData({
                            "1st Preference Course": mentorData?.interests[ 0 ] || "N/A",
                            "2nd Preference Course": mentorData?.interests[ 1 ] || "N/A",
                            "3rd Preference Course": mentorData?.interests[ 2 ] || "N/A",
                            "Current Institute": mentorData?.institute || "N/A",
                            "Campus Preference": mentorData?.campusPreference! || "N/A",
                            "Degree Preference": mentorMeta?.degree! || "N/A",
                            "Language Preference": mentorMeta?.languages.join(', ')! || "N/A",
                            "Previous Institute": mentorMeta?.campusInfo.previousInstitute! || "N/A"
                        });

        } )();
    }, []);

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
    // @ts-ignore
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <CssBaseline/>
                {/*"Drawer"*/}
                <Drawer variant="permanent" open={true} sx={{ bgcolor: "#7267CB" }}>
                    <Avatar sx={{ alignSelf: "center", margin: 2 }}/>
                    <Typography textAlign={"center"} sx={{ color: "white" }}>
                        {`${mentorData?.name}`}
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
                    <Grid
                        container
                        spacing={6}
                        sx={{
                            bgcolor: "#EFEDFF",
                            height: "100%",
                            width: '100%',
                            alignItems: "flex-end",
                            justifyContent: 'center'
                        }}
                    >
                      <Grid item md={8} sx={{height: '100%'}}>
                        <Box
                          sx={{
                            flexDirection: "column",
                            display: 'flex',
                            mt: 5,
                            ml: 15,
                            width: '100%',
                            bgcolor:"EFEDFF",
                            justifyContent: 'space-around',
                            height: '100%'
                          }}
                        >
                            {/*<Masonry columns={{ md: 1, xl: 1 }} spacing={3} sx={{ mt: 10 }}>*/}
                            <Box
                                sx={{
                                    p: 2,
                                    //pl: 5,
                                    width: "100%",
                                    // bgcolor: "red",
                                    borderRadius: 3,
                                    display: "flex",
                                    flexDirection: "row",
                                    // height: 200,
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    flexWrap: "wrap",

                                }}
                            >
                                <Avatar
                                    sx={{
                                        width: 150,
                                        height: 150,
                                        borderColor: "#6E3CBC",
                                        borderWidth: 5,
                                        borderStyle: 'solid'
                                    }}
                                />
                                <Box sx={{ml: 9}}>
                                  <Box sx={{display: "flex", alignItems: "center", mb: 1}}>
                                      <Typography
                                          fontWeight={"bolder"}
                                          variant="h4"
                                          color={"#6E3CBC"}
                                      >
                                          {`${mentorData?.name}`}
                                      </Typography>
                                      <Verified
                                          sx={{
                                              width: 40,
                                              height: 40,
                                              color: "#0FA958",
                                              ml: 1
                                          }}
                                      />
                                    </Box>
                                    <Button
                                        sx={{
                                            width: "90%",
                                            color: "white",
                                            bgcolor: "#6E3CBC",
                                            borderRadius: 3,
                                            ":hover": {
                                                color: "#6E3CBC",
                                                bgcolor: "white",
                                            },
                                        }}
                                    >
                                            Edit Profile

                                    </Button>
                                    <Typography
                                        fontWeight={"bold"}
                                        variant="h6"
                                        color={"#6E3CBC"}
                                    >
                                        Connected Profiles
                                    </Typography>
                                    <Button
                                        onClick={() => {
                                            window.open(mentorData?.linkedIn);
                                        }}
                                        sx={{
                                            display: "flex",
                                            width: "90%",
                                            //height: 45,
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
                                        endIcon={<LinkedIn
                                            sx={{
                                                width: 16,
                                                height: 16,
                                                // mt: 0.7,
                                            }}
                                        />}
                                    >
                                            Linkedin

                                    </Button>
                                  </Box>
                            </Box>
                            <Box
                                sx={{
                                    zIndex: 1,
                                    //position: "relative",
                                    bgcolor: "white",
                                    p: 2,
                                    pl: 5,
                                    width: 600,
                                    borderRadius: 3,
                                    //display: "flex",
                                    //flexDirection: "column",
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
                                    {mentorData?.about}
                                </Typography>
                            </Box>
                        </Box>
                      </Grid>
                      <Grid item md={4}>
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
                                  {// @ts-ignore
                                      slots?.days[ day ]
                                          .map(( d: {
                                              start: string
                                              end: string
                                              lastBookedFor: number
                                          }, index: number ) => (
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
                                          ))}

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
                      </Grid>
                    </Grid>
                    <Box
                        sx={{
                            zIndex: 1,
                            // position: "relative",
                            // top: 100,
                            ml: 12,
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
                            {Object.keys(chipData).map(( key, index ) => {

                                const hoverProp = buttonHoverProps[ index ];
                                const isHovering = buttonIsHovering[ index ];

                                return <Chip
                                    {...hoverProp}
                                    // @ts-ignore
                                    label={( !isHovering ?
                                             key :
                                        // @ts-ignore
                                             chipData[ key ].length > 0 ? ( chipData[ key ] as string ) : "NA" )}
                                    variant={"filled"}
                                    sx={chipCSS}
                                />;
                            })}
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
