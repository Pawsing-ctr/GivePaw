import React from "react";
import { Route, Routes } from "react-router";
import { RoutePass } from "../../constants/routePass";
import Info from "../Info/Info";
import Animals from "../Animals/Animals";
import Volunteers from "../Volunteers/Volunteers";
import StartVolunteers from "../StartVolunteers/StartVolunteers";
import Home from "../Home/Home";

const Body = () => {
  return (
    <div className="route">
      <Routes>
        <Route path={RoutePass.Info} element={<Info />} />
        <Route path={RoutePass.Animal} element={<Animals />} />
        <Route path={RoutePass.Volunteers} element={<Volunteers />} />
        <Route path={RoutePass.StartVolunteer} element={<StartVolunteers />} />
        <Route path={RoutePass.Home} element={<Home />} />
      </Routes>
    </div>
  );
};

export default Body;
