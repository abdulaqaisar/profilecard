import React from "react";
import "./Card.css";
// import bgimage from '../assets/images/greenbg.jpg'
import { RiHandbagFill } from "react-icons/ri";
import { GiStairsCake } from "react-icons/gi";
import { IoBag } from "react-icons/io5";
import Social from "./Social";

const Card = () => {
 
  return (
    <>
      <div className="parent">
        <div className="content">
          <h1>Frais k Algeri</h1>
          <div className="des1" style={{ display: "flex" }}>
            <p>Artist- SNOON</p>
            <span style={{}}>
              <RiHandbagFill />
            </span>
          </div>
          <div className="des2" style={{ display: "flex" }}>
            <p>Jeddah,SA</p>
            <span style={{ marginLeft:"10px" }}>
              <IoBag />
            </span>
            <p style={{ marginLeft:"10px" }}>01/24</p>
            <span style={{ marginLeft:"10px" }}>
              <GiStairsCake />
            </span>
          </div>
          <p style={{fontSize:"14px", fontWeight:"550" }}>Owner of studio NOON here is some about my work</p>
        </div>
        <br />
        <Social/>
      </div>
    </>
  );
};

export default Card;
