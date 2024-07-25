import React from "react";
import "./Card.css";
import { GiStairsCake } from "react-icons/gi";
import Social from "./Social";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Card = () => {
 
  return (
    <>
      <div className="parent">
        <div className="content">
          <h1>Frais k Algeri</h1>
          <div className="des1" style={{ display: "flex" }}>
            <p>Artist- SNOON</p>
            <span style={{}}>
              <BusinessCenterIcon />
            </span>
          </div>
          <div className="des2" style={{ display: "flex" }}>
            <p>Jeddah,SA</p>
            <span style={{ marginLeft:"10px" }}>
              <LocationOnOutlinedIcon />
            </span>
            <p style={{ marginLeft:"10px" }}>01/24</p>
            <span style={{ marginLeft:"10px" }}>
              <GiStairsCake />
            </span>
          </div>
          <p style={{fontSize:"14px", fontWeight:"500" }}>Owner of studio NOON here is some about my work</p>
        </div>
        <br />
        <Social/>
      </div>
    </>
  );
};

export default Card;
