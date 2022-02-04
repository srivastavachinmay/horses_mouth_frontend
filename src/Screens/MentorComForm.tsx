import React, { useState, useEffect } from "react";
import styling from "../styles/MentorRegStyles";
import { currenciesarr } from "../data/data";
import Spinner from '../images/Spinnerform.gif'
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Input,
  Alert,
  Slide,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MentorComForm = (props: any) => {
  const [authenticate, setauthenticate] = useState(false);
  const [sendimages, setsendimages] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [error, seterror] = useState(false);
  const [type1, settype1] = useState("png");
  const [type2, settype2] = useState("png");
  const [documenturl, setdocumenturl] = useState("");
  const [profileurl, setprofileurl] = useState("");
  const [documentsuccess, setdocumentsuccess] = useState(false);
  const [imagesuccess, setimagesuccess] = useState(false);
  const navigate = useNavigate()

  const url =
    "https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";


  //form states
  const [agree, setagree] = useState(false);
  const [currency, setcurrency] = useState("");
  const [uploadimg, setuploadimg] = useState(null);
  const [universityid, setuniversityid] = useState(null);
  const [linkedin, setlinkedin] = useState("");
  const [upiid, setupiid] = useState("");

  //form errors
  const [erroralert, seterroralert] = useState(false);
  const [linkedinerr, setlinkedinerr] = useState(false);
  const [currencyerr, setcurrencyerr] = useState(false);
  const [universityiderr, setuniversityiderr] = useState(false);
  const [profilepicerr, setprofilepicerr] = useState(false);
  const [upiiderr, setupiiderr] = useState(false);

  //normal states
  const [already, setalready] = useState(false);


  useEffect(() => {
    (async () => {
      let res;
      setdocumentsuccess(false);
      setimagesuccess(false)
      let token = await props?.details?.data?.user?.getIdToken();
      console.log(props?.details?.data)
      if (sendimages) {
        res = await axios
          .get(`${url}/upload-url/?mimeType=image/${type1}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            })
          .catch((err: any) => {
            console.log(err);
            setLoading(false);
            seterror(true)
          });

        if (res?.status === 200) {
          let documents = `${res?.data?.url}/${res?.data?.fields?.key}`;
          let body = new FormData();
          let results = res?.data;
          console.log(results)
          for (const field in results.fields) {
            body.append(field, results.fields[field])
          }
          console.log("inside it..." + universityid)
          console.log("URL" + res?.data?.url)
          if (universityid) {
            body.append('file', universityid)
          }
          let uploadurl=res?.data?.url
          let s3fields=res?.data?.fields
          res = await axios
            .post(`${uploadurl}`, body)
            .catch((err: any) => {
              console.log(err);
              setLoading(false);
              seterror(true)
            });
          if (res?.status === 204) {
            console.log("Inside it" + documents)
            setdocumenturl(documents)
            setdocumentsuccess(true)
          }
            let image = `${res?.data?.url}/${res?.data?.fields?.key}`
            body = new FormData();
            results = res?.data;
            console.log(results)
            for (const field in s3fields) {
              body.append(field, s3fields[field])
            }
            console.log("inside it..." + uploadimg)
            console.log("URL" + res?.data?.url)
            if (uploadimg) {
              body.append('file', uploadimg)
            }
            res = await axios
              .post(`${uploadurl}`, body)
              .catch((err: any) => {
                console.log(err);
                setLoading(false);
                seterror(true)
              });
            if (res?.status === 204) {
              console.log("Inside it" + image)
              setprofileurl(image)
              setimagesuccess(true);
            }
            let campusjob = "no";
            let scholarship = "no";
            let graduation = Number(props?.details?.grad.getFullYear())
            let joining = Number(props?.details?.joining.getFullYear())
            if (props?.details?.campusjob) {
              campusjob = "yes"
            }
            if (props?.details?.scholarship) {
              scholarship = "yes"
            }
              res = await axios
                .post(`${url}/user`,
                  {
                    "institute": "string",
                    "campusPreference": "urban",
                    "profilePic": profileurl,
                    "name": props?.details?.username,
                    "about": props?.details?.bio,
                    "facebook": "string",
                    "linkedIn": linkedin,
                    "type": "mentor",
                    "interests": [
                      "string"
                    ],
                    "mentorMeta": {
                      "yearOfJoining": 0,
                      "status": props?.details?.typeofstud,
                      "degree": props?.details?.degree,
                      "major": props?.details?.study,
                      "countryOfOrigin": "India",
                      "languages": props?.details?.languages,
                      "campusInfo": {
                        "verificationDocUrl": documenturl,
                        "uniEmail": {
                          "email": props?.details?.uniemail,
                          "verified": true
                        },
                        "uniName": props?.details?.uni,
                        "scores": {
                          "gpa": props?.details?.gpa,
                          "gmat": props?.details?.gmat,
                          "sat": props?.details?.sat
                        },
                        "specialisation": props?.details?.specialization,
                        "campusExperience": "string",
                        "scholarship": scholarship,
                        "placeOfStay": props?.details?.place,
                        "previousInstitute": props?.details?.previous,
                        "courseName": props?.details?.course,
                        "yearOfGrad": graduation,
                        "campusJob": campusjob
                      },
                      "preferredCurrency": currency,
                      "countryOfStudy": props?.details?.country
                    }
                  },
                  {
                    headers: { Authorization: `Bearer ${token}` },
                  })
                .catch((err: any) => {
                  console.log(err);
                  if (err?.response?.status === 400) {
                    setalready(true)
                    setsubmitting(false)
                  }
                  setLoading(false);
                  seterror(true)
                });
        }
        console.log(res);
        // if (res?.status === 200) {
        //   navigate("/")
        // }
        setLoading(false);
      }
    })();
  }, [authenticate]);

  const classes = styling();

  //component states
  const [submitting, setsubmitting] = useState(true);

  const handlefileupload = (event: any) => {
    setuniversityid(event.target.files[0]);
    console.log(event.target.files[0])
  };
  const handleimageupload = (event: any) => {
    console.log(event.target.files[0]);
    setuploadimg(event.target.files[0])
  };

  const handleClose = () => {
    setalready(false);
    navigate("/")
  };

  const handleagree = () => {
    (agree) ?
      setagree(false)
      :
      setagree(true)
  }

  const handlesubmitting = () => {
    seterroralert(false)
    setuniversityiderr(false)
    setprofilepicerr(false);
    setlinkedinerr(false);
    setcurrencyerr(false)
    setupiiderr(true)


    if (universityid === null) {
      seterroralert(true)
      setuniversityiderr(true);
    }
    else if (uploadimg === null) {
      seterroralert(true)
      setprofilepicerr(true);
    }
    else if (linkedin === "") {
      seterroralert(true)
      setlinkedinerr(true);
    }
    else if (currency === "") {
      seterroralert(true)
      setcurrencyerr(true)
    }
    else if (currency === "indian rupee (inr)" && upiid === "") {
      seterroralert(true)
      setupiiderr(true)

    }
    else if (agree === false) {
      seterroralert(true)
    }
    else {
      seterroralert(false)
      setsubmitting(false);
      (authenticate) ? setauthenticate(false) : setauthenticate(true)
      setsendimages(true)
    }
  }

  console.log(props)

  return submitting ? (
    <div style={{ overflowY: "auto" }} className={classes.box}>
      <Typography
        variant="h4"
        style={{ color: "#6E3CBC", fontWeight: "700", margin: "10px 0px" }}
      >
        Mentor sign up
      </Typography>
      <Typography variant="h6" style={{ marginBottom: "16px" }}>
        Please link your socials and upload the required documents
      </Typography>
      <div className={classes.innerbox} style={{ paddingTop: "55px", height: "fit-content" }}>
        <div className={classes.uploading}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "70%" }}
          >
            <h1 style={{ fontSize: "25px" }}>UNIVERSITY ID</h1>
            <p style={{ color: "#6E3CBC" }}>
              This will only be used for internal verification purposes.
            </p>
          </div>
          <label htmlFor="contained-button-file" style={{ width: "30%" }}>
            <Input
              id="contained-button-file"
              type="file"
              onChange={handlefileupload}
              error={universityiderr}
            />
            <Button
              variant="contained"
              component="span"
              style={{ position: "relative", bottom: "35px", width: "110px" }}
            >
              Upload
            </Button>
          </label>
        </div>
        <br />
        <div className={classes.uploading}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "70%" }}
          >
            <h1 style={{ fontSize: "25px" }}>PHOTO</h1>
            <p style={{ color: "#6E3CBC" }}>
              A photo of yourself in preferably formal clothing, to be used as
              the profile picture.
            </p>
          </div>
          <label htmlFor="university-upload" style={{ width: "30%" }}>
            <Input
              inputProps={{ accept: 'image/*' }}
              id="university-upload"
              type="file"
              onChange={handleimageupload}
              error={profilepicerr}
            />
            <Button
              variant="contained"
              component="span"
              style={{ position: "relative", bottom: "35px", width: "110px" }}
            >
              Upload
            </Button>
          </label>
        </div>
        <hr />
        <br />
        <TextField
          id="outlined-basic"
          label="LINKEDIN PROFILE LINK"
          variant="outlined"
          required={true}
          value={linkedin}
          onChange={(event) => { setlinkedin(event?.target?.value) }}
          error={linkedinerr}
        />
        <br />
        <hr />
        <br />
        <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }} style={{ margin: "0px" }} error={currencyerr}>
          <InputLabel id="demo-simple-select-filled-label">CURRENCY PREFERENCE</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-filled"
            onChange={(event) => {
              setcurrency(event.target.value)
            }} value={currency}
            required={true}
          >
            {
              currenciesarr().map((v: any) => (
                <MenuItem value={v}>{v}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
        <br />
        <br />
        {
          (currency === "indian rupee (inr)") ?
            <TextField
              id="outlined-basic"
              label="UPI ID (if payment preference is INR)"
              variant="outlined"
              value={upiid}
              onChange={(event) => { setupiid(event?.target?.value) }}
              error={upiiderr}
            /> : <div />
        }
        <br />
        <br />
        <br />
        <hr />
        <br />
        <p style={{ textAlign: "center", color: "#6E3CBC" }}>
          Unless your currency preference is INR, currency conversion charges
          according to PayPal will be applied to your remuneration. <br />
          (4% per transaction - i.e 14.4 $ / hr) ( Refer to-
          https://www.paypal.com/in/webapps/mpp/paypal-fees ){" "}
        </p>
        <br />
        <br />
        <FormControlLabel
          control={<Checkbox checked={agree} onChange={handleagree} name="checkedA"
            style={{ color: "#6E3CBC" }} />}
          label="I agree to the Horse's Mouth terms and conditions."
        />
        <Button
          variant="contained"
          style={{ padding: "15px 0px", marginTop: "40px" }}
          onClick={handlesubmitting}
        >
          Submit for verification
        </Button>
        <br />
        <br />
        {(erroralert) ?
          <Alert severity="error">Please fill all the required fields and accept terms and conditions</Alert> :
          null}
      </div>
    </div>
  ) : (
    <>
      <div style={{ backgroundImage: `url(${Spinner})`, backgroundPosition: "center", position: "fixed", zIndex: 1, backgroundRepeat: "no-repeat", width: "100%", height: "100vh" }}></div>
      {(already) ?
        <Dialog
          open={already}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Already have an account with us?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              The account already exists please login to your account
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Take me there</Button>
          </DialogActions>
        </Dialog>
        :
        null}
    </>
  );
};

export default MentorComForm;
