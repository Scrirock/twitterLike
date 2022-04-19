import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { RouteNotFound } from "./pages/RouteNotFound";

ReactDOM.render(
  <BrowserRouter>
    <ThemeContext>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </ThemeContext>
  </BrowserRouter>,
  document.getElementById("root")
);
