import { Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useState }                                       from "react";
import { countries }                                      from "../data/data";
import MentorComForm                                      from "./MentorComForm";
import styling                                            from './MentorRegStyles';

const MentorReg = ( props: any ) => {
    
    const [mentorpage1, setmentorpage1] = useState(true);
    
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
    
    const classes = styling();
    
    console.log(props?.username);
    console.log(props?.data);
    
    const handlecampus = () => {
        ( campusjob ) ?
        setcampusjob(false)
                      :
        setcampusjob(true);
    };
    const handlescholarship = () => {
        ( scholarship ) ?
        setscholarship(false)
                        :
        setscholarship(true);
    };
    
    return (
        ( mentorpage1 ) ?
        <div style={{ overflowY: "auto" }} className={classes.box}>
            <Typography variant="h4" style={{ color: "#6E3CBC", fontWeight: "700", margin: "10px 0px" }}
            >Mentor sign up</Typography>
            <Typography variant="h6" style={{ marginBottom: "16px" }}>please enter
                your details below to sign up as a mentor</Typography>
            <div className={classes.innerbox}>
                <label htmlFor="curredu" className={classes.title}> UNIVERSITY</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
                    setuni(event.target.value);
                }} value={uni} required={true}/>
                <br/>
                <label htmlFor="curredu" className={classes.title}> COURSE NAME</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
                    setcourse(event.target.value);
                }} value={course} required={true}/>
                <br/>
                <label htmlFor="curredu" className={classes.title}> DEGREE NAME</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
                    setdegree(event.target.value);
                }} value={degree} required={true}/>
                <br/>
                <label htmlFor="curredu" className={classes.title}> AREA OF STUDY</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
                    setstudy(event.target.value);
                }} value={study} required={true}/>
                <br/>
                <label htmlFor="curredu" className={classes.title}> UNIVERSITY RELATION</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
                    setrelation(event.target.value);
                }} value={relation} required={true}/>
                <br/>
                <label htmlFor="curredu" className={classes.title}> UNIVERSITY EMAIL ID (if current student)</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
                    setuniemail(event.target.value);
                }} value={uniemail} required={true}/>
                <br/>
                <label htmlFor="curredu" className={classes.title}> YEAR OF GRADUATION</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
                    setgrad(event.target.value);
                }} value={grad} required={true}/>
                <br/>
                <label htmlFor="curredu" className={classes.title}> COUNTRY OF STUDY</label>
                <select name="curredu" className={classes.sminput} onChange={( event ) => {
                    setcountry(event.target.value);
                }} value={country} id="country">
                    {
                        countries().filter(( ele: any ) => ele.includes("")).map(( v: any ) => (
                            <option value={v}></option>
                        ))
                    }
                </select>
                <br/>
                <label htmlFor="curredu" className={classes.title}> PREVIOUS EDUCATIONAL INSTITUTE</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
                    setprevious(event.target.value);
                }} value={previous} required={true}/>
                <br/>
                <label htmlFor="curredu" className={classes.title}> SPECIALIZATION</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
                    setspecialization(event.target.value);
                }} value={specialization} required={true}/>
                <br/>
                <FormControlLabel
                    control={<Checkbox checked={campusjob} onChange={handlecampus} name="checkedA"
                                       style={{ color: "#6E3CBC" }}/>}
                    label="Ever had an on campus job ?"
                />
                <FormControlLabel
                    control={<Checkbox checked={scholarship} onChange={handlescholarship} name="checkedA"
                                       style={{ color: "#6E3CBC" }}/>}
                    label="Do you hold a scholarship ?"
                />
                <label htmlFor="curredu" className={classes.title}> PLACE OF STAY</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
                    setplace(event.target.value);
                }} value={place} required={true}/>
                <br/>
                <label htmlFor="curredu" className={classes.title}> PRIMARY AND SECONDARY LANGUAGES</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
                    setlanguages(( event: any ) => {
                        const language = ( event.target.value ).split(",");
                        return language;
                    });
                }} value={languages} required={true}/>
                <br/>
                <label htmlFor="curredu" className={classes.title}> BIO</label>
                <textarea name="curredu" id="" cols={30} rows={10} className={classes.biggertext}
                          onChange={( event ) => {
                              setbio(event.target.value);
                          }} value={bio} required={true}/>
                <br/>
                <label htmlFor="curredu" className={classes.title}> CURRENT GPA</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
                    // @ts-ignore
                    setgpa(event.target.value);
                }} value={gpa}/>
                <br/>
                <label htmlFor="curredu" className={classes.title}> GMAT SCORE (FOR MASTER’S DEGREES)</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
                    setgmat(event.target.value);
                }} value={gmat} required={true}/>
                <br/>
                <label htmlFor="curredu" className={classes.title}> SAT SCORE (FOR BACHELOR’S DEGREES)</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={( event ) => {
                    setsat(event.target.value);
                }} value={sat} required={true}/>
                <br/>
                <Button variant="contained" className={classes.button} onClick={() => {
                    setmentorpage1(false);
                }}>Submit</Button>
            </div>
        </div> :
        <MentorComForm details={{
            uni,
            course,
            degree,
            study,
            relation,
            uniemail,
            grad,
            country,
            previous,
            specialization,
            campusjob,
            scholarship,
            place,
            languages,
            bio,
            gpa,
            gmat,
            sat
        }}/>
    );
};

export default MentorReg;
