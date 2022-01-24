import { LinkedIn, Verified }         from "@mui/icons-material";
import {
    Avatar,
    Button,
    Card,
    CardHeader,
    Checkbox,
    Chip,
    FormControl,
    List,
    ListItem,
    ListItemIcon,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    Typography,
}                                     from "@mui/material";
import Box                            from "@mui/material/Box";
import Container                      from "@mui/material/Container";
import CssBaseline                    from "@mui/material/CssBaseline";
import Grid                           from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { useNavigate }                from "react-router-dom";
import { getUser }                    from "../axios/User";
import { useHover }                   from "../Hooks/useHover";
import { Schedule, User }             from "../models/IUser";
import { Drawer }                     from "./Components/Drawer";
import { StudentSidebarList }         from "./Components/listItems";

const MentorProfileSPOV = () => {
    const [checked, setChecked] = React.useState([0]);
    
    const [buttonAIsHovering, buttonAHoverProps] = useHover();
    const [buttonBIsHovering, buttonBHoverProps] = useHover();
    const [buttonCIsHovering, buttonCHoverProps] = useHover();
    const [buttonDIsHovering, buttonDHoverProps] = useHover();
    const [buttonEIsHovering, buttonEHoverProps] = useHover();
    const [buttonFIsHovering, buttonFHoverProps] = useHover();
    const [buttonGIsHovering, buttonGHoverProps] = useHover();
    const [buttonHIsHovering, buttonHHoverProps] = useHover();
    const [buttonIIsHovering, buttonIHoverProps] = useHover();
    const [buttonJIsHovering, buttonJHoverProps] = useHover();
    const [buttonKIsHovering, buttonKHoverProps] = useHover();
    const [buttonLIsHovering, buttonLHoverProps] = useHover();
    const [buttonMIsHovering, buttonMHoverProps] = useHover();
    const [buttonNIsHovering, buttonNHoverProps] = useHover();
    const [buttonOIsHovering, buttonOHoverProps] = useHover();
    const navigate = useNavigate();
    const buttonIsHovering = [buttonAIsHovering, buttonBIsHovering, buttonCIsHovering, buttonDIsHovering, buttonEIsHovering, buttonFIsHovering, buttonGIsHovering, buttonHIsHovering, buttonIIsHovering, buttonJIsHovering, buttonKIsHovering, buttonLIsHovering, buttonMIsHovering, buttonNIsHovering, buttonOIsHovering];
    const buttonHoverProps = [buttonAHoverProps, buttonBHoverProps, buttonCHoverProps, buttonDHoverProps, buttonEHoverProps, buttonFHoverProps, buttonGHoverProps, buttonHHoverProps, buttonIHoverProps, buttonJHoverProps, buttonKHoverProps, buttonLHoverProps, buttonMHoverProps, buttonNHoverProps, buttonOHoverProps];
    const [slots, setSlots] = useState<Schedule>();
    const [mentorData, setMentorData] = useState<User>();
    const [chipData, setChipData] = useState({
                                                 "Country of study": "",
                                                 "Area of study": "",
                                                 "University Relation": "",
                                                 "Previous Institution": "",
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
                                             });
    const weekDays = ["sunday",
                      "monday",
                      "tuesday",
                      "wednesday",
                      "thursday",
                      "friday",
                      "saturday"];
    // const chipDataValue = useState([])
    
    useEffect(() => {
        ( async () => {
            const mentorD = await getUser();
            
            if(!mentorD) {
                // TODO: SHOW ERROR
                return;
            }
            setMentorData(mentorD!);
            const mentorMeta = mentorD[ "mentorMeta" ];
            setSlots(mentorMeta.schedule);
            setChipData({
                            "Country of study": mentorMeta.countryOfStudy || "N/A",
                            "Area of study": mentorMeta.major || "N/A",
                            "University Relation": mentorMeta.status || "N/A",
                            "Previous Institution": mentorMeta.campusInfo.previousInstitute || "N/A",
                            "Year of Graduation": mentorMeta.campusInfo.yearOfGrad as unknown as string || "N/A",
                            "Specialization": mentorMeta.campusInfo.specialisation || "N/A",
                            "On Campus Exp.": mentorMeta.campusInfo.campusExperience || "N/A",
                            "On Campus Job": mentorMeta.campusInfo.campusJob || "N/A",
                            "Scholarship": mentorMeta.campusInfo.scholarship || "N/A",
                            "Place of Stay": mentorMeta.campusInfo.placeOfStay || "N/A",
                            "Languages": mentorMeta.languages.join(', ') || "N/A",
                            "Current GPA": mentorMeta.campusInfo.scores.gpa || "N/A",
                            "GMAT Score": mentorMeta.campusInfo.scores.gmat || "N/A",
                            "SAT Score": mentorMeta.campusInfo.scores.sat || "N/A",
                            "Country": mentorMeta.countryOfOrigin || "N/A",
                        });
            
        } )();
    }, []);
    
    const handleToggle = ( value: number ) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        
        if(currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        
        setChecked(newChecked);
    };
    const [day, setDay] = React.useState('');
    
    const handleChange = ( event: SelectChangeEvent ) => {
        setDay(event.target.value);
    };
    
    const selectCSS = {
        alignSelf: "center",
        justifyContent: "center",
        color: '#6E3CBC',
        fontWeight: "bold"
    };
    
    const chipCSS = {
        bgcolor: "white",
        width: 170,
        height: 45,
        margin: 1,
        border: "none",
        fontSize: 15,
        color: "#6E3CBC",
        mr: 4,
        fontWeight: "bolder",
        borderRadius: 20,
        ":hover": {
            bgcolor: "#6E3CBC",
            color: "white",
            
        },
    };
    // @ts-ignore
    // @ts-ignore
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline/>
            {/*"Drawer"*/}
            <Drawer variant="permanent" open={true} sx={{ bgcolor: "#7267CB" }}>
                <Avatar sx={{ alignSelf: "center", margin: 2 }} src={mentorData?.profilePic}/>
                <Typography textAlign={"center"} sx={{ color: "white" }}>
                    {mentorData?.name}
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
                }}
            >
                <Box position={"static"} mt={5} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                    <Typography fontWeight={"bold"}>{mentorData?.mentorMeta.campusInfo.uniName}</Typography>
                    <Typography fontWeight={"bold"}>{mentorData?.mentorMeta.campusInfo.courseName} </Typography>
                </Box>
                <Container
                    maxWidth="xl"
                    sx={{
                        p: 3,
                        pt: 0,
                        backgroundColor: "#EFEDFF",
                        // height: "100%",
                        display: "flex",
                        width: "100%",
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
                        marginTop={4}
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
                                    {mentorData?.name}
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
                                    onClick={() => {
                                        window.open(mentorData?.linkedIn);
                                    }}
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
                                {mentorData?.about}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Stack spacing={3} sx={{ mt: 4 }}>
                        <Typography color={'#6E3CBC'} fontWeight={700} fontSize={13}>{`${mentorData?.name} available
                            slots`}</Typography>
                        <FormControl variant={"standard"} sx={{ m: 1, bgcolor: '#6E3CBC', borderRadius: 3 }}>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={day}
                                defaultValue={weekDays[ new Date(Date.now()).getUTCDay() ]}
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
                                <MenuItem sx={selectCSS} value={"sunday"}>Sunday</MenuItem>
                                <MenuItem sx={selectCSS} value={"monday"}>Monday</MenuItem>
                                <MenuItem sx={selectCSS} value={"tuesday"}>Tuesday</MenuItem>
                                <MenuItem sx={selectCSS} value={"wednesday"}>Wednesday</MenuItem>
                                <MenuItem sx={selectCSS} value={"thursday"}>Thursday</MenuItem>
                                <MenuItem sx={selectCSS} value={"friday"}>Friday</MenuItem>
                                <MenuItem sx={selectCSS} value={"saturday"}>Saturday</MenuItem>
                            
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
                                
                                {// @ts-ignore
                                    slots?.days[ day ]
                                        .map(( d: {
                                            start: string
                                            end: string
                                            lastBookedFor: number
                                        }, index: number ) => (
                                            <ListItem disabled={d.lastBookedFor - Date.now() >= 1800000}>
                                                <ListItemIcon>
                                                    <Checkbox
                                                        edge="start"
                                                        onClick={handleToggle(index)}
                                                        disableRipple
                                                        color={"primary"}
                                                        checked={checked.indexOf(index) !== -1}
                                                        tabIndex={-1}
                                                        sx={{ color: '#6E3CBC80' }}
                                                    />
                                                </ListItemIcon>
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
                                                        subheader={`${d.start} to ${d.end}`}
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
                            {`${mentorData?.name} interest / Academic qualifications`}
                        </Typography>
                        <Grid container maxWidth="xl" columnSpacing={4} columns={{ xs: 1, sm: 3, md: 4, xl: 5 }}>
                            {Object.keys(chipData).map(( key, index ) => {
                                
                                const hoverProp = buttonHoverProps[ index ];
                                const isHovering = buttonIsHovering[ index ];
                                
                                return <Chip
                                    {...hoverProp}
                                    label={!isHovering ?
                                        // @ts-ignore
                                           key : chipData[ key ] as string}
                                    variant={"filled"}
                                    sx={chipCSS}
                                />;
                            })}
                        
                        
                        </Grid>
                    </Box>
                
                </Container>
            </Box>
        </Box>
    
    );
};

export default MentorProfileSPOV;