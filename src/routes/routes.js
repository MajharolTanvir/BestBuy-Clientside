import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Shop from "../Components/Shop/Shop";
import Men from "../Components/Men/Men";
import Women from "../Components/Women/Women";
import Food from "../Components/Food/Food";
import NotFound from "../Shared/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/food",
        element: <Food />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
