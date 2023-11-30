import { createBrowserRouter } from "react-router-dom";
import Main from "../../layOut/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [],
  },
]);
