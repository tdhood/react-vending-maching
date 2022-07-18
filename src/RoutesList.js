import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import VendingMaching from "./VendingMaching";
import Coke from "./Coke";
import Milkyway from "./Milkway";
import Popcorn from "./Popcorn";

function RoutesList() {
    return (
      <Routes>
        <Route path="/milkyway" element={<Milkyway />} />
        <Route path="/coke" element={<Coke />} />
        <Route path="/popcorn" element={<Popcorn />} />
        <Route path="/" element={<VendingMaching />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
}

export default RoutesList;