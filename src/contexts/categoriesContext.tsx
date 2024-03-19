import { createContext, useContext, useState } from "react";

type CategoriesContextType = {
  categoriesItems: Set<string>;
  setCategoriesItems: React.Dispatch<React.SetStateAction<Set<string>>>;
};

const CategoriesContext = createContext<CategoriesContextType>({
  categoriesItems: new Set<string>(),
  setCategoriesItems: () => {},
});

export function CategoriesProvider({ children }: { children: React.ReactNode }) {
  const [categoriesItems, setCategoriesItems] = useState<Set<string>>(new Set<string>());

  const value = {
    categoriesItems,
    setCategoriesItems,
  };

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
}

export function useCategoriesItems() {
  return useContext(CategoriesContext);
}
