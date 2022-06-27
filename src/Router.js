import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Header } from "./Components/Header/Header";
import { Report } from "./Pages/Report/Report";
import { Payments } from "./Pages/Payments/Payments";
import { Employment } from "./Pages/Employment/Employment"
import { Generosity } from "./Pages/Generosity/Generosity";
import { VideoManual } from "./Pages/VideoManual/VideoManual";
import {Madal} from "./Pages/Madal/Madal"
import { ExcludedFamily } from "./Pages/ExcludedFamily/ExcludedFamily";
import { Kulanma } from "./Pages/Kulanma/Kulanma";

export function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/families" element={<Report />} />
        <Route path="/Employment" element={<Employment />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/generosity" element={<Generosity />} />
        <Route path="/videomanual" element={<VideoManual />} />
        <Route path="/madal" element={<Madal />} />
        <Route path="/ExcludedFamily" element={<ExcludedFamily />} />
        <Route path="/kulanma" element={<Kulanma />} />
      </Routes>
    </>
  );
}
