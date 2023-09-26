import React, { useEffect, useState } from "react";
import Header from "../components/landing/Header";
import LoadingContainer from "../components/containers/LoadingContainer";
import DoctorsCard from "../components/landing/DoctorsCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import env from "../config/env";

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
      .get("http://localhost:3000/api/v1/doctors/read")
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
    <div>
      {/* header section @S  */}
      <Header />
      {/*header section @E */}
      <section className=" pa-y4">
        <LoadingContainer loading={loading}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <span className="text-muted h5">
                  All Available {finalString}
                </span>
              </div>
              <div className="col-lg-12 mt-2">
                {doctors?.map((doctor) => (
                  <DoctorsCard
                    key={doctor.name}
                    data={doctor}
                    profession={finalString}
                  />
                ))}
              </div>
            </div>
          </div>
        </LoadingContainer>
      </section>
    </div>
  );
};

export default DoctorsList;
