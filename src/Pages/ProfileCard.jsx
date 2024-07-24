import React from "react";
import Home from "../Components/Home";
import Card from "../Components/Card";
import Social from "../Components/Social";

const ProfileCard = () => {
  return (
    <>
      <div
        style={{
          minHeight: "120vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Home />
        <Card />
      </div>
    </>
  );
};

export default ProfileCard;
