// import React, { useEffect, useState } from "react";
// import axios from "axios";
import Main from "./pages/Main";
import Navbar from "./componets/Navbar";
import { Route, Routes } from "react-router-dom";
import PostId from "./pages/PostId";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post/:id" element={<PostId />} />
      </Routes>
    </>
  );
};

export default App;
