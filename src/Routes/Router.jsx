import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Blog from "../Components/Blog/Blog";
import CheckoutRoute from "../Components/CheckoutRoute/CheckoutRoute";
import Details from "../Components/Details/Details";
import Error from "../Components/Error/Error";
import FAQ from "../Components/FAQ/FAQ";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import TermsAndConditions from "../Components/Register/TermsAndConditions/TermsAndConditions";
import CourseRoute from "../Layouts/CourseRoute";
import Main from "../Layouts/Main";
import SubjectsDetails from "./../Components/Course/SubjectsDetails/SubjectsDetails";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/course",
        element: (
          <PrivateRoutes>
            <CourseRoute />
          </PrivateRoutes>
        ),
        children: [
          {
            path: "/course/:id",
            loader: ({ params }) =>
              fetch(` https://zerone-school-server.vercel.app/subsDetails/${params.id}`),
            element: <SubjectsDetails />,
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/FAQ",
        element: <FAQ />,
      },
      {
        path: "/featureCard/details/:id",
        loader: ({ params }) =>
          fetch(` https://zerone-school-server.vercel.app/detailsData/${params.id}`),
        element: <Details />,
      },
      {
        path: "/premiumRoute/:id",
        loader: ({ params }) =>
          fetch(` https://zerone-school-server.vercel.app/detailsData/${params.id}`),
        element: (
          <PrivateRoutes>
            <CheckoutRoute />
          </PrivateRoutes>
        ),
      },
      {
        path: "/TermsAndConditions",
        element: <TermsAndConditions />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
