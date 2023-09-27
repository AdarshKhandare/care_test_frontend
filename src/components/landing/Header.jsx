import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header
      style={{
        padding: "1rem 1.5rem",
        paddingBottom: "1rem",
        borderBottom: "1px solid rgba(5, 148, 251, 0.1)",
        backgroundColor: " #282828",
        color: "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={4}
          sx={{ alignItems: "center", textAlign: "center", marginTop: "10px" }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{ minWidth: 70, cursor: "pointer" }}
              variant="h6"
              color="#fff"
            >
              Contact
            </Typography>
            <Typography
              sx={{ minWidth: 70, cursor: "pointer" }}
              variant="h6"
              color="#fff"
            >
              FAQs
            </Typography>
            <Typography
              sx={{ minWidth: 70, cursor: "pointer" }}
              variant="h6"
              color="#fff"
            >
              Terms
            </Typography>
            <Typography
              sx={{ minWidth: 70, cursor: "pointer" }}
              variant="h6"
              color="#fff"
            >
              Privacy
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Link to="/">
              <img
                src="https://www.carejar.in/assets/images/logo.png"
                alt="Logo"
                style={{ width: "80px" }}
              />
            </Link>
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button variant="contained" size="large">
            Get Started
          </Button>
        </Grid>
      </Grid>

      <IconButton
        color="inherit"
        edge="start"
        onClick={() => setMenu(true)}
        size="small"
        sx={{
          mr: 1,
          display: { xs: "flex", sm: "none" },
          bgcolor: "#fff",
          border: "1px solid #e0e0e0",
        }}
      >
        <ChevronRightRoundedIcon />
      </IconButton>

      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setMenu(false);
          }
        }}
        style={{
          height: "100vh",
          overflow: "auto",
          position: "fixed",
          width: "100vw",
          top: 0,
          left: menu ? 0 : "-100vw",
          transitionDuration: "0.6s",
          zIndex: 9999,
        }}
        className="d-flex d-lg-none"
      >
        <div
          style={{
            height: "100vh",
            overflow: "auto",
            width: "17rem",
          }}
          className="shadow-lg bg-white d-flex d-lg-none p-4 fs-5 fw-semibold"
        >
          <ul className="d-flex flex-column gap-3">
            <li onClick={() => setMenu(false)}>
              <Link to="/#">Contact</Link>
            </li>
            <li onClick={() => setMenu(false)}>
              <Link to="/#">FAQs</Link>
            </li>
            <li onClick={() => setMenu(false)}>
              <Link to="/#">Terms</Link>
            </li>
            <li onClick={() => setMenu(false)}>
              <Link to="/#">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
