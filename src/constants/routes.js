import Animals from "../components/Animals/Animals";
import Home from "../components/Home/Home";
import Info from "../components/Info/Info";
import StartVolunteers from "../components/StartVolunteers/StartVolunteers";
import Volunteers from "../components/Volunteers/Volunteers";
import { RoutePass } from "./routePass";

export const routes = [
  {
    path: RoutePass.Info,
    element: <Info />,
  },
  {
    path: RoutePass.Animal,
    element: <Animals />,
  },
  {
    path: RoutePass.Volunteers,
    element: <Volunteers />,
  },
  {
    path: RoutePass.StartVolunteer,
    element: <StartVolunteers />,
  },
  {
    path: RoutePass.Home,
    element: <Home />,
  },
];
