import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import EditPostPage from "../pages/EditPostPage";
import HomePage from "../pages/HomePage";
import NewPostPage from "../pages/NewPostPage";
import PostDetailPage from "../pages/PostDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "post/:id",
        element: <PostDetailPage />,
      },
      {
        path: "new-post",
        element: <NewPostPage />,
      },
      {
        path: "edit-post/:id",
        element: <EditPostPage />,
      },
    ],
  },
]);

export default router;
