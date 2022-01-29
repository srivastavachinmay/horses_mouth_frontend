import { useState,useEffect } from "react";
import styling from "./MentorRegStyles";
import { currenciesarr } from "../data/data";
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
} from "@mui/material";
import axios from "axios";

const MentorComForm = (props:any) => {
  const [authenticate, setauthenticate] = useState(false);
  const [sendimages, setsendimages] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [error, seterror] = useState(false);
  const [type1, settype1] = useState("png");

  const url =
  "https://97v4h1lqe8.execute-api.ap-south-1.amazonaws.com/production";


    //form states
    const [agree, setagree] = useState(false);
    const [currency, setcurrency] = useState("");
    const [universityid, setuniversityid] = useState(null);
    const [uploadimg, setuploadimg] = useState(null);


  useEffect(() => {
    (async () => {
      let res;
      let token=await props?.details?.data?.user?.getIdToken();
      console.log(props?.details?.data)
      if (sendimages) {
        res = await axios
          .get(`${url}/upload-url/?mimeType=${type1}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          })
          .catch((err: any) => {
            console.log(err);
            setLoading(false);
            seterror(true)
          });

        if(res?.status===200)
        {
          const body=new FormData();
          if(universityid)
          {
          body.append('file',universityid)
          body.append("key",res?.data?.fields?.key)
          }
          res = await axios
          .post(`${res?.data?.url}`,body)
          .catch((err: any) => {
            console.log(err);
            setLoading(false);
            seterror(true)
          });
        }
      }
      console.log(res);
      // if (res?.status === 200) {
      //   navigate("/")
      // }
      setLoading(false);
    })();
  }, [authenticate]);
  
  const classes = styling();

  //component states
  const [submitting, setsubmitting] = useState(true);

  const handlefileupload = (event:any) => {
    console.log(event.target.files[0]);
    setuniversityid(event.target.files[0])
  };
  const handleimageupload = (event:any) => {
    console.log(event.target.files[0]);
    setuploadimg(event.target.files[0])
  };

  const handleagree = () => {
    (agree) ?
      setagree(false)
      :
      setagree(true)
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
      <div className={classes.innerbox} style={{paddingTop:"55px",height:"fit-content"}}>
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
              id="university-upload"
              type="file"
              onChange={handleimageupload}
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
        />
        <br />
        <hr />
        <br />
        <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }} style={{margin:"0px"}}>
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
          currenciesarr().map((v:any)=>(
            <MenuItem value={v}>{v}</MenuItem>
          ))
        }
        </Select>
      </FormControl>
      <br />
      <br />
      {
        (currency==="indian rupee (inr)")?
        <TextField
          id="outlined-basic"
          label="UPI ID (if payment preference is INR)"
          variant="outlined"
        />:<div/>
      }
        <br />
        <br />
        <br />
        <hr />
        <br />
        <p style={{ textAlign: "center",color: "#6E3CBC" }}>
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
          style={{ padding: "15px 0px",marginTop:"40px" }}
          onClick={() => {
            setsubmitting(false);
            (authenticate)?setauthenticate(false):setauthenticate(true)
            setsendimages(true)
          }}
        >
          Submit for verification
        </Button>
      </div>
    </div>
  ) : (
    <div> Submiting... </div>
  );
};

export default MentorComForm;
