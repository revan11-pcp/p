import { createBrowserRouter } from "react-router-dom";
import Home from "./features/Home";
import Services from "./features/Services";
import Contact from "./features/Contact";
import TraceAndTrack from "./features/Trace&Track";
import RateCalculator from './features/RateCalculator'
import DeliveryCoverage from './features/DeliveryCoverage'
import Profile from './features/Profile'
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/trace-and-track",
        element: <TraceAndTrack />,
      },
      {
        path: "/pricing",
        element: <RateCalculator />,
      },
      {
        path: "/coverage",
        element: <DeliveryCoverage />,
      },
      {
        path: "/company-profile",
        element: <Profile />,
      },
    ],
  },
]);
