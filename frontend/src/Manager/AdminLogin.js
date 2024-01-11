import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../style/login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = ({setIsLoggedIn}) => {
  let navigate = useNavigate();

  const [Admin, setAdmin] = useState({
    username: "",
    password: "",
  });

  const handle = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setAdmin({ ...Admin, [name]: value });
  };

  const clickHandel = () => {
    const options = {
      url: "http://localhost:3001/api/adminLogin",
      method: "POST",
      data: Admin,
    };
    // console.log("-----", Admin);
    axios(options)
      .then((response) => {
        if (response.data.found) {
            setIsLoggedIn(true)
            navigate("/Main");
          }
        else {
          alert("Invalid Username or Password");
        }
      })
      .catch((err) => {
        console.log("err");
      });
  };
  return (
    <>
      {console.log("Admin is ", Admin)}
      
      {/* --------------------------------------------------- */}
      <div className="login-box">
        <h2>Login</h2>

        <div className="indiv">
          <h5>Username</h5>
          <input
            type="text"
            name="username"
            value={Admin.username}
            required=""
            onChange={handle}
          />

          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={Admin.password}
            required=""
            onChange={handle}
          />
        </div>

        <button className="butt" onClick={clickHandel}>
          Login
        </button>
    
      </div>
    </>
  );
};
export default Login;