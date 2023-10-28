import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import { ErrorBoundary } from "@/components";
import { Home, NowPlaying, Search, UpComing } from "@/pages";
import { loader as homeLoader } from "@/pages/home/loader";
import { loader as upComingLoader } from "@/pages/nowplaying/loader";
import { loader as nowPlayingLoader } from "@/pages/upcoming/loader";

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
        loader: homeLoader(queryClient, 1),
      },

      {
        path: "upcoming",
        element: <UpComing />,
        loader: upComingLoader(queryClient, 1),
      },

      {
        path: "now_playing",
        element: <NowPlaying />,
        loader: nowPlayingLoader(queryClient, 1),
      },

      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);
export default Router;
