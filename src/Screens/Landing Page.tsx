import { Instagram, LinkedIn, Twitter }                                             from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardHeader, Chip, Grid, Tab, Tabs, Typography } from "@mui/material";
import axios                                                                        from 'axios';
import { GoogleAuthProvider, signInWithPopup, UserCredential, }                     from "firebase/auth";
import React, { useEffect, useState }                                               from 'react';
import { useNavigate }                                                              from "react-router-dom";
import appointment                                                                  from "../assets/appointment.png";
import bennett                                                                      from "../assets/bennettLogo.png";
import chat                                                                         from "../assets/chat.png";
import group83                                                                      from "../assets/group83.png";
import group84                                                                      from "../assets/group84.png";
import piggyBank                                                                    from '../assets/piggy-bank.png';
import signup                                                                       from "../assets/signup.png";
import startUp                                                                      from "../assets/startUp.png";
import { auth }                                                                     from "../utils/firebase";
import MentorCard                                                                   from "./Components/MentorCard";

const LandingPage = () => {
    
    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabChange = ( event: React.SyntheticEvent, value: React.SetStateAction<number> ) => {
        setSelectedTab(value);
    };
    const url =
    "https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";
  const [authenticate, setAuthenticate] = useState(false);
  const [loggingin, setloggingin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<UserCredential>();
  const navigate = useNavigate();
  useEffect(() => {
    if(loggingin)
    {
    (async () => {
      const token = await data?.user?.getIdToken(true);
      let idtoken:string = token!;
      localStorage.setItem("idtoken",idtoken)

      const res = await axios
        .get(`${url}/user`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .catch((err: any) => {
          console.log(err);
          setLoading(false);
        });

      console.log(res);
    //   console.log(res?.data?.users?.length);

      if (res?.data?.users?.length !== 0 && res!==undefined) {
        (res?.data?.users[0]?.type==="user")?
        navigate("/mentorProfileM"):
        navigate("/studentProfileS")
      } else {
        // alert("response not received");
      }
      setLoading(false);
    })();
    }
}, [authenticate]);
    
    /* This would be there on necessary routes where check is needed */
    // onAuthStateChanged(auth, ( user ) => {
    //     if(!user) {
    //         navigate("/register");
    //         return null;
    //     } else {
    //         // localStorage.setItem("token", user.accessToken);
    //         user.getIdToken(true).then(function( idToken ) {
    //             console.log("Got token" + idToken);
    //             localStorage.setItem("idtoken", idToken);
    //         }).catch(function( error ) {
    //             console.log("Got error");
    //             console.log(error);
    
    //         });
    //         console.log(user);
    //     }
    // });
    const googleAuthentication = async () => {
        let googleProvider = new GoogleAuthProvider();
        
        const res = await signInWithPopup(auth, googleProvider).catch(
            ( err: any ) => {
                console.log(err);
            }
        );
        if(!res) {
            console.log("No response received");
        } else {
            setData(res);
            ( authenticate ) ? setAuthenticate(false) : setAuthenticate(true);
            setLoading(true);
            setloggingin(true);
        }
    };
    const chipCSS = {
        bgcolor: '#D4CFFF',
        margin: 0.5,
        border: 1,
        borderColor: "#6E3CBC",
        fontSize: 11,
        color: '#6E3CBC',
        fontWeight: "bolder",
        borderRadius: 2
    };
    
    const ProfileCard = () => {
        return (
            <Box display={"flex"} alignItems={"center"} justifyContent={"center"} flexWrap={"wrap"}>
                <Box margin={5} width={300} height={300} display={"inline-flex"} flexDirection={"column"}
                     justifyContent={"space-evenly"} alignItems={"center"}>
                    <Box
                        component="img"
                        sx={{ height: 147, width: 147, }}
                        src={signup}
                    />
                    <Typography color={'#6E3CBC'} fontWeight={"800"} textTransform={"uppercase"} fontSize={20}
                                textAlign={"center"}>
                        {selectedTab === 0 ?
                         `Step 1 : REGISTER AS A STUDENT ON HORSE’S MOUTH` :
                         `Step 1 : REGISTER AS A MENTOR on Horse’s Mouth`}<br/><br/>
                    </Typography>
                </Box>
                <Box margin={5} width={300} height={300} display={"flex"} flexDirection={"column"}
                     justifyContent={"space-evenly"}
                     alignItems={"center"}>
                    <Box
                        component="img"
                        sx={{ height: 147, width: 147, }}
                        src={appointment}
                    />
                    <Typography color={'#6E3CBC'} fontWeight={"800"} textTransform={"uppercase"} fontSize={20}
                                textAlign={"center"}>
                        {selectedTab === 0 ?
                         `Step 2 : SCHEDULE A CALL WITH THE BEST MENTORS AROUND THE WORLD` :
                         `Step 2 :  Upload your schdeule with 24 hr flexible slot timings`}
                    </Typography>
                </Box>
                <Box margin={5} width={300} height={300} display={"flex"} flexDirection={"column"}
                     justifyContent={"space-evenly"}
                     alignItems={"center"}>
                    <Box
                        component="img"
                        sx={{ height: 147, width: 147, }}
                        src={selectedTab === 0 ? chat : piggyBank}
                    />
                    <Typography color={'#6E3CBC'} textTransform={"uppercase"} fontWeight={"800"} fontSize={20}
                                textAlign={"center"}>
                        {selectedTab === 0 ?
                         `Step 3 : LEARN FROM YOUR MENTOR AND MAKE BETTER COLLEGE DECISIONS` :
                         `Step 3 : Talk to students and earn money !`}
                    </Typography>
                </Box>
            </Box>
        );
    };
    
    
    return (
        <div>
            <Box sx={{
                position: "absolute",
                borderRadius: '50%',
                marginLeft: -7,
                marginTop: 10,
                bgcolor: "#D4CFFF",
                width: "10rem",
                height: "10rem"
            }}/>
            <div style={{ minHeight: '100vh', maxHeight: "max-content", display: "flex" }}>
                <Box sx={{ marginLeft: 30, marginTop: 30 }}>
                    <Typography sx={{ fontSize: 42, fontWeight: "bolder", color: '#6E3CBC' }}>
                        Understand the on ground<br/>
                        reality of your university
                    </Typography>
                    
                    <Typography sx={{ fontSize: 24, fontWeight: 550, color: 'black' }}>
                        Book one on one mentoring sessions <br/>
                        with students around the world
                    </Typography>
                    <Button variant={'outlined'}
                            sx={{ borderRadius: 3, fontWeight: 'bold', fontSize: 20, marginRight: 2 }}>
                        Book a session
                    </Button>
                    <Button variant={'contained'}
                            sx={{ borderRadius: 3, fontWeight: 'bold', fontSize: 20, margin: 2 }}>
                        Become a mentor
                    </Button>
                </Box>
                <div style={{
                    margin: 5,
                    padding: 5,
                    top: 20,
                    left: "auto",
                    bottom: "auto",
                    right: 20,
                    position: 'absolute',
                }}>
                    <Button variant={'outlined'} sx={{ borderRadius: 3, fontWeight: 'bold', fontSize: 20, margin: 2 }}
                            onClick={googleAuthentication}
                    >
                        Login
                    </Button>
                    <Button variant={'contained'}
                            sx={{ borderRadius: 3, fontWeight: 'bold', fontSize: 20, margin: 2 }}
                            onClick={() => {navigate("/register");}}>
                        Sign up
                    </Button>
                </div>
                <Box
                    display={{ xs: 'none', lg: 'block' }}
                    alignSelf={"flex-end"}
                    justifySelf={"flex-end"}
                    component="img"
                    sx={{
                        width: '40%',
                        height: '40%',
                        
                        // bottom: 0,
                        // right: 0,
                        // top: 'auto',
                        // left: 'auto',
                        
                    }}
                    src={group84}
                />
            </div>
            <Box minHeight={'80vh'} maxHeight={"max-content"} bgcolor={'#D4CFFF'} display={"flex"}
                 flexDirection={"column"} justifyContent={"center"}
                 alignItems={"center"}>
                <Tabs value={selectedTab} indicatorColor={"primary"} color={'#6E3CBC'}
                      textColor={"primary"} onChange={handleTabChange}>
                    <Tab label={'For students & PARENTS'}/>
                    <Tab label={'For COLLEGE STUDENTS & ALUMNI'}/>
                </Tabs>
                {/*<Box display={"flex"}>*/}
                {/*    <Typography fontWeight={700} fontSize={18} color={'#6E3CBC'}>*/}
                {/*        For students |&nbsp;*/}
                {/*    </Typography>*/}
                {/*    <Typography fontWeight={700} fontSize={18} color={'#7972fd'}>*/}
                {/*        For mentors*/}
                {/*    </Typography>*/}
                {/*</Box>*/}
                {selectedTab === 0 && <ProfileCard/>}
                {selectedTab === 1 && <ProfileCard/>}
            </Box>
            <Box
                flexWrap={"wrap"}
                sx={{
                    minHeight: '80vh',
                    padding: 4,
                    maxHeight: "max-content",
                    backgroundColor: '#7267CB',
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Typography color={"white"} sx={{ flexGrow: 1 }} fontSize={20} fontWeight={700}>
                    G . O . A . T Mentors
                </Typography>
                <Grid container width={'100%'} sx={{ flexGrow: 8 }} spacing={2} wrap={"wrap"}>
                    <MentorCard profilePic={"/"} name={"John Doe"} status={"Student"} major={"STEM"}
                                degree={"batchelor"} uniName={"University of Waterloo"}/>
                    <MentorCard profilePic={"/"} name={"Katrina Kaif"} status={"Student"} major={"Social Sciences"}
                                degree={"master"} uniName={"University of Toronto"}/>
                    <MentorCard profilePic={"/"} name={"Sonam Kapoor"} status={"Alumni"} major={"Humanities"}
                                degree={"Phd"} uniName={"Oxford University"}/>
                </Grid>
                {/*<Typography color={"white"} fontWeight={700} textAlign={"center"} fontSize={20}>*/}
                {/*    see more &gt;*/}
                {/*</Typography>*/}
            </Box>
            <Box sx={{
                minHeight: '100vh',
                maxHeight: "max-content",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
                
            }}>
                <Box
                    component="img"
                    sx={{ width: '60%', m: 3 }}
                    src={group83}
                />
                <Typography color={'#6E3CBC'} fontWeight={"bold"} fontSize={20} margin={2}>Incubated by</Typography>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                }}>
                    <Box
                        component="img"
                        
                        sx={{ width: '30%' }}
                        src={startUp}
                    />
                    <Box
                        component="img"
                        
                        sx={{ width: '30%' }}
                        src={bennett}
                    />
                </Box>
            </Box>
            
            <Box sx={{
                minHeight: '40vh',
                maxHeight: "max-content",
                paddingLeft: 15,
                flexWrap: "wrap",
                paddingRight: 15,
                paddingTop: 5,
                backgroundColor: '#D4CFFF'
            }}>
                <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"}
                     alignItems={{ md: "start", xs: "center" }}>
                    <Box>
                        <Typography color={'#6E3CBC'} fontWeight={700} fontSize={20}>
                            Home<br/>
                            Become a mentor<br/>
                            Book a session<br/>
                            Terms & Conditions
                        </Typography>
                        <Box display={"flex"} width={100} justifyContent={"space-between"}>
                            <Instagram color={"primary"}/>
                            <LinkedIn color={"primary"}/>
                            <Twitter color={"primary"}/>
                        </Box>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"}
                         alignItems={"flex-end"}>
                        <Box display={{ xs: "none", md: "flex" }} flexDirection={"column"} alignItems={"end"}
                             paddingBottom={5}
                             justifyContent={"center"}>
                            <Typography color={'#6E3CBC'} fontWeight={"800"} fontSize={36}>
                                UNDERSTAND THE NEXT 2-4 YEARS,
                            </Typography>
                            <Typography color={'#6E3CBC'} fontWeight={"800"} fontSize={36}>
                                IN THE NEXT 20 MINUTES.
                            </Typography>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} alignItems={{ md: "end", xs: "start" }}
                             justifyContent={"center"}>
                            <Typography color={'#6E3CBC'} fontWeight={"800"} fontSize={20}>
                                Email us at
                            </Typography>
                            <Typography color={'#6E3CBC'} fontWeight={"800"} fontSize={20}>
                                raunak.horsesmouth@gmail.com
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            
            </Box>
        
        </div>
    );
};

export default LandingPage;