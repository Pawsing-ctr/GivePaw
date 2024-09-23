import Animals from "../components/Animals/Animals";
import Donation from "../components/Donation/Donation";
import Home from "../components/Home/Home";
import Info from "../components/Info/Info";
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
    path: RoutePass.Donation,
    element: <Donation />,
  },
  {
    path: RoutePass.Home,
    element: <Home />,
  },
];
