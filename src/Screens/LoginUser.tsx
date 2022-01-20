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

const LoginUser = () => {
  const url =
    "https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";
  const [authenticate, setAuthenticate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<UserCredential>();
  const navigate = useNavigate();

  useEffect(() => {
      (async () => {
        const token = await data?.user?.getIdToken(true);
        let idtoken:string = token!;
        localStorage.setItem("idtoken",idtoken)

        const res = await axios
          .get(`${url}/user`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .catch((err: any) => {
            console.log(err);
            setLoading(false);
          });

        console.log(res);

        if (res?.data?.users?.length !== 0) {
          navigate("/");
        } else {
          alert("Bhak bc");
        }
        setLoading(false);
      })();
  }, [authenticate]);

  const googleAuthentication = async () => {
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
      (authenticate)?setAuthenticate(false):setAuthenticate(true);
      setLoading(true);
    }
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={googleAuthentication}
      >
        Sign In with Google
      </Button>
      {loading && <> Please wait</>}
    </>
  );
};

export default LoginUser;