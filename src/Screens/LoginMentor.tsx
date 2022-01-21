import { Button }                                              from '@mui/material';
import axios                                                   from 'axios';
import { GoogleAuthProvider, signInWithPopup, UserCredential } from 'firebase/auth';
import React, { useEffect, useState }                          from 'react';
import { useNavigate }                                         from 'react-router-dom';
import { auth }                                                from '../utils/firebase';

const LoginUser = () => {
    const url = "https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";
    const [authenticate, setauthenticate] = useState(false)
    const [data, setdata] = useState<UserCredential>()
    const [already, setalready] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        if(authenticate)
        { 

            axios.get(`${url}/user`,
            {
                headers: { Authorization: `Bearer ${data?.user?.getIdToken}` },
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
                "name": `${data?.user?.displayName}`,
                "type": "mentor",
                "interests": []
            },
            {
                headers: { Authorization: `Bearer ${data?.user?.getIdToken}` },
            })
            .then((res)=>{
                console.log(res)
                navigate('/mentor/login/form')
            })
            .catch((err)=>{
                console.log(err)
            })
            }
        }

    }, [authenticate, already, data?.user?.getIdToken, data?.user?.displayName, navigate])
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
