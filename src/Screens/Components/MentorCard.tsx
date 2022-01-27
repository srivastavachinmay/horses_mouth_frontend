import { VerifiedRounded } from "@mui/icons-material";
import { Avatar, Chip }    from "@mui/material";
import Grid                from "@mui/material/Grid";
import Paper               from "@mui/material/Paper";
import Typography          from "@mui/material/Typography";
import React               from 'react';

const MentorCard = ( props:any ) => {
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
        <Grid item xs={12}  lg={4}  padding={1}  display={"flex"} alignItems={"center"} justifyContent={"center"}
              flexDirection={"row"}
            // onClick={() => {navigate(`mentorProfile/:${mentor.id}`);}}
        >
            <Avatar sx={{ width: 75, height: 75, zIndex: 2 }} src={props.profilePic}/>
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
                    {`${props.name}`}
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
                    
                }} label={`${props.uniName}`}/>
                <Chip sx={chipCSS} label={`${props.degree}`}/>
                <Chip sx={chipCSS} label={`${props.major}`}/>
                
                <Chip sx={chipCSS} label={`${props.status}`}/>
            </Paper>
        
        
        </Grid>
    );
};

export default MentorCard;