import { createBrowserRouter } from "react-router-dom";

import Root from "@/Root";
import { ErrorBoundary } from "@/components";
import { Home, NowPlaying, Search, UpComing } from "@/pages";
import { loader as homeLoader } from "@/pages/home/loader";
import { loader as upComingLoader } from "@/pages/nowplaying/loader";
import { loader as nowPlayingLoader } from "@/pages/upcoming/loader";

import { queryClient } from "@/utils";
import { ROUTE_PATH } from "@/constants";

const Router = createBrowserRouter([
  {
    path: ROUTE_PATH.ROOT,
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader(queryClient, 1),
      },

      {
        path: ROUTE_PATH.UPCOMING,
        element: <UpComing />,
        loader: upComingLoader(queryClient, 1),
      },

      {
        path: ROUTE_PATH.NOW_PLAYING,
        element: <NowPlaying />,
        loader: nowPlayingLoader(queryClient, 1),
      },

      {
        path: ROUTE_PATH.SEARCH,
        element: <Search />,
      },
    ],
  },
]);
export default Router;
