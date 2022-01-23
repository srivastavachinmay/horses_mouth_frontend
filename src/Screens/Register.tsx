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
import styling from './MentorRegStyles'
import mentorimage from '../images/teacher.png'
import studentimage from '../images/student.png'

const LoginUser = () => {
  const url =
    "https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";
  const [authenticate, setAuthenticate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [student, setstudent] = useState(false);
  const [mentor, setmentor] = useState(false);
  const [nextpage, setnextpage] = useState(true);
  const [error, seterror] = useState(false);
  const [data, setData] = useState<UserCredential>();
  const navigate = useNavigate();
  const usertoken = localStorage.getItem("idtoken");


  const [curredu, setcurredu] = useState("");
  const [prevedu, setprevedu] = useState("");
  const [campus, setcampus] = useState("");
  const [pref1, setpref1] = useState("");
  const [pref2, setpref2] = useState("");
  const [pref3, setpref3] = useState("");
  const [lang, setlang] = useState("");
  const [bio, setbio] = useState("");
  const [linkedin, setlinkedin] = useState("")
  const [checked, setchecked] = useState(false)


  const handleChange = () => {
      ( checked ) ?
          setchecked(false)
          :
          setchecked(true)
  }

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
      // console.log(event.target)
      if(event?.target?.id==="mentor")
        {
            setnextpage(false);
        }
        else if(event?.target?.id==="student")
        {
            setnextpage(true);
            setstudent(true);
            (authenticate)?setAuthenticate(false):setAuthenticate(true);
        }
      setLoading(true);
    }
  };
  const classes = styling();
  return (
    <>
    {
    (nextpage)?
    <div style={{backgroundColor:"#6E3CBC",height:"100vh"}}>
    <div className={classes.maintitle}><b>Sign Up as</b></div>
    <div className={classes.interface}>
      <div className={classes.student}         
        //@ts-ignore
        onClick={googleAuthentication} id="student">
        <div style={{width:"157px",height:"157px",borderRadius:"127px",display:"flex",justifyContent:"center",alignItems:"center",margin:"30px 0px",backgroundColor:"#6e3cbc",border:"7px solid black"}}>
          <img src={studentimage} alt="" style={{width:"90px",height:"90px"}}/>
        </div>
      <h1 style={{fontSize:"30px",fontWeight:"600"}}>Student</h1>
      </div>
      <div className={classes.mentors}
      //@ts-ignore
      onClick={googleAuthentication} id="mentor">
        <div style={{width:"157px",height:"157px",borderRadius:"127px",display:"flex",justifyContent:"center",alignItems:"center",margin:"30px 0px",backgroundColor:"#6e3cbc",border:"7px solid black"}}>
          <img src={mentorimage} alt="" style={{width:"90px",height:"90px"}}/>
        </div>
      <h1 style={{fontSize:"30px",fontWeight:"600"}}>Mentor</h1>
      </div>
    </div>
      {loading && <> Please wait</>}
      {(error)?alert("account already exists"):null}
    </div>
    
    :

    <div style={{ overflowY: "auto" }} className={classes.box}>
    <Typography variant="h4" style={{ color: "#6E3CBC", fontWeight: "700", margin: "10px 0px" }}
    >Mentor sign up</Typography>
    <Typography variant="h6" style={{ marginBottom: "16px" }}>please enter
        your details below to sign up as a mentor</Typography>
    <div className={classes.innerbox}>
        <label htmlFor="curredu" className={classes.title}> UNIVERSITY</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setcurredu(event.target.value)
        }} value={curredu} required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> COURSE NAME</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setprevedu(event.target.value)
        }} value={prevedu} required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> DEGREE NAME</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setcampus(event.target.value)
        }} value={campus} required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> AREA OF STUDY</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setpref1(event.target.value)
        }} value={pref1} required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> UNIVERSITY RELATION</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setpref2(event.target.value)
        }} value={pref2} required={true}/>
        <br/>
        <label htmlFor="curredu"className={classes.title}> UNIVERSITY EMAIL ID (if current student)</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setpref3(event.target.value)
        }} value={pref3} required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> YEAR OF GRADUATION</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setlang(event.target.value)
        }} value={lang} required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> COUNTRY OF STUDY</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setlang(event.target.value)
        }} value={lang} required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> PREVIOUS EDUCATIONAL INSTITUTE</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setlang(event.target.value)
        }} value={lang} required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> SPECIALIZATION</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setlang(event.target.value)
        }} value={lang} required={true}/>
        <br/>
        <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleChange} name="checkedA"
                               style={{ color: "#6E3CBC" }}/>}
            label="Ever had an on campus job ?"
        />
        <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleChange} name="checkedA"
                               style={{ color: "#6E3CBC" }}/>}
            label="Do you hold a scholarship ?"
        />
        <label htmlFor="curredu" className={classes.title}> PLACE OF STAY</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setlang(event.target.value)
        }} value={lang} required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> PRIMARY AND SECONDARY LANGUAGES</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setlang(event.target.value)
        }} value={lang} required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> BIO</label>
        <textarea name="curredu" id="" cols={30} rows={10} className={classes.biggertext}
                  onChange={( event ) => {
                      setbio(event.target.value)
                  }} value={bio} required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> CURRENT GPA</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            // @ts-ignore
            setchecked(event.target.value)
        }} value={linkedin} required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> GMAT SCORE (FOR MASTER’S DEGREES)</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setlang(event.target.value)
        }} value={lang} required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> SAT SCORE (FOR BACHELOR’S DEGREES)</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setlang(event.target.value)
        }} value={lang} required={true}/>
        <br/>
        <Button variant="contained" className={classes.button} onClick={() => {
            setmentor(true);setstudent(false);(authenticate)?setAuthenticate(false):setAuthenticate(true);
        }}>Submit</Button>
    </div>
</div>
}
</>
  );
};

export default LoginUser;