import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PopularPost from "./Pages/PopularPost";
import Navbar from "./Components/Navbar";
import TopUsers from "./Pages/Top_Users";
import Feed from "./Pages/Feed";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<PopularPost />} />
          <Route path="/topusers" element={<TopUsers />} />
          <Route path="/feed" element={<feed/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
