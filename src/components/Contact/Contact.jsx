import React from "react";
import Nav from "../Nav/Nav";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Grow from "@mui/material/Grow";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./Contact.css";

const icon = (
  <Paper sx={{ m: 4 }} elevation={5} className="contactPaperContainer">
    <div className="paperContent">
    <h2>Email</h2>
    <a href="mailto:chrismaki123@gmail.com" className="envelopeA">
      <span className="envelope">✉️</span>
    </a>
    </div>
   </Paper>
);

const icon2 = (
  <Paper sx={{ m: 4 }} elevation={5} className="contactPaperContainer">
   <div className="paperContent">
    <h2>Phone Number</h2>
    <h2 className="tellyOuter">
      <a href="tel:3202799904" ><img src={"images/phone.png"} className="telly"/></a></h2>
    </div>
  </Paper>
);

const icon3 = (
  <Paper sx={{ m: 4 }} elevation={5} className="contactPaperContainer">
    <div className="paperContent">
    <h2>LinkedIn</h2>
    <a href="https://www.linkedin.com/in/christian-maki/" target="/blank">
      <img className="diversity" src={"images/diversity.png"}/>
      </a>
    </div>
   </Paper>
);

function Contact() {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <>
      <Box sx={{ height: 180 }} className="contactContainer">
        <FormControlLabel
          className="toggleLabel"
          control={<Switch checked={checked} onChange={handleChange} />}
          label={ <span className="labelShow">Show contact info</span>}
        />
        <Box sx={{ display: "flex" }} className="contactBoxes">
          <Grow 
            in={checked}
            style={{ transformOrigin: "0 0 0" }}
          >
              {icon}
          </Grow>
          {/* Conditionally applies the timeout prop to change the entry speed. */}
          <Grow
            in={checked}
            style={{ transformOrigin: "0 0 0" }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            {icon2}
          </Grow>
          <Grow
            in={checked}
            style={{ transformOrigin: "0 0 0" }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            {icon3}
          </Grow>
        </Box>
      </Box>
    </>
  );
}

export default Contact;
