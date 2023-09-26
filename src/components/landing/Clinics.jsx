import React from "react";

const Clinics = ({ image, heading, text, onClick }) => {
  const handleClick = () => {
    // Call the onClick function when the component is clicked
    let createString = heading.split("/");
    let finalString =
      createString[1] === undefined
        ? createString[0]
        : createString[0] + "-" + createString[1];
    onClick(finalString);
  };
  return (
    <div
      className="col-md-4 col-lg-4 "
      style={{ cursor: "pointer" }}
      onClick={handleClick}
    >
      <h4>
        <img src={image} alt="Avatar" className="img-fluid rounded" />
      </h4>
      <div className="mt-2 d-flex flex-column ">
        <span className="h5">{heading}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Clinics;
