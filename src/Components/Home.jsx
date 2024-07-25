import React, { useState, useEffect } from "react";
import { fireDb, imageDb } from "../Firebase/firebase";
import { getDownloadURL, ref as ref, uploadBytes } from "firebase/storage";
import { set, ref as dbref, onValue } from "firebase/database";
import "./Home.css";
// import bgimage from "../assets/images/bb.jpg";
import { SiGooglemessages } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import profileimage from "../assets/images/ok.png";
import logoimage from "../assets/images/logoimg.jpg";
import Card from "./Card";
import { toast } from "react-toastify";

const Home = () => {
  const [image, setImage] = useState("");
  const [data, setData] = useState("");

  const Upload = async () => {
    try {
      // Img Store with ref to storage
      const imgRef = ref(imageDb, `${image.name}`);
      // Uploading imgRef in bytes.
      await uploadBytes(imgRef, image);
      // Getting Url for Uploaded image in storage
      const uploadedImageUrl = await getDownloadURL(imgRef);
      toast.success("Image Uploaded and Url Stored", uploadedImageUrl);
      console.log("Image Uploaded and Url Stored", uploadedImageUrl);
      //Creating Table in DB where Image will store
      const useImageRef = dbref(fireDb, `users/${1}/bgImage`);
      // Getting Url of Img to use now.
      await set(useImageRef, uploadedImageUrl);
    } catch (error) {
      toast.error("Error uploading image and storing URL:", error);
    }
  };

  useEffect(() => {
    // Getting data from Db
    let getData = async () => {
      const starCountRef = dbref(fireDb, `users/${1}`);
      // On getting value take value snapshot and store
      onValue(starCountRef, async (snapshot) => {
        let fetchData = await snapshot.val();
        console.log(fetchData);
        //State Updated Value in Data stored.
        setData(fetchData);
      });
    };
    // Run the run once.
    getData();
  }, []);

  return (
    <>
      {/* <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <button onClick={Upload}>Bg Image</button>
      </div> */}
      <div className="home">
        <div className="bg">
          <img src={data?.bgImage && data?.bgImage} alt="" />
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
