import { country } from "../data/data";
import { useState } from "react";
import styling from "./MentorRegStyles";
import { countries, degreearr, area, relationarr } from "../data/data";
import {
  Autocomplete,
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
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const MentorComForm = (props) => {
  const classes = styling();

  //form states
  const [agree, setagree] = useState(false);

  //component states
  const [submitting, setsubmitting] = useState(true);
  const [uploaded, setuploaded] = useState(false);

  const handlefileupload = (event) => {
    console.log(event.target);
  };

  const handleagree = () => {
    (agree) ?
      setagree(false)
      :
      setagree(true)
  }

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
              accept="image/*"
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
          <label htmlFor="contained-button-file" style={{ width: "30%" }}>
            <Input
              accept="image/*"
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
        <hr />
        <br />
        <TextField
          id="outlined-basic"
          label="LINKEDIN PROFILE LINK"
          variant="outlined"
        />
        <br />
        <hr />
        <br />
        <TextField
          id="outlined-basic"
          label="PAYMENT PREFERENCE"
          variant="outlined"
        />
        <br />
        <TextField
          id="outlined-basic"
          label="UPI ID (if payment preference is INR)"
          variant="outlined"
        />
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
          }}
        >
          Submit for verification
        </Button>
      </div>
    </div>
  ) : (
    <div> Submit </div>
  );
};

export default MentorComForm;
