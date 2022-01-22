import { Button } from '@mui/material'
import { GoogleAuthProvider, signInWithPopup, UserCredential } from 'firebase/auth';
import { auth } from '../utils/firebase'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const LoginUser = () => {
    const url = "https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";
    const [authenticate, setauthenticate] = useState(false)
    const [data, setdata] = useState<UserCredential>()
    const [already, setalready] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if(authenticate) {
            axios.post(`${url}/user`,
                {
                    "institute": "Nil",
                    "name": `${data?.user?.displayName}`,
                    "type": "mentor",
                    "interests": []
                },
                {
                    headers: { Authorization: `Bearer ${data?.user?.getIdToken}` },
                })
                .then(( res ) => {
                    console.log(res)
                    navigate('/')
                })
                .catch(( err ) => {
                    if(err.response.data.message === "User with this email already exists") {
                        navigate('/')
                    }
                })
        }

    }, [authenticate])
    const gauthentication = () => {
        let googleprovider = new GoogleAuthProvider();
        signInWithPopup(auth, googleprovider)
            .then(( res ) => {
                console.log(typeof (res.user))
                setdata(res);
                // console.log(data.accessToken)
                setauthenticate(true)
            })
            .catch(( err ) => {
                console.log(err)
            })
    }
    return (
        <>
            <Button variant="contained" color="primary" onClick={gauthentication}>Sign In with Google</Button>
        </>
    )
}

export default LoginUser
