import { Badge, Chip, Stack, Typography } from "@mui/material";
import React from "react";

const DoctorsCard = ({ profession, data }) => {
  return (
    <div className="card rounded p-2 mb-2" style={{ width: "70%" }}>
      <div className="row">
        <div className="col-3 text-center d-flex justify-content-center align-items-center ">
          <div style={{ width: "150px", height: "150px" }}>
            <img
              src={data.image}
              alt={data.name}
              className="img-fluid rounded-circle"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex flex-column gap-1">
            <span className="h5 text-primary mb-0">{data.name}</span>
            <span className=" text-muted">{profession}</span>
            <span className=" text-muted mb-0">
              {data.experience} years experience overall
            </span>
            <div className="mt-0">
              <span className="h6 fw-600">{data.cityState}</span>{" "}
              <span className="h3 text-center align-items-center ms-1">.</span>
              <span className=" text-muted ms-1">{data.clinic}</span>
            </div>
            <span className=" text-muted">
              {" "}
              {data.fees} Consultation fee at clinic
            </span>
            <div className="d-flex gap-5 mt-3 mb-2">
              <button
                type="button"
                class="btn btn-sm btn-success"
                style={{ cursor: "not-allowed" }}
              >
                <i className="fa fa-thumbs-up"></i>{" "}
                {data.patientsReviewPercentage} %
              </button>

              <span
                style={{
                  borderBottom: "2px solid #000",
                  paddingBottom: "-5px",
                  fontSize: "14px",
                }}
              >
                {data.patientsTreated} Patients Stories
              </span>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex flex-column justify-content-end">
          <div className="text-center">
            <span className="text-success ">
              <i class="fa fa-calendar-check-o" aria-hidden="true"></i>{" "}
              Available Today
            </span>
            <button className=" w-100 btn btn-sm btn-primary d-flex flex-column text-center align-items-center mt-2 mb-2">
              <span>Book Appointment</span>
              <span>No Booking Fee </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
