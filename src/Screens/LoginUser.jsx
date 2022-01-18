import { Button } from '@mui/material'
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { auth } from '../utils/firebase'
import React,{ useState,useEffect } from 'react'
import axios from 'axios';

const LoginUser = () => {
    const url="https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";
    const [authenticate, setauthenticate] = useState(false)
    const [data, setdata] = useState({})
    useEffect(() => {
        axios.post(`${url}/user`,
        { headers: { Authorization: `Bearer ${data.accessToken}` }})
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })

    }, [authenticate])
    const gauthentication = () =>{
        let googleprovider= new GoogleAuthProvider();
        signInWithPopup(auth,googleprovider)
        .then((res)=>{
            setdata(res.user);
            console.log(data.accessToken)
            setauthenticate(true)
        })
        .catch((err)=>{
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
