import React from "react";
import TimeLine from "./Components/TimeLine";
import { BrowserRouter, Route, Routes } from "react-router-dom";                                   
import CountryTabel from "./Components/CountryTabel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" index element={<CountryTabel />} />
        <Route path="Timeline" element={<TimeLine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
