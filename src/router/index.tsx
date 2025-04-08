import { createBrowserRouter } from "react-router-dom";
import IndexPage from "../pages";
import ChatPage from "../pages/chat";
import DashboardPage from "../pages/dashboard";
import HomePage from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "chat",
        element: <ChatPage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
    ],
  },
]);
