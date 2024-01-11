import React, { useEffect } from "react";
import "../style/ManageRider.css";
import axios from "axios";
import { useState } from "react";

// let x = 0;

const ManageRider = () => {
  const [allRiders, setRiders] = useState([{}]);
  const options = {
    url: "http://localhost:3001/api/riders",
    method: "GET",
  };
  useEffect(() => {
    axios(options)
      .then((response) => {
        const a = response.data;
        setRiders(a);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function Show(obj) {
    return (
      <Row
        riderid={obj.riderid}
        name={obj.name}
        phone={obj.phone}
        email={obj.email}
        status={obj.status}
      />
    );
  }

  return (
    <>
      <h1 id="title">Manage Rider Pannel</h1>
      <div className="box">
        <table className="table table-striped">
          <thead>
            <th>User Id</th>
            <th>Name</th>
            <th>Phone No</th>
            <th>Email</th>
            <th>Status</th>
            <th>Delete</th>
          </thead>

          <tbody>{allRiders.map(Show)}</tbody>
        </table>
      </div>
    </>
  );
};

const Row = (props) => {
  const delHandel = () => {
    const request = {
      url: "http://localhost:3001/riders/deleteRider",
      method: "POST",
      data: props,
    };

    axios(request)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

 
  return (
    <>
      <tr>
        <td>{props.riderid}</td>
        <td>{props.name}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.status}</td>
       
        <td>
          <button className="dellbutt" onClick={delHandel}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default ManageRider;