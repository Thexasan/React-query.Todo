import React, { Suspense } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Detail, Home, Layout } from "./routes/Routes";
import Loader from "./components/Loader";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<Loader/>}>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loader/>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "carsDetail/vin/:vin",
          element: (
            <Suspense fallback={<Loader/>}>
              <Detail />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
