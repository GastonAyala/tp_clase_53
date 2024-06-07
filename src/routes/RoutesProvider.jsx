import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../pages/Root";
import Dashboard from "../pages/Dashboard";
import { RoutesCharts } from "./RoutesCharts";
import { RoutesGenres } from "./RoutesGenres";
import { RoutesMovies } from "./RoutesMovies";
import { ErrorPage } from "../components/Extras/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      ...RoutesCharts,
      ...RoutesGenres,
      ...RoutesMovies
    ]
  },
]);

export const RouterProvider_ = () => <RouterProvider router={router} />;