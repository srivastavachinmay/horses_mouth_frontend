import { Button } from "@mui/material";
import {
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styling from './MentorRegStyles'
import mentorimage from '../images/mentor.jpg'

const LoginUser = () => {
  const url =
    "https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";
  const [authenticate, setAuthenticate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [student, setstudent] = useState(false);
  const [mentor, setmentor] = useState(false);
  const [error, seterror] = useState(false);
  const [data, setData] = useState<UserCredential>();
  const navigate = useNavigate();

  useEffect(() => {
      (async () => {
        const token = await data?.user?.getIdToken(true);
        let idtoken:string = token!;
        localStorage.setItem("idtoken",idtoken)
        let res;
        if(mentor)
        {
            res = await axios
            .post(`${url}/user`,
            {
                "institute": "Nil",
                // @ts-ignore
                "name": `${data?.user?.displayName}`,
                "type": "mentor",
                "interests": []
            },
            {
                headers: { Authorization: `Bearer ${token}` },
            })
            .catch((err: any) => {
                console.log(err);
                setLoading(false);
                seterror(true)
            });
        }
        if(student)
        {
            res = await axios
            .post(`${url}/user`,
            {
                "institute": "Nil",
                // @ts-ignore
                "name": `${data?.user?.displayName}`,
                "type": "user",
                "interests": []
            },
            {
                headers: { Authorization: `Bearer ${token}` },
            })
            .catch((err: any) => {
                console.log(err);
                setLoading(false);
                seterror(true)
            });
        }
        console.log(res);
        if(res?.status===200)
        {
            const token = await data?.user?.getIdToken(true);
            let idtoken:string = token!;
            localStorage.setItem("idtoken",idtoken)
            navigate("/")
        }
        setLoading(false);
      })();
  }, [authenticate]);

  const googleAuthentication = async (event:any) => {
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
      if(event.target.id==="mentor")
        {
            setmentor(true);
            setstudent(false)
        }
        else if(event.target.id==="student")
        {
            setmentor(false);
            setstudent(true)
        }
      (authenticate)?setAuthenticate(false):setAuthenticate(true);
      setLoading(true);
    }
  };

  const classes = styling();
  return (
    <>
    <div className={classes.interface}>
      <div className={classes.student}>
      <Button
        variant="contained"
        color="primary"
        //@ts-ignore
        onClick={googleAuthentication}
        id="student"
      >
        Sign Up as a student
      </Button>
      </div>
      <div className={classes.mentors}>
      <Button
        variant="contained"
        color="primary"
        //@ts-ignore
        onClick={googleAuthentication}
        id="mentor"
      >
        Sign Up as a mentor
      </Button>
      </div>
    </div>
      {loading && <> Please wait</>}
      {(error)?alert("account already exists"):null}
    </>
  );
};

export default LoginUser;