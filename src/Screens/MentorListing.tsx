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
import { useEffect }                                                                   from "react";
import { Drawer }                                                                      from "./Components/Drawer";
import { StudentSidebarList }                                                          from './Components/listItems';

export default function MentorListing() {
    
    useEffect(() => {
    
    }, []);
    
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
    
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline/>
            {/*"Drawer"*/}
            <Drawer variant="permanent" open={true} sx={{ bgcolor: '#7267CB' }}>
                <Avatar sx={{ alignSelf: "center", margin: 2 }}/>
                <Typography textAlign={"center"} sx={{ color: "white" }}>
                    John Doe
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
                        {/* Chart */}
                        
                        
                        <Grid item xs={12} md={6} lg={4} display={"flex"} alignItems={"center"}
                              flexDirection={"row"}>
                            <Avatar sx={{ width: 75, height: 75, zIndex: 2 }}/>
                            
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
                                <Typography alignSelf={"center"} fontWeight={"bold"} justifySelf={"center"}>John
                                    Doe</Typography><VerifiedRounded
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
                                    
                                }} label={'University of waterloo'}/>
                                <Chip sx={chipCSS} label={'bachelor’s'}/>
                                <Chip sx={chipCSS} label={'Mech. engg.'}/>
                                <Button variant={'contained'}
                                        sx={{
                                            bgcolor: '#7267CB',
                                            fontWeight: 'bold',
                                            fontSize: 11,
                                            mt: 0.5,
                                            height: 30
                                        }}>
                                    Book a session
                                </Button>
                                <Chip sx={chipCSS} label={'student'}/>
                            </Paper>
                        </Grid>
                    
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}