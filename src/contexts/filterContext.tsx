import React, { createContext, useContext, useState } from "react";

interface Filters {
  keyword: string;
  category: string;
  startDate: string;
  page : number;
}

interface FilterContextValue {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const FilterContext = createContext<FilterContextValue>({
  filters: {
    keyword: "",
    category: "",
    startDate: "",
    page: 1,
  },
  setFilters: () => {},
});

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState<Filters>({
    keyword: "",
    category: "",
    startDate: "",
    page: 1,
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>{children}</FilterContext.Provider>
  );
};

export const useFilters = (): FilterContextValue => useContext(FilterContext);