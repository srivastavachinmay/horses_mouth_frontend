import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import {
    Avatar,
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    TextField,
} from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { MentorSidebarList } from "./Components/listItems";
import Container from "@mui/material/Container";
import { Drawer } from "./Components/Drawer";
import styling from '../styles/CalendarStyles'
import TimePicker from '@mui/lab/TimePicker';

const Calender = () => {

    const [day, setDay] = React.useState('Sunday');
    const [fromtime, setfromtime] = React.useState<Date | null>(new Date('2014-08-18T21:15:54'),);
    const [totime, settotime] = React.useState<Date | null>(new Date('2014-08-18T21:35:54'),);
    const [formats, setFormats] = React.useState(() => ['Sunday']);

    const handleFormat = (
        event: React.MouseEvent<HTMLElement>,
        newFormats: string[]) => {
        setFormats(newFormats);
    };
    const handleChange = (event: SelectChangeEvent) => {
        setDay(event.target.value);
    };
    const handlefrom = (newValue: Date | null) => {
        setfromtime(newValue);
        //@ts-ignore
        let secondtime=new Date(newValue?.getTime() + 20*60000)
        settotime(secondtime)
      };
    const handleto = (newValue: Date | null) => {
        settotime(newValue);
      };
    const selectCSS = {
        alignSelf: "center",
        justifyContent: "center",
        color: '#6E3CBC',
        fontWeight: "bold"
    }
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
    const classes = styling()
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            {/*"Drawer"*/}
            <Drawer variant="permanent" open={true} sx={{ bgcolor: "#7267CB" }}>
                <Avatar sx={{ alignSelf: "center", margin: 2 }} />
                <Typography textAlign={"center"} sx={{ color: "white" }}>
                    John Doe
                </Typography>
                <List sx={{ justifyContent: "center", m: 2, ml: 4 }}>{MentorSidebarList}</List>
            </Drawer>

            <Box
                component="main"
                sx={{

                    flexGrow: 1,
                    height: "100vh",
                    overflow: "auto",
                }}
            >
                <Container
                    maxWidth="xl"
                    sx={{
                        p: 5,

                        height: "100%",
                        display: "flex",
                        justifyContent: "center"
                    }}>
                    <Stack width={'90%'} alignItems={"center"}>
                        <Typography color={'#6E3CBC'} fontWeight={700} sx={{
                            textAlign: "start",
                            pt: 2,
                            pb: 2,
                            width: '100%'
                        }}>India Heat zone 24 hr timeline</Typography>
                        <Box sx={{
                            color: '#6E3CBC',
                            height: 236,
                            border: 2,
                            width: '100%',
                            pt: 2,
                            pb: 1,
                            background: 'linear-gradient(90deg, #E38686 0%, rgba(205, 62, 62, 0.536687) 35.06%, rgba(255, 168, 0, 0.316841) 59.66%, rgba(112, 255, 0, 0.165602) 96.43%)'
                        }} />
                        <Box display={"flex"} width={'100%'} margin={2} justifyContent={"space-around"}>
                            <Box display={"flex"}>
                                <Box display={"flex"} justifyContent={'space-around'}
                                    sx={{
                                        bgcolor: '#F57676',
                                        width: 18,
                                        mr: 1,
                                        height: 18
                                    }} />
                                <Typography color={'#6E3CBC'} fontSize={12} fontWeight={700} lineHeight={1}>Red
                                    zones: most no. of
                                    sessions schedeuled </Typography>
                            </Box>

                            <Box display={"flex"}>
                                <Box display={"flex"} justifyContent={'space-around'}
                                    sx={{
                                        bgcolor: '#FAFF00',
                                        width: 18,
                                        mr: 1,
                                        height: 18
                                    }} />
                                <Typography color={'#6E3CBC'} fontSize={12} fontWeight={700} lineHeight={1}>yellow
                                    zones: moderate no. of sessions schedeuled </Typography>
                            </Box>

                            <Box display={"flex"}>
                                <Box display={"flex"} justifyContent={'space-around'}
                                    sx={{
                                        bgcolor: '#52FF00',
                                        width: 18,
                                        mr: 1,
                                        height: 18
                                    }} />
                                <Typography color={'#6E3CBC'} fontSize={12} fontWeight={700} lineHeight={1}>green
                                    zones: least no. of sessions schedeuled </Typography>
                            </Box>
                        </Box>
                        <Typography sx={{
                            fontSize: 18,
                            fontWeight: 700,
                            color: '#6E3CBC',
                            textAlign: "start",
                            width: '100%'
                        }}>
                            Schedeule your available slots
                        </Typography>
                        <Box display={"flex"} flexWrap={"wrap"} width={'100%'}
                            justifyContent={"space-around"}>
                            <Stack width={'50%'} padding={2}>
                                <Typography sx={{
                                    fontSize: 18,
                                    fontWeight: 700,
                                    color: '#7267CB',
                                    textAlign: "center",
                                    width: '100%'
                                }}>
                                    Your time zone 24 hr format
                                </Typography>
                                <FormControl variant={"standard"}
                                    sx={{ m: 1, bgcolor: '#6E3CBC', borderRadius: 3 }}>

                                    <Select
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
                                <Typography sx={{
                                    fontSize: 23,
                                    fontWeight: 700,
                                    color: '#7267CB',
                                    width: '100%',
                                    padding:'10px 20px'
                                }}>
                                    24th December 2021
                                </Typography>
                                <Typography sx={{
                                    fontSize: 15,
                                    fontWeight: 700,
                                    color: '#7267CB',
                                    width: '100%',
                                    padding:'3px 20px'
                                }}>
                                    Slot 1
                                </Typography>
                                <div className={classes.timepart}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    label="From"
                                    value={fromtime}
                                    onChange={handlefrom}
                                    renderInput={(params) => <TextField {...params} style={{width:"40%"}}/>}
                                    />
                                <TimePicker
                                    label="To"
                                    value={totime}
                                    onChange={handleto}
                                    disabled
                                    renderInput={(params) => <TextField {...params} style={{width:"40%"}}/>}
                                    />
                                </LocalizationProvider>
                                </div>
                            </Stack>
                            <Stack width={'50%'} padding={2}>
                                <Typography sx={{
                                    fontSize: 18,
                                    fontWeight: 700,
                                    color: '#7267CB',
                                    textAlign: "center",
                                    width: '100%'
                                }}>
                                    Indian timezone 24 hr format
                                </Typography>
                                    <FormControl variant={"standard"}
                                        sx={{ m: 1, bgcolor: '#6E3CBC', borderRadius: 3 }}>

                                        <Select
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
                                    <Typography sx={{
                                    fontSize: 23,
                                    fontWeight: 700,
                                    color: '#7267CB',
                                    width: '100%',
                                    padding:'10px 20px'
                                }}>
                                    24th December 2021
                                </Typography>
                                    <Typography sx={{
                                    fontSize: 15,
                                    fontWeight: 900,
                                    color: '#7267CB',
                                    width: '100%',
                                    padding:'3px 20px'
                                }}>
                                    Slot 1
                                </Typography>
                                <div className={classes.timepart}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    label="From"
                                    value={fromtime}
                                    onChange={handlefrom}
                                    disabled
                                    renderInput={(params) => <TextField {...params} style={{width:"40%"}}/>}
                                    />
                                <TimePicker
                                    label="To"
                                    value={totime}
                                    onChange={handleto}
                                    disabled
                                    renderInput={(params) => <TextField {...params} style={{width:"40%"}}/>}
                                    />
                                </LocalizationProvider>
                                </div>
                            </Stack>
                        </Box>


                    </Stack>
                </Container>
            </Box>
        </Box>
    );
};

export default Calender;