import React, { useEffect, useState } from "react";
import Header from "../components/landing/Header";
import LoadingContainer from "../components/containers/LoadingContainer";
import DoctorsCard from "../components/landing/DoctorsCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import env from "../config/env";
import { Container, Grid, Typography } from "@mui/material";
const DoctorsList = () => {
  const { id } = useParams();
  let createString = id.split("-");
  let finalString =
    createString[1] === undefined
      ? createString[0]
      : createString[0] + "/" + createString[1];
  const [doctors, setDoctors] = useState();
  const [loading, setLoading] = useState(false);
  const getPricing = async () => {
    setLoading(true);
    await axios
      .get(env.BASE_API_URL + "/api/v1/doctors/read")
      .then((res) => {
        setDoctors(res.data.fakeDoctors);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    getPricing();
  }, [id]);
  return (
    <>
      {/* header section @S  */}
      <Header />
      {/*header section @E */}
      <Container sx={{ padding: " 2rem 0" }}>
        <LoadingContainer loading={loading}>
          <Grid container spacing={2} sx={{ marginBottom: "10px" }}>
            <Grid item xs={12}>
              <Typography variant="h5" sx={{ fontWeight: "600" }}>
                All Available {finalString}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {doctors?.map((doctor) => (
                <DoctorsCard
                  key={doctor.name}
                  data={doctor}
                  profession={finalString}
                />
              ))}
            </Grid>
          </Grid>
        </LoadingContainer>
      </Container>
    </>
  );
};

export default DoctorsList;
