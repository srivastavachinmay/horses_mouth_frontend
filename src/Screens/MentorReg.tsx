import { Autocomplete, Button, Checkbox, Chip, FormControl, FormControlLabel, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material";
import {useState } from "react";
import styling from './MentorRegStyles'
import MentorComForm from "./MentorComForm";
import { countries,degreearr,area,relationarr,placeofstay, languagearr } from "../data/data";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Box } from "@mui/system";
import { useTheme } from "@emotion/react";

const MentorReg = (props:any) => {

  const [mentorpage1,setmentorpage1]= useState(true)
  const theme = useTheme();

  //forms states
  const [uni, setuni] = useState("");
  const [course, setcourse] = useState("");
  const [degree, setdegree] = useState("");
  const [study, setstudy] = useState("");
  const [relation, setrelation] = useState("");
  const [uniemail, setuniemail] = useState("");
  let checkdate=new Date().getFullYear();
  let currdate=new Date();
  const [grad, setgrad] = useState(currdate);
  const [country, setcountry] = useState("");
  const [previous, setprevious] = useState("");
  const [prevcourse, setprevcourse] = useState("");
  const [specialization, setspecialization] = useState("");
  const [campusjob, setcampusjob] = useState(false);
  const [scholarship, setscholarship] = useState(false);
  const [place, setplace] = useState("");
  const [languages, setlanguages] = useState([]);
  const [bio, setbio] = useState("eg. Hello I'm Ayush, a third year student at the University of Waterloo. I am an avid debater and a good communicator. I live on-campus as a hosteller and believe I can give you a well-rounded review about the aerospace engineering department of the university. I am currently involved in many research projects as well and my dream job is to work as an engineer for Boeing.");
  const [gpa, setgpa] = useState("");
  const [gmat, setgmat] = useState("");
  const [sat, setsat] = useState("");
  const [lang, setlang] = useState("");

  //component states
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const classes=styling()
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  function getStyles(name:any, languages:any, theme:any) {
    return {
      fontWeight:
        languages.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  console.log(props?.username);
  console.log(props?.data);
  
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

  const handleChange = (event:any) => {
    const {
      target: { value },
    } = event;
    setlanguages(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    (mentorpage1)?
    <div style={{ overflowY: "auto" }} className={classes.box}>
    <Typography variant="h4" style={{ color: "#6E3CBC", fontWeight: "700", margin: "10px 0px" }}
    >Mentor sign up</Typography>
    <Typography variant="h6" style={{ marginBottom: "16px" }}>please enter
      your details below to sign up as a mentor</Typography>
    <div className={classes.innerbox}>
      <TextField id="outlined-basic" label="UNIVERSITY" variant="outlined" onChange={(event) => {
        setuni(event.target.value)
      }} value={uni} required={true}/>
      <br />
      <TextField id="outlined-basic" label="COURSE NAME" variant="outlined" onChange={(event) => {
        setcourse(event.target.value)
      }} value={course} required={true}/>
      <br />
      <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }} style={{margin:"0px"}}>
        <InputLabel id="demo-simple-select-filled-label">DEGREE NAME *</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-filled"
          onChange={(event) => {
            setdegree(event.target.value)
          }} value={degree} required={true}>
        {
          degreearr().map((v:any)=>(
            <MenuItem value={v}>{v}</MenuItem>
          ))
        }
        </Select>
      </FormControl>
      <br />
      <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }} style={{margin:"0px",width:"100%"}}>
        <InputLabel id="demo-simple-select-filled-label">AREA OF STUDY *</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-filled"
          onChange={(event) => {
            setstudy(event.target.value)
          }} value={study} required={true}>
         {
          area().map((v:any)=>(
            <MenuItem value={v}>{v}</MenuItem>
          ))
        }
        </Select>
      </FormControl>
      <br />
      <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }} style={{margin:"0px"}}>
        <InputLabel id="demo-simple-select-filled-label">TYPE OF STUDENT</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-filled"
          onChange={(event) => {
            setrelation(event.target.value)
          }} value={relation}
          required={true}
        >
          {
          relationarr().map((v:any)=>(
            <MenuItem value={v}>{v}</MenuItem>
          ))
        }
        </Select>
      </FormControl>
      <br />
      <TextField id="outlined-basic" label="UNIVERSITY EMAIL ID (if current student)" variant="outlined" onChange={(event) => {
        setuniemail(event.target.value)
      }} value={uniemail} required={true}/>
      <br />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
          views={['year']}
          label="Year of graduation"
          minDate={new Date(`${checkdate-11}`)}
          maxDate={new Date(`${checkdate+11}`)}
          value={grad}
          onChange={(newValue) => {
            if(newValue)
            {
            setgrad(newValue);
            }
          }}
          renderInput={(params) => <TextField {...params} helperText={null} 
          required={true}/>}
        />
        </LocalizationProvider>
      <br />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
          views={['year']}
          label="Year of Joining University"
          minDate={new Date(`${checkdate-10}`)}
          maxDate={new Date(`${checkdate}`)}
          value={grad}
          onChange={(newValue) => {
            if(newValue)
            {
            setgrad(newValue);
            }
          }}
          renderInput={(params) => <TextField {...params} helperText={null} 
          required={true}/>}
        />
        </LocalizationProvider>
      <br />
      <Autocomplete
          open={open}
          onOpen={() => {
            // only open when in focus and inputValue is not empty
            if (inputValue) {
              setOpen(true);
            }
          }}
          onClose={() => setOpen(false)}
          inputValue={inputValue}
          onInputChange={(e, value, reason) => {
            setInputValue(value?.toLowerCase());

            // only open when inputValue is not empty after the user typed something
            if (!value) {
              setOpen(false);
            }
          }}
          options={countries()}
          renderInput={(params) => (
            <TextField {...params} label="COUNTRY OF STUDY *" variant="outlined" />
          )}
        />
      <br />
      <TextField id="outlined-basic" label="PREVIOUS EDUCATIONAL INSTITUTE" variant="outlined" onChange={(event) => {
        setprevious(event.target.value)
      }} value={previous} required={true}/>
      <br />
      <TextField id="outlined-basic" label="SPECIALIZATION" variant="outlined" onChange={(event) => {
        setspecialization(event.target.value)
      }} value={specialization} required={true}/>
      <br />
      <TextField id="outlined-basic" label="PREVIOUS PURSUED COURSE/S" variant="outlined" onChange={(event) => {
        setprevcourse(event.target.value)
      }} value={prevcourse} required={true}/>
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
      <br />
      <br />
      <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }} style={{margin:"0px"}}>
        <InputLabel id="demo-simple-select-filled-label">PLACE OF STAY</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-filled"
          onChange={(event) => {
            setplace(event.target.value)
          }} value={place}
          required={true}
        >
          {
          placeofstay().map((v:any)=>(
            <MenuItem value={v}>{v}</MenuItem>
          ))
        }
        </Select>
      </FormControl>
      <br />
      <FormControl sx={{ m: 1, width: 300 }} style={{margin:"0px",width:"100%"}}>
        <InputLabel id="demo-multiple-chip-label">PRIMARY AND SECONDARY LANGUAGES</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={languages}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {languagearr().map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, languages, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
        <TextField
          id="outlined-multiline-static"
          label="BIO"
          multiline
          rows={7}
          defaultValue="Default Value"
          onChange={(event) => {
            setbio(event.target.value)
          }} value={bio} required={true}
        />
      <br />
      <TextField id="outlined-basic" label="CURRENT GPA" variant="outlined" onChange={(event) => {
        setgpa(event.target.value)
      }} value={gpa}/>
      <br />
      <TextField id="outlined-basic" label="GMAT SCORE (FOR MASTER'S DEGREES)" variant="outlined" onChange={(event) => {
        setgmat(event.target.value)
      }} value={gmat}/>
      <br />
      <TextField id="outlined-basic" label="SAT SCORE (FOR BACHELOR'S DEGREES)" variant="outlined" onChange={(event) => {
        setsat(event.target.value)
      }} value={sat}/>
      <br />
      <Button variant="contained" style={{padding:"15px 0px"}} onClick={() => {
        setmentorpage1(false)
      }}>Proceed</Button>
    </div>
  </div>:
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
    lang,
    bio,
    gpa,
    gmat,
    sat
  }}/>
  )
};

export default MentorReg;
