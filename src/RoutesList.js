import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import VendingMaching from "./VendingMaching";
import Coke from "./Coke";

function RoutesList() {
    return (
      <Routes>
        {/* <Route path="/milkyway" element={<MilkyWay />} /> */}
        <Route path="/coke" element={<Coke />} />
        {/* <Route path="/popcorn" element={<Popcorn />} /> */}
        <Route path="/" element={<VendingMaching />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
}

export default RoutesList;