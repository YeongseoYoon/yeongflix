import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import { ErrorBoundary } from "./components";
import { Home, NowPlaying, UpComing } from "./pages";
import { loader as homeLoader } from "./pages/home/loader";
import { loader as upComingLoader } from "./pages/upcoming/loader";
import { loader as nowPlayingLoader } from "./pages/nowplaying/loader";
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
        path: "movie/:movieId",
        element: <Home />,
      },
      {
        path: "upcoming",
        element: <UpComing />,
        loader: upComingLoader(queryClient),
      },
      {
        path: "upcoming/movie/:movieId",
        element: <UpComing />,
      },
      {
        path: "now-playing",
        element: <NowPlaying />,
        loader: nowPlayingLoader(queryClient),
      },
      {
        path: "now-playing/movie/:movieId",
        element: <NowPlaying />,
      },
    ],
  },
]);
export default Router;
