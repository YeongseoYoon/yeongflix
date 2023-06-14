import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import { ErrorBoundary } from "./components";
import { Home } from "./pages";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "coming-soon",
        element: <Home />,
      },
      {
        path: "now-playing",
        element: <Home />,
      },
    ],
  },
]);
export default Router;
