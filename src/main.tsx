import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FilterProvider } from "./contexts/filterContext.tsx";
import { NewsProvider } from "./contexts/newsListContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FilterProvider>
      <NewsProvider>
        <App />
      </NewsProvider>
    </FilterProvider>
  </React.StrictMode>
);
