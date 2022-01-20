import { Button } from '@mui/material'
import { GoogleAuthProvider, signInWithPopup, signInWithCredential } from 'firebase/auth';
import { auth } from '../utils/firebase'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserCredential } from "firebase/auth";

const LoginUser = () => {
    const url="https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";
    const [authenticate, setauthenticate] = useState(false)
    const [data, setdata] = useState<UserCredential>()
    const [already, setalready] = useState(true)
    const [updatedid, setupdatedid] = useState("")
    const navigate = useNavigate()
    let id;
    // @ts-ignore
    localStorage.setItem("idtoken",id)
    useEffect(() => {
            axios.get(`${url}/user`,
            {
                // @ts-ignore
                headers: { Authorization: `Bearer ${updatedid}` },
            })
            .then((res)=>{
                console.log(res);
                navigate('/')
            })
            .catch((err)=>{
                setalready(false)
            }) 
            if(!already)
            {    
            axios.post(`${url}/user`,
            {
                "institute": "Nil",
                // @ts-ignore
                "name": `${data?.user?.displayName}`,
                "type": "user",
                "interests": []
            },
            {
                // @ts-ignore
                headers: { Authorization: `Bearer ${updatedid}` },
            })
            .then((res)=>{
                console.log(res)
                navigate('/')
            })
            .catch((err)=>{
                console.log(err)
            })
            }

    }, [authenticate,already])


    const gauthentication = () =>{
        let googleprovider= new GoogleAuthProvider();
        signInWithPopup(auth,googleprovider)
        .then((res)=>{
            onGoogleSignIn(res.user);
            // @ts-ignore
            setdata(res.user);

            console.log(typeof (res.user))
            // @ts-ignore
            console.log(res.user.accessToken);
            (authenticate)?setauthenticate(false):setauthenticate(true);
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    function onGoogleSignIn(googleUser: any) {
        let googleIdToken = googleUser.getAuthResponse().id_token;
        signInWithCredential(auth,GoogleAuthProvider.credential(googleIdToken));
        setupdatedid(googleIdToken);
        console.log(googleIdToken)
      }


    return (
        <>
            <Button variant="contained" color="primary" onClick={gauthentication}>Sign In with Google</Button>
        </>
    )
}

export default LoginUser
