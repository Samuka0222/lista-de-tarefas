import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import Home from "./pages/Home";
import ToDoList from "./pages/ToDoList";
import Notepad from "./pages/Notepad"
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "todo-list",
        element: <ToDoList />
      },
      {
        path: "notes",
        element: <Notepad />,
      }
    ]
  },
])

function Router() {
  return (
      <RouterProvider router={router} />
  )
}

export default Router;
