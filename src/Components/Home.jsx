import React from "react";
import "./Home.css";
import image from "../assets/images/bb.jpg";
import { SiGooglemessages } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import profileimage from "../assets/images/ok.png";
import logoimage from "../assets/images/logoimg.jpg";
import Card from "./Card";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="bg">
          <img src={image} alt="" />
          <div className="child">
            <img src={profileimage} alt="" />
            <div className="imgicon">
              <img src={logoimage} alt="" />
            </div>
          </div>
        </div>
        <div className="icons">
          <SiGooglemessages />
          <IoIosArrowForward />
        </div>
        <Card />
      </div>
    </>
  );
};

export default Home;
