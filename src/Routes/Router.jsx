import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "cont",
        element: <div>hello</div>,
      },
    ],
  },
]);