import React from "react";
import { Box, Grid, Typography } from "@mui/material";
const Clinics = ({ image, heading, text, onClick }) => {
  const handleClick = () => {
    let createString = heading.split("/");
    let finalString =
      createString[1] === undefined
        ? createString[0]
        : createString[0] + "-" + createString[1];
    onClick(finalString);
  };
  return (
    <Grid item xs={4} sx={{ cursor: "pointer" }} onClick={handleClick}>
      <Box>
        <img
          src={image}
          alt="Avatar"
          style={{ width: "350px", height: "200px", borderRadius: "5px" }}
        />
      </Box>
      <Box sx={{ marginTop: "5px", display: "flex", flexDirection: "column" }}>
        <Typography variant="h6" sx={{ fontWeight: "600" }}>
          {heading}
        </Typography>
        <spaTypographyn variant="subtitle1" sx={{ fontWeight: "400" }}>
          {text}
        </spaTypographyn>
      </Box>
    </Grid>
  );
};

export default Clinics;
