import React from "react";
import AddDish from "./Manager/AddDish";
import DeleteDish from "./Manager/DeleteDish";
import ViewFeedbacks from "./Manager/ViewFeedbacks";
import { Routes, Route, Link } from "react-router-dom";
import Menu from "./Manager/Menu";
import Main from "./Manager/Main";
import ManageUsers from "./Manager/ManageUser";
import ManageRider from "./Manager/ManageRider";
import AdminLogin from "./Manager/AdminLogin";
import Weather from "./Manager/Weather";
const Home = () => {
  return (
    <>

      <Routes>
          <Route path="/AdminLogin" element={<AdminLogin/>}/> 
          <Route path="/Main" element={<Main/>}/>
          <Route path="/AddDish" element={<AddDish/>}/>
          <Route path="/Dishes" element={<Menu/>}/>
          <Route path="/DeleteDish" element={<DeleteDish/>}/>
          <Route path="/ViewFeedbacks" element={<ViewFeedbacks/>}/>
          <Route path="/ManageUsers" element={<ManageUsers/>}/>
          <Route path="/ManageRider" element={<ManageRider/>}/>
          <Route path="/Weather" element={<Weather/>}/>
          
      </Routes>
    </>
  );
};

export default Home;
