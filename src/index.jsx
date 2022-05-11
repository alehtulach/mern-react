import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";

const container = document.getElementById("root");
createRoot(container).render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
