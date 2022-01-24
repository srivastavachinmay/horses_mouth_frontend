import { LinkedIn, Verified }         from "@mui/icons-material";
import { Avatar, Chip, Stack }        from "@mui/material";
import Box                            from "@mui/material/Box";
import Container                      from "@mui/material/Container";
import CssBaseline                    from "@mui/material/CssBaseline";
import Grid                           from "@mui/material/Grid";
import List                           from "@mui/material/List";
import Typography                     from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useNavigate }                from "react-router-dom";
import { getUser }                    from "../axios/User";
import { useHover }                   from "../Hooks/useHover";
import { User }                       from "../models/IUser";
import { Drawer }                     from "./Components/Drawer";
import { MentorSidebarList }          from "./Components/listItems";

const StudentProfileMPOV = () => {
    
    const [buttonAIsHovering, buttonAHoverProps] = useHover();
    const [buttonBIsHovering, buttonBHoverProps] = useHover();
    const [buttonCIsHovering, buttonCHoverProps] = useHover();
    const [buttonDIsHovering, buttonDHoverProps] = useHover();
    const [buttonEIsHovering, buttonEHoverProps] = useHover();
    const [buttonFIsHovering, buttonFHoverProps] = useHover();
    const [buttonGIsHovering, buttonGHoverProps] = useHover();
    const [buttonHIsHovering, buttonHHoverProps] = useHover();
    
    const buttonIsHovering = [buttonAIsHovering, buttonBIsHovering, buttonCIsHovering, buttonDIsHovering, buttonEIsHovering, buttonFIsHovering, buttonGIsHovering, buttonHIsHovering];
    const buttonHoverProps = [buttonAHoverProps, buttonBHoverProps, buttonCHoverProps, buttonDHoverProps, buttonEHoverProps, buttonFHoverProps, buttonGHoverProps, buttonHHoverProps];
    const navigate = useNavigate();
    const [mentorData, setMentorData] = useState<User>();
    const [chipData, setChipData] = useState({
                                                 "1st Preference Course": "",
                                                 "2nd Preference Course": "",
                                                 "3rd Preference Course": "",
                                                 "Current Institute": "",
                                                 "Campus Preference": "",
                                                 "Language Preference": "",
                                                 "Previous Institute": "",
                                             });
    
    useEffect(() => {
        ( async () => {
            const mentorD = await getUser();
            
            if(!mentorD) {
                // TODO: SHOW ERROR
                return;
            }
            setMentorData(mentorD!);
            const mentorMeta = mentorData?.[ "mentorMeta" ];
            setChipData({
                            "1st Preference Course": mentorData?.interests[ 0 ] || "N/A",
                            "2nd Preference Course": mentorData?.interests[ 1 ] || "N/A",
                            "3rd Preference Course": mentorData?.interests[ 2 ] || "N/A",
                            "Current Institute": mentorData?.institute || "N/A",
                            "Campus Preference": mentorData?.campusPreference! || "N/A",
                            "Language Preference": mentorMeta?.languages.join(', ')! || "N/A",
                            "Previous Institute": mentorMeta?.campusInfo.previousInstitute! || "N/A",
                        });
            
        } )();
    }, []);
    
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
                    <Avatar sx={{ alignSelf: "center", margin: 2 }} src={mentorData?.profilePic}/>
                    <Typography textAlign={"center"} sx={{ color: "white" }}>
                        {mentorData?.name}
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
                                        {`${mentorData?.name}`}
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
                                        onClick={() => {
                                            window.open(mentorData?.linkedIn);
                                        }}
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
                                    {mentorData?.about || "NA"}
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
                                {`${mentorData?.name} interest / Academic qualifications`}
                            </Typography>
                            <Stack>
                                {Object.keys(chipData).map(( key, index ) => {
                                    
                                    const hoverProp = buttonHoverProps[ index ];
                                    const isHovering = buttonIsHovering[ index ];
                                    
                                    return <Chip
                                        {...hoverProp}
                                        
                                        label={!isHovering ?
                                               key :
                                            // @ts-ignore
                                               chipData[ key ]}
                                        variant={"filled"}
                                        sx={chipCSS}
                                    />;
                                })}
                            </Stack>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    );
};

export default StudentProfileMPOV;