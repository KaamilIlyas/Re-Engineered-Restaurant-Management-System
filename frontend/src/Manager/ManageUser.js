import React, { useEffect } from "react";
import "../style/ManageUser.css";
import axios from "axios";
import { useState } from "react";

// let x = 0;

const ManageUsers = () => {
  const [allUsers, setUsers] = useState([{}]);
  const options = {
    url: "http://localhost:3001/api/getUsers",
    method: "POST",
  };
  useEffect(() => {
    axios(options)
      .then((response) => {
        const a = response.data;
        setUsers(a);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function Show(obj) {
    return (
      <Row
        userid={obj.userid}
        full_name={obj.full_name}
        address={obj.address}
        phone_number={obj.phone_number}
        password={obj.password}
        email={obj.email}
        isBlock={obj.isBlock}
      />
    );
  }

  return (
    <>
      <h1 id="title">Manage User Pannel</h1>
      <div className="box">
        <table className="table table-striped">
          <thead>
            <th>User Id</th>
            <th>Full Name</th>
            <th>Address</th>
            <th>Phone No</th>
            <th>Email</th>
            <th>Password</th>
            <th>Status</th>
            <th>Block</th>
            <th>UnBlock</th>
            <th>Delete</th>
          </thead>

          <tbody>{allUsers.map(Show)}</tbody>
        </table>
      </div>
    </>
  );
};

const Row = (props) => {
  const delHandel = () => {
    const request = {
      url: "http://localhost:3001/api/deleteUser",
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

  const blockHandel = () => {
    const request = {
      url: "http://localhost:3001/api/blockUser",
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

  const unBlockHandel = () => {
    const request = {
      url: "http://localhost:3001/api/unBlockUser",
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

  let st = "";
  if (props.isBlock) {
    st = "Blocked";
  } else {
    st = "open";
  }

  return (
    <>
      <tr>
        <td>{props.userid}</td>
        <td>{props.full_name}</td>
        <td>{props.address}</td>
        <td>{props.phone_number}</td>
        <td>{props.email}</td>
        <td>{props.password}</td>
        <td>{st}</td>
        <td>
          <button className="blockbutt" onClick={blockHandel}>
            Block
          </button>
        </td>
        <td>
          <button className="openbutt" onClick={unBlockHandel}>
            Open
          </button>
        </td>
        <td>
          <button className="dellbutt" onClick={delHandel}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default ManageUsers;