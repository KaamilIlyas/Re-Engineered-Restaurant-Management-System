import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Card.css";

const logo=require("../images/logo.jpg")

const Items = (props) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={logo} className="card-img-top" alt="Pic not found" />
        <div className="card-body body">
          <h5 className="card-title n_tag">{props.name}</h5>
          <h3 className="rate"> {props.price}</h3>
          {/* <p className="card-text">{props.des}</p> */}

        </div>
      </div>
    </>
  );
};



function show(obj) {
  // console.log(obj);
  return (
    <Items ipath={obj.ipath} des={obj.des} name={obj.name} price={obj.price} />
  );
}

const Menu = () => {
    const [l, setl] = useState([]);
  // fetch("http://localhost:3001/api/getDishes",{method:"GET"}).then((res)=>{
  //   console.log(res.data)
  // })
  fetch('http://localhost:3001/api/getDishes')
  .then(response => response.json())
  .then(json =>      setl(json))

  return <>{l.map(show)}</>;
  // return <>{Dtems.map(show)}</>;
};

export default Menu;
