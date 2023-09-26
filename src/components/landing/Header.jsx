import { IconButton } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header className="header-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-4 col-12">
            <div className="header-menu-wrap">
              <ul className="d-none d-lg-flex">
                <li>
                  <Link to="/#">Contact Us</Link>
                </li>
                <li>
                  <Link to="/#">FAQs</Link>
                </li>
                <li>
                  <Link to="/#">Terms</Link>
                </li>
                <li>
                  <Link to="/#">Privacy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-5">
            <div className="header-logo">
              <Link to="/">
                <img
                  src="https://www.carejar.in/assets/images/logo.png"
                  alt="Logo"
                  className="img-fluid "
                  style={{ width: "80px" }}
                />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-7">
            <div className="header-bttn">
              <form className="d-flex">
                <Link to="/#">Log In</Link>
                <Link to="/#">
                  Get Started <i className="fa fa-angle-right"></i>
                </Link>
              </form>
            </div>
          </div>
        </div>
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
      </div>
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
            <li>
              <a href="/#pricing-sec">Pricing</a>
            </li>
            <li onClick={() => setMenu(false)}>
              <Link to="/faq">FAQs</Link>
            </li>
            <li onClick={() => setMenu(false)}>
              <Link to="/terms">Terms</Link>
            </li>
            <li onClick={() => setMenu(false)}>
              <Link to="/terms">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
