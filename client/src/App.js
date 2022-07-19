// import React, { useEffect, useState } from "react";
// import axios from "axios";
import Main from "./pages/Main";
import Navbar from "./componets/Navbar";
import { Route, Routes } from "react-router-dom";
import PostId from "./pages/PostId";

const App = () => {
//   const [posts, setPosts] = useState([]);
//   const [load, setLoad] = useState(false);
//   const btns = () => {
//     setLoad(true);
//     setTimeout(() => {
//       setLoad(false);
//     }, 2000);
//   };
//   useEffect(() => {
//     const fetchPost = async () => {
//       const res = await axios.get("/posts");
//       console.log(res);
//     };

//     fetchPost();
//   }, []);

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
