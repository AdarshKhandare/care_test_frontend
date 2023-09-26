import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/landing/Header";

import Clinics from "../components/landing/Clinics";
import { clinics } from "../utilities/DummyData";

const Landing = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  return (
    <div>
      {/* header section @S  */}
      <Header />
      {/*header section @E */}

      {/*Clinic Types start */}
      <section className=" pa-y4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h6>Book an appointment for an in-clinic consultation</h6>
              <p className="mt-2">
                Find experienced doctors across all specilties
              </p>
            </div>
          </div>

          <div className="row justify-content-between mt-4">
            {clinics.map((clinic) => (
              <Clinics
                key={clinic.heading}
                image={clinic.image}
                heading={clinic.heading}
                text={clinic.text}
                onClick={(clinicName) => navigate(`/clinics/${clinicName}`)}
              />
            ))}
          </div>
        </div>
      </section>
      {/*Clinic Types end */}
    </div>
  );
};

export default Landing;
