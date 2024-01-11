import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import OneFeedback from "./Feedbacks";
import "../style/Feedback.css";

const ViewFeedbacks = () => {
  const [allfeeds, setfeeds] = useState([{}]);
  const options = {
    url: "http://localhost:3001/api/getfeedbacks",
    method: "POST",
  };

  useEffect(()=>{
    axios(options)
    .then((response) => {
      const a = response.data;
      setfeeds(a);
    })
    .catch((err) => {
      console.log(err);
    });
  },[])

  function Show(obj) {
    return <OneFeedback user_email={obj.user_email} feedback={obj.feedback} />;
  }

  return (
    <>
    {/* ------------------------------------- */}
            <h1 id='title'>Customer Feedbacks</h1>
      <div id="Feedbackbox">{allfeeds.map(Show)}</div>
    </>
  );
};

export default ViewFeedbacks;
