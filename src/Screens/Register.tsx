import { Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
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
import studentimg from '../images/student.png'
import businessmanimg from '../images/businessman.png'

const Register = () => {
  const url =
    "https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";
  const [authenticate, setAuthenticate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [student, setstudent] = useState(false);
  const [mentor, setmentor] = useState(false);
  const [error, seterror] = useState(false);
  const [mentorpage1, setmentorpage1] = useState(false);
  const [mainpage, setmainpage] = useState(true);
  const [mentorpage2, setmentorpage2] = useState(false);
  const [data, setData] = useState<UserCredential>();
  const navigate = useNavigate();
  const classes = styling();

  useEffect(() => {
    (async () => {
      const token = await data?.user?.getIdToken(true);
      let idtoken: string = token!;
      localStorage.setItem("idtoken", idtoken)
      let res;
      if (mentor) {
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
      if (student) {
        res = await axios
          .post(`${url}/user`,
            {
              "institute": "Nil",
              // @ts-ignore
              "name": `${data?.displayName}`,
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
      if (res?.status === 200) {
        const token = await data?.user?.getIdToken(true);
        let idtoken: string = token!;
        localStorage.setItem("idtoken", idtoken)
        navigate("/")
      }
      setLoading(false);
    })();
  }, [authenticate]);

  //forms states
  const [uni, setuni] = useState("");
  const [course, setcourse] = useState("");
  const [degree, setdegree] = useState("");
  const [study, setstudy] = useState("");
  const [relation, setrelation] = useState("");
  const [uniemail, setuniemail] = useState("");
  const [grad, setgrad] = useState("");
  const [country, setcountry] = useState("");
  const [previous, setprevious] = useState("");
  const [specialization, setspecialization] = useState("");
  const [campusjob, setcampusjob] = useState(false);
  const [scholarship, setscholarship] = useState(false);
  const [place, setplace] = useState("");
  const [languages, setlanguages] = useState([]);
  const [bio, setbio] = useState("");
  const [gpa, setgpa] = useState("");
  const [gmat, setgmat] = useState("");
  const [sat, setsat] = useState("");

  const handlecampus = () => {
    (campusjob) ?
      setcampusjob(false)
      :
      setcampusjob(true)
  }
  const handlescholarship = () => {
    (scholarship) ?
      setscholarship(false)
      :
      setscholarship(true)
  }

  const googleAuthentication = async (event: any) => {
    let googleProvider = new GoogleAuthProvider();

    const res = await signInWithPopup(auth, googleProvider).catch
      (
        (err: any) => {
          console.log(err);
        }
      );
    if (!res) {
      console.log("No response received")
    } else {
      setData(res);
      if (event.target.id === "mentor") {
        setmainpage(false);
        setmentorpage1(true);
        setstudent(false);
      }
      else if (event.target.id === "student") {
        setmentor(false);
        setstudent(true)
      }
      (authenticate) ? setAuthenticate(false) : setAuthenticate(true);
      setLoading(true);
    }
  };

  return (
        (mainpage) ?
          <div style={{ backgroundColor: "#6E3CBC" }}>
            <div className={classes.regtitle}>
              <b>Sign up as</b>
            </div>
            <div className={classes.options}>
              <div className={classes.option} 
                onClick={googleAuthentication} id="student">
                <img src={studentimg} alt="" className={classes.image} />
                <h1 style={{ color: "#000000", fontSize: "22px" }}>Student</h1>
              </div>
              <div className={classes.option}
                onClick={googleAuthentication} id="mentor">
                <img src={businessmanimg} alt="" className={classes.image} />
                <h1 style={{ color: "#000000", fontSize: "22px" }}>Mentor</h1>
              </div>
            </div>
          </div>
          : 
    (mentorpage1)?
      <div style={{ overflowY: "auto" }} className={classes.box}>
        <Typography variant="h4" style={{ color: "#6E3CBC", fontWeight: "700", margin: "10px 0px" }}
        >Mentor sign up</Typography>
        <Typography variant="h6" style={{ marginBottom: "16px" }}>please enter
          your details below to sign up as a mentor</Typography>
        <div className={classes.innerbox}>
          <label htmlFor="curredu" className={classes.title}> UNIVERSITY</label>
          <input type="text" name="curredu" className={classes.sminput} onChange={(event) => {
            setuni(event.target.value)
          }} value={uni} required={true} />
          <br />
          <label htmlFor="curredu" className={classes.title}> COURSE NAME</label>
          <input type="text" name="curredu" className={classes.sminput} onChange={(event) => {
            setcourse(event.target.value)
          }} value={course} required={true} />
          <br />
          <label htmlFor="curredu" className={classes.title}> DEGREE NAME</label>
          <input type="text" name="curredu" className={classes.sminput} onChange={(event) => {
            setdegree(event.target.value)
          }} value={degree} required={true} />
          <br />
          <label htmlFor="curredu" className={classes.title}> AREA OF STUDY</label>
          <input type="text" name="curredu" className={classes.sminput} onChange={(event) => {
            setstudy(event.target.value)
          }} value={study} required={true} />
          <br />
          <label htmlFor="curredu" className={classes.title}> UNIVERSITY RELATION</label>
          <input type="text" name="curredu" className={classes.sminput} onChange={(event) => {
            setrelation(event.target.value)
          }} value={relation} required={true} />
          <br />
          <label htmlFor="curredu" className={classes.title}> UNIVERSITY EMAIL ID (if current student)</label>
          <input type="text" name="curredu" className={classes.sminput} onChange={(event) => {
            setuniemail(event.target.value)
          }} value={uniemail} required={true} />
          <br />
          <label htmlFor="curredu" className={classes.title}> YEAR OF GRADUATION</label>
          <input type="text" name="curredu" className={classes.sminput} onChange={(event) => {
            setgrad(event.target.value)
          }} value={grad} required={true} />
          <br />
          <label htmlFor="curredu" className={classes.title}> COUNTRY OF STUDY</label>
          <input type="text" name="curredu" className={classes.sminput} onChange={(event) => {
            setcountry(event.target.value)
          }} value={country} required={true} />
          <br />
          <label htmlFor="curredu" className={classes.title}> PREVIOUS EDUCATIONAL INSTITUTE</label>
          <input type="text" name="curredu" className={classes.sminput} onChange={(event) => {
            setprevious(event.target.value)
          }} value={previous} required={true} />
          <br />
          <label htmlFor="curredu" className={classes.title}> SPECIALIZATION</label>
          <input type="text" name="curredu" className={classes.sminput} onChange={(event) => {
            setspecialization(event.target.value)
          }} value={specialization} required={true} />
          <br />
          <FormControlLabel
            control={<Checkbox checked={campusjob} onChange={handlecampus} name="checkedA"
              style={{ color: "#6E3CBC" }} />}
            label="Ever had an on campus job ?"
          />
          <FormControlLabel
            control={<Checkbox checked={scholarship} onChange={handlescholarship} name="checkedA"
              style={{ color: "#6E3CBC" }} />}
            label="Do you hold a scholarship ?"
          />
          <label htmlFor="curredu" className={classes.title}> PLACE OF STAY</label>
          <input type="text" name="curredu" className={classes.sminput} onChange={(event) => {
            setplace(event.target.value)
          }} value={place} required={true} />
          <br />
          <label htmlFor="curredu" className={classes.title}> PRIMARY AND SECONDARY LANGUAGES</label>
          <input type="text" name="curredu" className={classes.sminput} onChange={(event) => {
            setlanguages((event: any) => { const language = (event.target.value).split(","); return language })
          }} value={languages} required={true} />
          <br />
          <label htmlFor="curredu" className={classes.title}> BIO</label>
          <textarea name="curredu" id="" cols={30} rows={10} className={classes.biggertext}
            onChange={(event) => {
              setbio(event.target.value)
            }} value={bio} required={true} />
          <br />
          <label htmlFor="curredu" className={classes.title}> CURRENT GPA</label>
          <input type="text" name="curredu" className={classes.sminput} onChange={(event) => {
            // @ts-ignore
            setgpa(event.target.value)
          }} value={gpa} />
          <br />
          <label htmlFor="curredu" className={classes.title}> GMAT SCORE (FOR MASTER’S DEGREES)</label>
          <input type="text" name="curredu" className={classes.sminput} onChange={(event) => {
            setgmat(event.target.value)
          }} value={gmat} required={true} />
          <br />
          <label htmlFor="curredu" className={classes.title}> SAT SCORE (FOR BACHELOR’S DEGREES)</label>
          <input type="text" name="curredu" className={classes.sminput} onChange={(event) => {
            setsat(event.target.value)
          }} value={sat} required={true} />
          <br />
          <Button variant="contained" className={classes.button} onClick={() => {
            setmentorpage1(false); setmentorpage2(true);
          }}>Submit</Button>
        </div>
      </div>
      :
      // @ts-ignore
      null
  )
};

export default Register;