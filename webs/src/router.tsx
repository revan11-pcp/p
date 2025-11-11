import { createBrowserRouter } from "react-router-dom";
import Home from "./features/Home";
import Services from "./features/Services";
import Contact from "./features/Contact";
import TraceAndTrack from "./features/Trace&Track";
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
    ],
  },
]);