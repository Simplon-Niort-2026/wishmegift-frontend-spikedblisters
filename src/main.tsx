import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import './index.css'

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}


ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
        <Route index element={<Homepage />} />
        <Route path="components" element={<App />} />
    </Routes>
  </BrowserRouter>,
);