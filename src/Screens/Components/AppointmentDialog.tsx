import {
    Avatar,
    Card,
    CardHeader,
    Dialog,
    DialogContent,
    DialogTitle,
    List,
    ListItem,
    Typography
}            from "@mui/material";
import React from "react";

export default function AppointmentDialog( props: any ) {
    
    return (
        <Dialog
            open={props.open}
            // TransitionComponent={Transition}
            scroll={"paper"}
            // onBackdropClick={handleClose}
            onClose={props.handleClose}
            sx={{
                scrollbarColor: '#6E3CBC',
            }}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle sx={{ display: "flex", justifyContent: "center" }}>
                <Typography color={'#6E3CBC'} fontWeight={"bold"}>
                    {props.title}
                </Typography>
            </DialogTitle>
            <DialogContent sx={{
                scrollbarColor: '#6E3CBC',
            }}>
                <List style={{
                    height: 500, width: 330,
                    scrollbarColor: '#6E3CBC',
                    
                }}>
                    <ListItem>
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
                    </ListItem>
                    <ListItem>
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
                    </ListItem>
                    <ListItem>
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
                    </ListItem>
                    <ListItem>
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
                    </ListItem>
                </List>
            
            </DialogContent>
            {/*<DialogActions>*/}
            {/*    <Button onClick={props.handleClose} sx={{*/}
            {/*        bgcolor: '#6E3CBC',*/}
            {/*        color: "white",*/}
            {/*        ":hover": { color: '#6E3CBC', bgcolor: "white" }*/}
            {/*    }}>Close</Button>*/}
            {/*</DialogActions>*/}
        </Dialog>
    );
}
