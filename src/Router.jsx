import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import ToDoList from "./pages/ToDoList";
import Notepad from "./pages/Notepad";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ToDoList />,
      },
      {
        path: "notes",
        element: <Notepad />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
