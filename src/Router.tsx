import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import { ErrorBoundary } from "./components";
import { Home, NowPlaying, UpComing } from "./pages";
import { loader as homeLoader } from "./pages/home/loader";
import { queryClient } from "./utils/queryClient";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader(queryClient),
      },
      {
        path: "coming-soon",
        element: <UpComing />,
      },
      {
        path: "now-playing",
        element: <NowPlaying />,
      },
    ],
  },
]);
export default Router;
