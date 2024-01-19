import { lazy } from "react";


export const Layout = lazy(()=>import("../layout/Layout"))
export const Home = lazy(()=>import("../pages/Home"))
export const Detail = lazy(()=>import("../pages/Detail"))