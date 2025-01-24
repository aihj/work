import { lazy, Suspense, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";



const HomePage = lazy(() => import("../pages/HomePage"));

function Router() {


  return (
    <Routes>    
      <Route path="/" element={<HomePage />} />
           
    </Routes>
  );
}

export default Router;
