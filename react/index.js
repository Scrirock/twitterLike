import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { RouteNotFound } from "./pages/RouteNotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  </BrowserRouter>
);
