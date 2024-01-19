import React, { Suspense } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Detail, Home, Layout } from "./routes/Routes";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "carsDetail/vin/:vin",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
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
