import { Search, VerifiedRounded }                                                     from "@mui/icons-material";
import { Avatar, Button, Checkbox, Chip, FormControlLabel, InputAdornment, TextField } from "@mui/material";
import Box                                                                             from '@mui/material/Box';
import Container                                                                       from '@mui/material/Container';
import CssBaseline                                                                     from '@mui/material/CssBaseline';
import Grid                                                                            from '@mui/material/Grid';
import List                                                                            from '@mui/material/List';
import Paper                                                                           from '@mui/material/Paper';
import Typography                                                                      from '@mui/material/Typography';
import * as React                                                                      from "react";
import { useEffect, useState }                                                         from "react";
import { Link, useNavigate }                                                           from "react-router-dom";
import { getMentorSearch }                                                             from "../axios/Mentor";
import { getUser }                                                                     from "../axios/User";
import { IMentor }                                                                     from "../models/IMentor";
import { User }                                                                        from "../models/IUser";
import { components }                                                                  from "../utils/shivamBhadwa";
import { Drawer }                                                                      from "./Components/Drawer";
import { StudentSidebarList }                                                          from './Components/listItems';

export default function MentorListing() {
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
    const navigate = useNavigate();
    const [page, setPage] = React.useState(1);
    const count = 9;
    const [mentorList, setMentorList] = useState<IMentor>();
    const [uniName, setUniName] = useState<string>();
    const [name, setName] = useState<string>();
    const [countryOfStudy, setCountryOfStudy] = useState<string>();
    const [countryOfOrigin, setCountryOfOrigin] = useState<string>();
    const [major, setMajor] = useState<components["schemas"]["Major"]>();
    const [status, setStatus] = useState<components["schemas"]["Status"]>();
    const [degree, setDegree] = useState<components["schemas"]["Degree"]>();
    const [mentorData, setMentorData] = useState<User>();
    const handleChange = ( event: React.ChangeEvent<unknown>, value: number ) => {
        setPage(value);
    };
    const getMentorsList = async () => {
        const mentorD = await getUser();
        setMentorData(mentorD!);
        setMentorList(await getMentorSearch({
                                                count: count,
                                                includeTotal: "false",
                                                page: page,
                                                uniName: uniName,
                                                name: name,
                                                countryOfStudy: countryOfStudy,
                                                countryOfOrigin: countryOfOrigin,
                                                /** can contain multiple comma seperated values */
                                                major: major,
                                                /** can contain multiple comma seperated values */
                                                status: status,
                                                /** can contain multiple comma seperated values */
                                                degree: degree,
                                            }
        ));
    };
    useEffect(()=>{
        (async ()=>{
            await getMentorsList()
        })()
        
    },[])
    useEffect(() => {
        console.log("useEffect called");
        (async ()=>{
            await getMentorsList()
        })()
    }, [countryOfOrigin, countryOfStudy, degree, major, name, page, status, uniName]);
    
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline/>
            {/*"Drawer"*/}
            <Drawer variant="permanent" open={true} sx={{ bgcolor: '#7267CB' }}>
                <Avatar sx={{ alignSelf: "center", margin: 2 }} src={mentorData?.profilePic}/>
                <Typography textAlign={"center"} sx={{ color: "white" }}>
                    {`${mentorData?.name}`}
                </Typography>
                <List sx={{ justifyContent: "center", m: 2, ml: 4 }}>{StudentSidebarList}</List>
            </Drawer>
            
            
            <Box
                component="main"
                sx={{
                    backgroundColor: '#EFEDFF',
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}>
                <Grid width={"-moz-max-content"} container sx={{ backgroundColor: '#EFEDFF' }}>
                    {/*<Grid item lg={7}>*/}
                    <Paper elevation={24} sx={{ mt: 2, ml: 2, width: 800, borderRadius: 2 }}>
                        <TextField fullWidth size={"small"} variant={"standard"}
                                   placeholder={'search for universities'}
                                   InputProps={{
                                       disableUnderline: true,
                                       startAdornment: <InputAdornment position="start">
                                           <Search sx={{ color: "#8631C8", ml: 2 }}/>
                                       </InputAdornment>,
                                   }}
                                   sx={{
                                       justifyContent: "center",
                                       color: "white",
                                       backgroundColor: "white",
                                       borderRadius: 2,
                            
                                       height: 40
                                   }}
                        
                        />
                    </Paper>
                    {/*</Grid>*/}
                    
                    <Grid container spacing={2} margin={2}>
                        <Grid item>
                            <FormControlLabel
                                label={<Typography fontWeight={"bold"}>students</Typography>}
                                sx={{ color: '#6E3CBC', }}
                                control={<Checkbox sx={{
                                    color: "#6E3CBC",
                                    '&.Mui-checked': {
                                        color: '#6E3CBC'
                                    },
                                }}/>}
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                label={<Typography fontWeight={"bold"}>alumni</Typography>}
                                sx={{ color: '#6E3CBC', }}
                                control={<Checkbox sx={{
                                    color: "#6E3CBC",
                                    '&.Mui-checked': {
                                        color: '#6E3CBC'
                                    },
                                }}/>}
                            />
                        </Grid>
                        
                        <Grid item>
                            <FormControlLabel
                                label={<Typography fontWeight={"bold"}>master's</Typography>}
                                sx={{ color: '#6E3CBC', }}
                                control={
                                    <Checkbox sx={{
                                        color: "#6E3CBC",
                                        '&.Mui-checked': {
                                            color: '#6E3CBC'
                                        },
                                    }}/>}
                            />
                        
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                label={<Typography fontWeight={"bold"}>batchelor's</Typography>}
                                sx={{ color: '#6E3CBC', }}
                                control={<Checkbox sx={{
                                    color: "#6E3CBC",
                                    '&.Mui-checked': {
                                        color: '#6E3CBC'
                                    },
                                }}/>}
                            />
                        
                        </Grid>
                    
                    
                    </Grid>
                
                </Grid>
                <Container maxWidth="xl" sx={{
                    mt: 1,
                    borderTop: 5,
                    borderColor: "white",
                    p: 3,
                    mb: 4,
                    backgroundColor: '#EFEDFF'
                }}>
                    <Grid container spacing={3}>
                        
                        {
                            mentorList?.mentors.map(( mentor, index ) => {
                                
                                return (
                                    <Link to={`mentorProfile/:${mentor.id}`}>
                                        <Grid item xs={12} md={6} lg={4} display={"flex"} alignItems={"center"}
                                              flexDirection={"row"} key={mentor.id}
                                            // onClick={() => {navigate(`mentorProfile/:${mentor.id}`);}}
                                        >
                                            <Avatar sx={{ width: 75, height: 75, zIndex: 2 }} src={mentor.profilePic}/>
                                            <Paper
                                                sx={{
                                                    zIndex: 1,
                                                    ml: -5,
                                                    position: "relative",
                                                    p: 2,
                                                    pl: 5,
                                                    width: 270,
                                                    borderRadius: 3,
                                                    display: 'inline-flex',
                                                    flexDirection: 'row',
                                                    height: 200,
                                                    flexWrap: 'wrap'
                                                }}
                                            >
                                                <Typography alignSelf={"center"} fontWeight={"bold"}
                                                            justifySelf={"center"}>
                                                    {`${mentorData?.name}`}
                                                </Typography>
                                                <VerifiedRounded
                                                    sx={{
                                                        m: 1,
                                                        width: 18,
                                                        height: 18,
                                                        color: "#0FA958",
                                                    }}
                                                />
                                                <Chip sx={{
                                                    bgcolor: '#D4CFFF',
                                                    margin: 0.5,
                                                    border: 1,
                                                    borderColor: "#6E3CBC",
                                                    fontSize: 11,
                                                    color: '#6E3CBC',
                                                    fontWeight: "bolder",
                                                    borderRadius: 2,
                                                    width: '100%'
                                                    
                                                }} label={`${mentor.campusInfo.uniName}`}/>
                                                <Chip sx={chipCSS} label={`${mentor.degree}`}/>
                                                <Chip sx={chipCSS} label={`${mentor.major}`}/>
                                                
                                                <Button variant={'contained'}
                                                        onClick={() => {navigate(`../mentorProfile/:${mentor.id}`);}}
                                                        sx={{
                                                            bgcolor: '#7267CB',
                                                            fontWeight: 'bold',
                                                            fontSize: 11,
                                                            mt: 0.5,
                                                            height: 30
                                                        }}>
                                                    Book a session
                                                </Button>
                                                <Chip sx={chipCSS} label={`${mentor.status}`}/>
                                            </Paper>
                                        
                                        
                                        </Grid>
                                    </Link> );
                            })
                        }
                    
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
        ;
}