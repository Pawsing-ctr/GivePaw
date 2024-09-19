import React from "react";
import { Route, Routes } from "react-router";
import "./Body.css";
import { routes } from "../../constants/routes";
import { RoutePass } from "../../constants/routePass";

const Body = () => {
  return (
    <div className="route">
      <Routes>
        {routes.map((el) => (
          <Route
            path={el.path}
            element={
              <div
                className={
                  el.path !== RoutePass.Volunteers ? "default-page" : ""
                }
              >
                {el.element}
              </div>
            }
          />
        ))}
      </Routes>
    </div>
  );
};

export default Body;
