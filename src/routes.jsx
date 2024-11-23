import { lazy } from "react";
const Home = lazy(() => import("./pages/Home/Home"));
//
let routes = [
   { path: "/", element: <Home /> },
   //    { path: "*", element: <Error /> },
];
export default routes;
