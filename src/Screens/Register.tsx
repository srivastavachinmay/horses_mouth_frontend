import {
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import { Button, Checkbox, FormControlLabel, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import cred from '../utils/creds.json'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import styling from '../styles/MentorRegStyles'
import studentimg from '../assets/student.png'
import businessmanimg from '../assets/businessman.png'
import MentorReg from "./MentorReg";

const Register = () => {
    const url =
              "https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";
    const [authenticate, setAuthenticate] = useState(false);
    const [loading, setLoading] = useState(false);
    const [student, setstudent] = useState(false);
    const [mentor, setmentor] = useState(false);
    const [error, seterror] = useState(false);
    const [mainpage, setmainpage] = useState(true);
    const [data, setData] = useState<UserCredential>();
    const navigate = useNavigate();
    const classes = styling();
    
    useEffect(() => {
        ( async () => {
            const token = await data?.user?.getIdToken(true);
            let idtoken: string = token!;
            localStorage.setItem("idtoken", idtoken);
            let res;
            if(mentor) {
                res = await axios
                    .post(
                        `${url}/user`,
                        {
                            "institute": "Nil",
                            "name": `${data?.user?.displayName}`,
                            "type": "mentor",
                            "interests": []
                        },
                        {
                            headers: { Authorization: `Bearer ${token}` },
                        }
                    )
                    .catch(( err: any ) => {
                        console.log(err);
                        setLoading(false);
                        seterror(true);
                    });
            }
            if(student) {
                res = await axios
                    .post(
                        `${url}/user`,
                        {
                            "institute": "Nil",
                            "name": `${data?.user?.displayName}`,
                            "type": "user",
                            "interests": []
                        },
                        {
                            headers: { Authorization: `Bearer ${token}` },
                        }
                    )
                    .catch(( err: any ) => {
                        console.log(err);
                        setLoading(false);
                        seterror(true);
                    });
            }
            console.log(res);
            if(res?.status === 200) {
                const token = await data?.user?.getIdToken(true);
                let idtoken: string = token!;
                localStorage.setItem("idtoken", idtoken);
                navigate("/");
            }
            setLoading(false);
        } )();
    }, [authenticate]);
    
    let usertoken;
    const googleAuthentication = async ( event: any ) => {
        console.log(event.target);
        let googleProvider = new GoogleAuthProvider();
        
        const res = await signInWithPopup(auth, googleProvider).catch
        (
            ( err: any ) => {
                console.log(err);
            }
        );
        if(!res) {
            console.log("No response received");
        } else {
            setData(res);
            usertoken = await data?.user?.getIdToken();
            console.log(event.target.id);
            if(event.target.id === "mentor") {
                setmainpage(false);
                setstudent(false);
                setmentor(false);
            } else if(event.target.id === "student") {
                setmentor(false);
                setstudent(true);
            }
            ( authenticate ) ? setAuthenticate(false) : setAuthenticate(true);
            setLoading(true);
        }
    };
    
    return (
        <>
            {( mainpage ) ?
             <div style={{ backgroundColor: "#6E3CBC" }}>
                 <div className={classes.regtitle}>
                     <b>Sign up as</b>
                 </div>
                 <div className={classes.options}>
                     <div className={classes.option}
                          onClick={googleAuthentication} id="student">
                         <img src={studentimg} alt="" className={classes.image} id="student"/>
                         <h1 style={{ color: "#000000", fontSize: "22px" }}>Student/Parents</h1>
                     </div>
                     <div className={classes.option}
                          onClick={googleAuthentication} id="mentor">
                         <img src={businessmanimg} alt="" className={classes.image} id="mentor"/>
                         <h1 style={{ color: "#000000", fontSize: "22px" }}>Mentor</h1>
                     </div>
                 </div>
             </div>
                          : <MentorReg username={data?.user?.displayName} data={data}/>
                
            }
        </>
    );
};

export default Register;