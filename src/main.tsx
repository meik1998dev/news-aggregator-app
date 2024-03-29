import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FilterProvider } from "./contexts/filterContext.tsx";
import { NewsProvider } from "./contexts/newsListContext.tsx";
import { SourcesProvider } from "./contexts/sourcesContext.tsx";
import { CategoriesProvider } from "./contexts/categoriesContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FilterProvider>
      <SourcesProvider>
        <CategoriesProvider>
          <NewsProvider>
            <App />
          </NewsProvider>
        </CategoriesProvider>
      </SourcesProvider>
    </FilterProvider>
  </React.StrictMode>
);
