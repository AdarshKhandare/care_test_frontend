import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
const DoctorsCard = ({ profession, data }) => {
  return (
    <Card
      variant="outlined"
      sx={{ maxWidth: "70%", marginBottom: "10px", padding: " 1rem " }}
    >
      <Grid container spacing={2} sx={{ marginBottom: "10px" }}>
        <Grid
          item
          xs={3}
          fullWidth={true}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box sx={{ width: "150px", height: "150px" }}>
            <img
              src={data.image}
              alt={data.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={6} fullWidth={true}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" color="primary" sx={{ fontWeight: "600" }}>
              {data.name}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: "300" }}>
              {profession}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: "300" }}>
              {data.experience} years experience overall
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "550", textWrap: "nowrap" }}
              >
                {data.cityState}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "550",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                .
              </Typography>
              <Typography variant="subtitle1" sx={{ textWrap: "nowrap" }}>
                {data.clinic}
              </Typography>
            </Stack>

            <Typography variant="subtitle1" sx={{ fontWeight: "300" }}>
              {" "}
              {data.fees} Consultation fee at clinic
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                textAlign: "center",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <Button
                variant="contained"
                size="small"
                sx={{
                  pointerEvents: "none",
                  color: "#fff",
                  backgroundColor: "#00a500",
                }}
                startIcon={<ThumbUpOffAltIcon />}
              >
                {data.patientsReviewPercentage} %
              </Button>

              <span
                style={{
                  borderBottom: "2px solid #000",
                  paddingBottom: "-5px",
                  fontSize: "14px",
                }}
              >
                {data.patientsTreated} Patients Stories
              </span>
            </Stack>
          </Box>
        </Grid>
        <Grid
          item
          xs={3}
          fullWidth={true}
          sx={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              alignItems: "center",
              gap: 1,
              width: "100%",
            }}
          >
            <Box
              sx={{
                color: "#00a500",
                display: "flex",
                gap: 1,
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <CalendarMonthIcon />
              <Typography variant="body2"> Available Today</Typography>
            </Box>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                gap: 0,
                alignItems: "center",
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: "600" }}
                color="#fff"
              >
                Book Appointment
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: "400" }}
                color="#fff"
              >
                No Booking Fee{" "}
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default DoctorsCard;
