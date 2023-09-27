import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/landing/Header";

import Clinics from "../components/landing/Clinics";
import { clinics } from "../utilities/DummyData";
import { Container, Grid, ImageList, Typography } from "@mui/material";
const Landing = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  return (
    <>
      {/* header section @S  */}
      <Header />
      {/*header section @E */}

      {/*Clinic Types start */}
      <Container sx={{ padding: " 2rem 0" }}>
        <Grid container spacing={2} sx={{ marginBottom: "10px" }}>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ fontWeight: "650" }}>
              Book an appointment for an in-clinic consultation
            </Typography>
            <Typography variant="subtitle1">
              Find experienced doctors across all specilties
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          {clinics.map((clinic) => (
            <Clinics
              key={clinic.heading}
              image={clinic.image}
              heading={clinic.heading}
              text={clinic.text}
              onClick={(clinicName) => navigate(`/clinics/${clinicName}`)}
            />
          ))}
        </Grid>
      </Container>
      {/*Clinic Types end */}
    </>
  );
};

export default Landing;
