import React, { Suspense, useEffect, useState } from "react";
import "./CmsApp.css";
import routes from "./routes";
import Loader from "./Loader/Loader";
import { useRoutes } from "react-router-dom";
//
export default function CmsApp() {
   const router = useRoutes(routes);
   //
   return (
      <Suspense
         fallback={
            <div className="flex min-h-screen items-center justify-center text-3xl">
               <Loader />
            </div>
         }
      >
         <div className="main-wrapper  overflow-hidden  relative bg-[#0A0A0A] " dir="rtl">
            <div className="  size-full   ">
               <div className="routes">{router}</div>
            </div>
         </div>
      </Suspense>
   );
}
