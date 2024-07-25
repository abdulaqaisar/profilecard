import React from "react";
import Home from "../Components/Home";
import Card from "../Components/Card";
import Social from "../Components/Social";
import Back from "../Components/Back";

const ProfileCard = () => {
  return (
    <>
      <div
        style={{
          minHeight: "130vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* <Home /> */}

       <Back/>
      </div>
    </>
  );
};

export default ProfileCard;
