import { MonetizationOnOutlined, PointOfSale }                                    from "@mui/icons-material";
import { Avatar, Button, createTheme, ListItem, Paper, Tab, Tabs, ThemeProvider } from "@mui/material";
import Box                                                                        from "@mui/material/Box";
import Container                                                                  from "@mui/material/Container";
import CssBaseline                                                                from "@mui/material/CssBaseline";
import List                                                                       from "@mui/material/List";
import Typography                                                                 from "@mui/material/Typography";
import React, { useEffect, useState }                                             from "react";
import { getPenalty }                                                             from "../axios/Penalty";
import { getWithdrawls }                                                          from "../axios/Withdrawls";
import { Penalty }                                                                from "../models/IPenalty";
import { Withdrawl }                                                              from "../models/IWithdrawls";
import { Drawer }                                                                 from "./Components/Drawer";
import { MentorSidebarList }                                                      from "./Components/listItems";

const tabTheme = createTheme({
                                 palette: {
                                     primary: {
                                         main: '#6E3CBC',
                                     },
                                 },
                                 typography: {
                                     fontFamily: 'Poppins',
                                 },
                             });

const Wallet = () => {
    const [paidWallet, setPaidWallet] = useState<Withdrawl[]>();
    const [waitingWallet, setWaitingWallet] = useState<Withdrawl[]>();
    const [penalty, setPenalty] = useState<Penalty[]>();
    const [selectedTab, setSelectedTab] = useState(0);
    // const [state, setState] = useState<'waiting' | 'paid'>('paid');
    const handleTabChange = ( event: React.SyntheticEvent, value: React.SetStateAction<number> ) => {
        setSelectedTab(value);
    };
    
    useEffect(() => {
        ( async () => {
            setPaidWallet(( await getWithdrawls('paid') )?.withdrawls);
            setWaitingWallet(( await getWithdrawls('waiting') )?.withdrawls);
            setPenalty(( await getPenalty() )?.penalties);
        } )();
    }, []);
    
    return (
        <ThemeProvider theme={tabTheme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline/>
                {/*"Drawer"*/}
                <Drawer variant="permanent" open={true} sx={{ bgcolor: "#7267CB" }}>
                    <Avatar sx={{ alignSelf: "center", margin: 2 }} src={paidWallet?.[ 0 ].mentor.name}/>
                    <Typography textAlign={"center"} sx={{ color: "white" }}>
                        {`${paidWallet?.[ 0 ]?.mentor?.name}`}
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
                            width: '90%',
                            display: "flex",
                            justifyContent: "space-between"
                        }}
                    >
                        <Box>
                            <Typography color={'#6E3CBC'} fontWeight={600} fontSize={16}>Note: The current rate of
                                charge is Rs.1125 / hour</Typography>
                            <Paper sx={{
                                width: 445,
                                height: 600,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                borderRadius: 4
                                
                            }}>
                                <Typography color={'#6E3CBC'} fontSize={16} fontWeight={700}>your wallet</Typography>
                                <Typography color={'#6E3CBC'} fontSize={27}
                                            fontWeight={700}>{`Rs. ${paidWallet?.[ 0 ].mentor.amountAvailable}`}</Typography>
                                <Typography color={'#6E3CBC'} fontSize={16} fontWeight={700}
                                            sx={{ color: '#6E3CBC80' }}>your balance</Typography>
                                <Typography color={'#6E3CBC'} fontSize={16} fontWeight={700}>Recent
                                    Transactions</Typography>
                                <Tabs value={selectedTab} indicatorColor={"primary"} color={'#6E3CBC'}
                                      textColor={"primary"} onChange={handleTabChange}>
                                    <Tab label={'Completed'}/> |
                                    <Tab label={'Pending'}/>
                                </Tabs>
                                {selectedTab === 0 &&
                                    <List sx={{ overflowY: "auto", height: 300, width: 300 }}>
                                        {
                                            paidWallet?.map(( withdrawl, index ) => {
                                                return ( <ListItem
                                                    key={index}
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-evenly"
                                                    }}>
                                                    <Box>
                                                        <Typography sx={{ fontWeight: 700, fontSize: 15 }}>
                                                            {`Request Granted`}
                                                        </Typography>
                                                        <Typography
                                                            sx={{ color: '#00000080', fontWeight: 700, fontSize: 15 }}>
                                                            {// @ts-ignore
                                                                `Requested on: ${withdrawl?.date?.getUTCDate() + '-' + ( withdrawl?.date?.getUTCMonth() + 1 ) + '-' + withdrawl?.date?.getUTCFullYear()}`}
                                                        </Typography>
                                                    </Box>
                                                    <Typography color={'#6E3CBC'}
                                                                sx={{
                                                                    fontWeight: 700,
                                                                    fontSize: 21
                                                                }}>
                                                        {withdrawl.amount}
                                                    </Typography>
                                                </ListItem> );
                                            })
                                        }


                                    </List>}
                                {selectedTab === 1 &&
                                    <List sx={{ overflowY: "auto", height: 300, width: 300 }}>
                                        {
                                            waitingWallet?.map(( withdrawl, index ) => {
                                                return ( <ListItem
                                                    key={index}
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-evenly"
                                                    }}>
                                                    <Box>
                                                        <Typography sx={{ fontWeight: 700, fontSize: 15 }}>
                                                            {`Request Granted`}
                                                        </Typography>
                                                        <Typography
                                                            sx={{ color: '#00000080', fontWeight: 700, fontSize: 15 }}>
                                                            {`Requested on: ${withdrawl.date}`}
                                                        </Typography>
                                                    </Box>
                                                    <Typography color={'#6E3CBC'}
                                                                sx={{
                                                                    fontWeight: 700,
                                                                    fontSize: 21
                                                                }}>
                                                        {withdrawl.amount}
                                                    </Typography>
                                                </ListItem> );
                                            })
                                        }
                                    </List>}
                                <Button sx={{
                                    display: "flex",
                                    width: 290,
                                    height: 45,
                                    color: "white",
                                    bgcolor: "#6E3CBC",
                                    borderRadius: 3,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontWeight: 700,
                                    ":hover": {
                                        color: "#6E3CBC",
                                        bgcolor: "white",
                                    },
                                }}>Request Withdrawal</Button>
                            </Paper>
                        </Box>
                        <Box>
                            <Box width={600} height={355} mt={3} display={"flex"} justifyContent={"space-between"}>
                                <Box width={'50%'} height={'100%'} display={"flex"} flexDirection={"column"}
                                     justifyContent={"space-around"}>
                                    <Box width={'100%'} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                                        <Box sx={{
                                            display: "flex",
                                            width: 280,
                                            height: 90,
                                            color: "white",
                                            bgcolor: "#6E3CBC",
                                            borderRadius: 3,
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}>
                                            <MonetizationOnOutlined sx={{ width: 46, height: 46 }}/> <Typography
                                            fontSize={22}
                                            p={1}>{`Rs. ${(paidWallet![ 0 ]!.mentor!.totalWithdrawn + paidWallet![ 0 ]!.mentor!.amountAvailable)}`}</Typography>
                                        </Box>
                                        <Typography color={'#6E3CBC'} fontSize={16} fontWeight={700}>
                                            your life time earnings
                                        </Typography>
                                    </Box>
                                    
                                    <Box width={'100%'} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                                        <Box sx={{
                                            display: "flex",
                                            width: 280,
                                            height: 90,
                                            color: "white",
                                            bgcolor: "#6E3CBC",
                                            borderRadius: 3,
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}>
                                            <PointOfSale sx={{ width: 46, height: 46 }}/> <Typography
                                            fontSize={22}
                                            p={1}>{`Rs. ${paidWallet?.[ 0 ].mentor.totalWithdrawn}`}</Typography>
                                        </Box>
                                        <Typography fontSize={16} fontWeight={700} color={'#6E3CBC'}>
                                            amount withdrawn till now
                                        </Typography>
                                    </Box>
                                </Box>
                                
                                <Paper sx={{
                                    width: 278,
                                    height: '90%',
                                    borderRadius: 4,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <Typography color={'#6E3CBC'} fontSize={16} fontWeight={700}>
                                        Penalties Recieved
                                    </Typography>
                                    <List sx={{ overflowY: "auto", height: '75%', mt: 1, width: '100%' }}>
                                        
                                        {penalty?.map(( penalty, index ) => {
                                            // @ts-ignore
                                            return ( <ListItem
                                                key={index}
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-evenly"
                                                }}>
                                                <Box>
                                                    <Typography sx={{ fontWeight: 700, fontSize: 15 }}>
                                                        {`Session with ${penalty.reason}`}
                                                    </Typography>
                                                    <Typography
                                                        sx={{ color: '#00000080', fontWeight: 700, fontSize: 15 }}>
                                                        {// @ts-ignore
                                                            `${penalty?.date?.getUTCDate() + '-' + ( penalty?.date?.getUTCMonth() + 1 ) + '-' + penalty?.date?.getUTCFullYear()}`}</Typography>
                                                </Box>
                                                <Typography color={'#FF0303'}
                                                            sx={{ fontWeight: 700, fontSize: 21 }}>-500</Typography>
                                            </ListItem> );
                                        })}
                                    
                                    </List>
                                </Paper>
                            </Box>
                            <Paper sx={{
                                width: 620,
                                height: 245,
                                borderRadius: 4,
                                p: 2
                            }}>
                                <Typography fontSize={16} fontWeight={700} color={'#6E3CBC'}>Terms and Conditions of
                                    wallet withdrawl</Typography>
                                <Typography fontSize={16} color={'#6E3CBC'}>1. As a mentor you are only
                                    allowed to withdraw your earnings,7 days after the date of your last
                                    withdrawal. </Typography>
                                <Typography fontSize={16} color={'#6E3CBC'}>2. It will take 24-36 hours to process your
                                    withdrawal request. </Typography>
                                <Typography fontSize={16} color={'#6E3CBC'}>3. Once your request has been granted, your
                                    earnings counter will go to zero again.</Typography>
                                <Typography fontSize={16} color={'#6E3CBC'}>4. Receiving penalties on the basis of rude
                                    behaviour, showing up late, not showing up and/or giving false information, will
                                    cause a deduction from your wallet, after an internal inquiry.</Typography>
                            
                            </Paper>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Wallet;