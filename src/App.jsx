import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import CourseList from "./pages/CourseList";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import "./App.css";
const App = () => {
  let myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <CourseList />,
        },
        {
          path: "/login",
          element: <Login />,
        },

        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={myRouter}></RouterProvider>;
};

export default App;
