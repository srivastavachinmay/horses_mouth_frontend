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
import { Placeholder } from "react-bootstrap";

const LoginUser = () => {
  const url =
    "https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";
  const [authenticate, setAuthenticate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [student, setstudent] = useState(false);
  const [mentor, setmentor] = useState(false);
  const [nextpage, setnextpage] = useState(false);
  const [error, seterror] = useState(false);
  const [data, setData] = useState<UserCredential>();
  const navigate = useNavigate();
  const usertoken = localStorage.getItem("idtoken");


  const [university, setuniversity] = useState("");
  const [course, setcourse] = useState("");
  const [degree, setdegree] = useState("");
  const [study, setstudy] = useState("");
  const [relation, setrelation] = useState("");
  const [uniemail, setuniemail] = useState("");
  const [yearofGrad, setyearofGrad] = useState("");
  const [country, setcountry] = useState("");
  const [previousInstitute, setpreviousInstitute] = useState("");
  const [specialisation, setspecialisation] = useState("");
  const [campus, setcampus] = useState(false);
  const [scholarship, setscholarship] = useState(false);
  const [place, setplace] = useState("");
  const [prisecond, setprisecond] = useState("");
  const [bio, setbio] = useState("");
  const [gpa, setgpa] = useState("");
  const [gmat, setgmat] = useState("");
  const [sat, setsat] = useState("");



  const handlecampus = () => {
      ( campus ) ?
          setcampus(false)
          :
          setcampus(true)
  }
  const handleScholarship = () => {
      ( scholarship ) ?
          setscholarship(false)
          :
          setscholarship(true)
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
                "interests": [],
                "campusPreference": "urban",
                "profilePic": "",
                "about": bio,
                "mentorMeta": {
                  "status": "alumni",
                  "degree": degree,
                  "major": study,
                  "countryOfOrigin": country,
                  "languages": [
                    "string"
                  ],
                  "campusInfo": {
                    "verificationDocUrl": "",
                    "uniEmail": {
                      "email": uniemail,
                      "verified": true
                    },
                    "uniName": university,
                    "scores": {
                      "gpa": gpa,
                      "gmat": gmat,
                      "sat": sat
                    },
                    "specialisation": specialisation,
                    "campusExperience": "",
                    "scholarship": `${scholarship}`,
                    "placeOfStay": place,
                    "previousInstitute": previousInstitute,
                    "courseName": course,
                    "yearOfGrad": 0,
                    "campusJob": "yes"
                  },
                  "preferredCurrency": "string",
                  "countryOfStudy": country
                }
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
            setnextpage(true);
        }
        else if(event?.target?.id==="student")
        {
            setnextpage(false);
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
    <div style={{ overflowY: "auto" }} className={classes.box}>
    <Typography variant="h4" style={{ color: "#6E3CBC", fontWeight: "700", margin: "10px 0px" }}
    >Mentor sign up</Typography>
    <Typography variant="h6" style={{ marginBottom: "16px" }}>please enter
        your details below to sign up as a mentor</Typography>
    <div className={classes.innerbox}>
        <label htmlFor="curredu" className={classes.title}> UNIVERSITY</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setuniversity(event.target.value)
        }} value={university} placeholder="eg. WATERLOO UNIVERSITY" required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> COURSE NAME</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setcourse(event.target.value)
        }} value={course} placeholder="eg. Honour Science" required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> DEGREE NAME</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setdegree(event.target.value) 
        }} value={degree} placeholder="Bachelor's/ Masters / Phd" required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> AREA OF STUDY</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setstudy(event.target.value)
        }} value={study} placeholder="STEM, Commercial Studies, Social Sciences, Humanities" required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> UNIVERSITY RELATION</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setrelation(event.target.value)
        }} value={relation} placeholder="current student or alumni"required={true}/>
        <br/>
        <label htmlFor="curredu"className={classes.title}> UNIVERSITY EMAIL ID (if current student)</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setuniemail(event.target.value)
        }} value={uniemail} required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> YEAR OF GRADUATION</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setyearofGrad(event.target.value)
        }} value={yearofGrad} placeholder="select year (2017-2022-2027)"required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> COUNTRY OF STUDY</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setcountry(event.target.value) 
        }} value={country} placeholder="eg. India" required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> PREVIOUS EDUCATIONAL INSTITUTE</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setpreviousInstitute(event.target.value)
        }} value={previousInstitute} placeholder="eg. Delhi University / Indus International"required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> SPECIALIZATION</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setspecialisation(event.target.value)
        }} value={specialisation} placeholder="eg. Financial Mathematics"required={true}/>
        <br/>
        <FormControlLabel
            control={<Checkbox checked={campus} onChange={handlecampus} name="checkedA"
                               style={{ color: "#6E3CBC" }}/>}
            label="Ever had an on campus job ?"
        />
        <FormControlLabel
            control={<Checkbox checked={scholarship} onChange={handleScholarship} name="checkedA"
                               style={{ color: "#6E3CBC" }}/>}
            label="Do you hold a scholarship ?"
        />
        <br />
        <label htmlFor="curredu" className={classes.title}> PLACE OF STAY</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setplace(event.target.value)
        }} value={place} placeholder="oncampus/offcampus"required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> PRIMARY AND SECONDARY LANGUAGES</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setprisecond(event.target.value)
        }} value={prisecond} placeholder="eg. English, Hindi"required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> BIO</label>
        <textarea name="curredu" id="" cols={30} rows={10} className={classes.biggertext}
                  onChange={( event ) => {
                      setbio(event.target.value)
                  }} value={bio} placeholder="eg. Hello I'm Ayush, a third year student at the University of Waterloo. I am an avid debater and a good communicator. I live on-campus as a hosteller and believe I can give you a well-rounded review about the aerospace engineering department of the university. I am currently involved in many research projects as well and my dream job is to work as an engineer for Boeing."required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> CURRENT GPA</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            // @ts-ignore
            setgpa(event.target.value)
        }} value={gpa} placeholder="eg. 3.9"required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> GMAT SCORE (FOR MASTER'S DEGREES)</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setgmat(event.target.value)
        }} value={gmat} placeholder="eg. 700"required={true}/>
        <br/>
        <label htmlFor="curredu" className={classes.title}> SAT SCORE (FOR BACHELOR'S DEGREES)</label>
        <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
            setsat(event.target.value)
        }} value={sat} placeholder="eg. 1400"required={true}/>
        <br/>
        <Button variant="contained" className={classes.button} onClick={() => {
            setmentor(true);setstudent(false);(authenticate)?setAuthenticate(false):setAuthenticate(true);
        }}>Submit</Button>
    </div>
    </div>
    :
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
    </div>
}
</>
  );
};

export default LoginUser;