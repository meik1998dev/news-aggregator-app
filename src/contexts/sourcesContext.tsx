import { createContext, useContext, useState } from "react";

type SourcesContextType = {
  sourcesItems: Set<string>;
  setSourcesItems: React.Dispatch<React.SetStateAction<Set<string>>>;
};

const SourcesContext = createContext<SourcesContextType>({
  sourcesItems: new Set<string>(),
  setSourcesItems: () => {},
});

export function SourcesProvider({ children }: { children: React.ReactNode }) {
  const [sourcesItems, setSourcesItems] = useState<Set<string>>(new Set<string>());

  const value = {
    sourcesItems,
    setSourcesItems,
  };

  return <SourcesContext.Provider value={value}>{children}</SourcesContext.Provider>;
}

export function useSourcesItems() {
  return useContext(SourcesContext);
}
