import React from "react";
import '../style/AddDish.css'
import { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const AddDish = () => {
  const [dish, setDish] = useState({});

  const handle = (e) => {
    const { name, value } = e.target;
    setDish({ ...dish, [name]: value });
  };
  

  const SubmitHandler = () => {
    const options = {
      url: "http://localhost:3001/api/addDish",
      method: "POST",
      data: dish,
    };
    axios(options)
      .then((response) => {
        console.log(response.data);
        alert("Dish Added Successfully")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {/* --------------------------------------------------- */}
      <div className="s-box">
        <h2>Add new Dish</h2>
        <div className="sindiv">
          <h5>Dish Name</h5>
          <input
            type="text"
            className="inp"
            value={dish.name || ""}
            name="name"
            onChange={handle}
          />

          <h5>Price (pkr)</h5>
          <input
            type="number"
            className="inp"
            value={dish.price}
            name="price"
            onChange={handle}
          />

         

          <h5>Description</h5>
          <textarea
            type=""
            className="desArea"
            value={dish.des || ""}
            name="des"
            onChange={handle}
          />


          <button className="sbutt" onClick={SubmitHandler}>
            Submit
          </button>
        </div>
      </div>
      {/* --------------------------------------------------- */}
    </>
  );
};

export default AddDish;