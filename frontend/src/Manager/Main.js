import React from "react";
// import { Link } from "react-router-dom";
import vid from "../images/video 1.mp4";
import "../style/Main_vid.css";
const Main = () => {
    return (
    <>
      <div class="textC">
        <h1>Welcome to</h1>
        <h1>MATBAKH</h1>
      </div>

      <div className="main">
        <video src={vid} autoPlay loop muted />
      </div>
    </>
  );
};

export default Main;