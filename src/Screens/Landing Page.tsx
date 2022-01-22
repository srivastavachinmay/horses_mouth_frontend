<<<<<<< Updated upstream
import React,{useState, useEffect} from 'react';
import SidebarFab from "./Components/SidebarFab";
=======
import React from 'react';
>>>>>>> Stashed changes
import { Avatar, Box, Button, Card, CardHeader, Chip, Typography } from "@mui/material";
import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged,GoogleAuthProvider,signInWithPopup,UserCredential, } from "firebase/auth";
import { auth } from "../utils/firebase";
import axios from "axios";

const LandingPage = () => {
    const url =
    "https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";
  const [authenticate, setAuthenticate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<UserCredential>();
  const navigate = useNavigate();
  useEffect(() => {
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

      if (res?.data?.users?.length !== 0) {
        navigate("/");
      } else {
        alert("response not received");
      }
      setLoading(false);
    })();
}, [authenticate]);

    onAuthStateChanged(auth, ( user ) => {
        if(!user) {
            navigate("/register");
            return null;
        } else {
            // localStorage.setItem("token", user.accessToken);
            user.getIdToken(true).then(function(idToken) {
                console.log("Got token"+idToken)
                localStorage.setItem("idtoken",idToken)
            }).catch(function(error) {
                console.log("Got error")
                console.log(error)

            });
            console.log(user);
        }
    })
    const googleAuthentication = async () => {
        let googleProvider = new GoogleAuthProvider();
    
        const res = await signInWithPopup(auth, googleProvider).catch(
          (err: any) => {
            console.log(err);
          }
        );
        if (!res) {
          console.log("No response received")
        } else {
          setData(res);
          (authenticate)?setAuthenticate(false):setAuthenticate(true);
          setLoading(true);
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
    }
<<<<<<< Updated upstream

    const savetoken = async() =>{
        console.log("called function")
        //@ts-ignore
        let idToken=""
        // let idToken= await auth.currentUser.getIdToken(true);
        // localStorage.setItem("idtoken",idToken)
        console.log(idToken)
    }
=======
    //
    // const savetoken = () =>{
    //     console.log("called function")
    //     getIdToken(true).then(function(idToken) {
    //         console.log("Got token"+idToken)
    //         localStorage.setItem("idtoken",idToken)
    //       }).catch(function(error) {
    //           console.log("Got error")
    //         console.log(error)
    //
    //       });
    // // }


>>>>>>> Stashed changes

      
    const ProfileCard = () => {
        return (
            <Box display={"flex"}>
                <Box margin={5} width={300} height={300} display={"flex"} flexDirection={"column"}
                     justifyContent={"space-evenly"} alignItems={"center"}>
                    <Avatar sx={{ width: 147, height: 147 }}>
                    </Avatar>
                    <Typography color={'#6E3CBC'} fontWeight={"800"} fontSize={20} textAlign={"center"}>
                        Step 1 : REGISTER AS A STUDENT ON HORSE’S MOUTH<br/><br/>
                    </Typography>
                </Box>
                <Box margin={5} width={300} height={300} display={"flex"} flexDirection={"column"}
                     justifyContent={"space-evenly"}
                     alignItems={"center"}>
                    <Avatar sx={{ width: 147, height: 147 }}>
                    </Avatar>
                    <Typography color={'#6E3CBC'} fontWeight={"800"} fontSize={20} textAlign={"center"}>
                        Step 2 : SCHEDEULE A CALL WITH THE BEST MENTORS AROUND THE WORLD
                    </Typography>
                </Box>
                <Box margin={5} width={300} height={300} display={"flex"} flexDirection={"column"}
                     justifyContent={"space-evenly"}
                     alignItems={"center"}>
                    <Avatar sx={{ width: 147, height: 147 }}>
                    </Avatar>
                    <Typography color={'#6E3CBC'} fontWeight={"800"} fontSize={20} textAlign={"center"}>
                        Step 3 : LEARN FROM YOUR MENTOR AND MAKE BETTER COLLEGE DECISIONS
                    </Typography>
                </Box>
            </Box>
        )
    }

    savetoken()
    const CustomCard = () => {
        return <div>

            <Card variant={"outlined"} sx={{
                margin: 5,
                width: 255,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                alignItems: "center",
                borderRadius: 3,
                border: 5,
                borderColor: '#D4CFFF'
            }}>
                <Avatar sx={{ width: 147, height: 147 }}
                        src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fdragonballuniverse.fandom.com%2Fwiki%2FUltra_Instinct&psig=AOvVaw156j5RHdB00_uqfdptVEm6&ust=1640591076506000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJif3Jb8gPUCFQAAAAAdAAAAABAP"}>
                </Avatar>
                <CardHeader sx={{ color: '#6E3CBC', fontWeight: "bold", fontSize: 60 }} title={'John Doe'}/>

                <Chip sx={chipCSS} label={'University of waterloo'}/>
                <Chip sx={chipCSS} label={'bachelor’s'}/>
                <Chip sx={chipCSS} label={'Mech. engg.'}/>
                <Button variant={'contained'}
                        sx={{ bgcolor: '#7267CB', fontWeight: 'bold', fontSize: 11, marginRight: 2 }}>
                    Book a session
                </Button>
                <Chip sx={chipCSS} label={'student'}/>
            </Card>

        </div>
    }
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
            <div style={{ height: '100vh', display: "inline-flex" }}>
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
<<<<<<< Updated upstream
                    <Button variant={'outlined'} sx={{ borderRadius: 3, fontWeight: 'bold', fontSize: 20, margin: 2 }} onClick={googleAuthentication}>
                        Login
                    </Button>
                    <Button variant={'contained'}
                            sx={{ borderRadius: 3, fontWeight: 'bold', fontSize: 20, margin: 2 }} onClick={()=>{navigate("/register")}}>
                        Sign up
=======
                    <Button variant={'contained'}
                            sx={{ borderRadius: 3, fontWeight: 'bold', fontSize: 20, margin: 2 }}>
                        Login / Sign up
>>>>>>> Stashed changes
                    </Button>
                </div>
            </div>
            <Box height={'80vh'} bgcolor={'#D4CFFF'} display={"flex"} flexDirection={"column"} justifyContent={"center"}
                 alignItems={"center"}>
                <Box display={"flex"}>
                    <Typography fontWeight={700} fontSize={18} color={'#6E3CBC'}>
                        For students |&nbsp;
                    </Typography>
                    <Typography fontWeight={700} fontSize={18} color={'#7972fd'}>
                        For mentors
                    </Typography>
                </Box>
                <ProfileCard/>
            </Box>
            <Box sx={{
                height: '80vh',
                backgroundColor: '#7267CB',
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Typography color={"white"} fontSize={20} fontWeight={700} right={500} bottom={200}
                            position={"relative"}>
                    G . O . A . T Mentors
                </Typography>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} margin={5} position={"absolute"}>
                    <CustomCard/>
                    <CustomCard/>
                    <CustomCard/>
                </Box>
                <Typography color={"white"} position={"relative"} fontWeight={700} textAlign={"center"} fontSize={20}
                            top={150} right={70}>
                    see more &gt;
                </Typography>
            </Box>
            <Box sx={{
                height: '80vh',
                backgroundColor: '#111111',
                display: "flex",
                justifyContent: "center",
                alignItems: "center"

            }}>

            </Box>

            <Box sx={{
                height: '40vh',
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 5,
                backgroundColor: '#D4CFFF'
            }}>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"start"}>
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
                        <Box display={"flex"} flexDirection={"column"} alignItems={"end"} paddingBottom={5}
                             justifyContent={"center"}>
                            <Typography color={'#6E3CBC'} fontWeight={"800"} fontSize={36}>
                                UNDERSTAND THE NEXT 2-4 YEARS,
                            </Typography>
                            <Typography color={'#6E3CBC'} fontWeight={"800"} fontSize={36}>
                                IN THE NEXT 20 MINUTES.
                            </Typography>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} alignItems={"end"} justifyContent={"center"}>
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