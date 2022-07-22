// import React, { useEffect, useState } from "react";
// import axios from "axios";
import Main from "./pages/Main";
import Navbar from "./componets/Navbar";
import { Route, Routes } from "react-router-dom";
import PostId from "./pages/PostId";
import News from "./componets/News";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { connect } from "react-redux";
import Write from "./pages/Write";

const App = (props) => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blogs" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post/:id" element={<PostId />} />
        <Route path="/write" element={props.user ? <Write /> : <Login />} />
      </Routes>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, null)(App);
