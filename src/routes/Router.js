import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AllParkings from "../pages/AllParkings";
import Summry from "../pages/Summry";
import Settings from "../pages/Settings";
//import User from "./users/User";

function Router() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" element={<Dashboard />} />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/AllParkings" element={<AllParkings />} />
      <Route path="/Summry" element={<Summry />} />
      <Route path="/settings" element={<Settings />} />
      
      
    </Routes>
    </div>
  );
}

export default Router;
