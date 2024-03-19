import { Combobox } from "../../../ui/combobox";
import { useFilters } from "@/contexts/filterContext";
import { useSourcesItems } from "@/contexts/sourcesContext";
import { useState } from "react";

export const SorucesCombobox = () => {
  const { sourcesItems } = useSourcesItems();
  const { filters, setFilters } = useFilters();
  const [sourcesArr, setSourcesArr] = useState<Array<string>>([]);

  const handleOpenAction = () => {
    setSourcesArr([...sourcesItems]);
  };

  const handleSelect = (value: string) => {
    setFilters({ ...filters, source: value });
  };

  return (
    <Combobox
      handleSelect={handleSelect}
      type={"source"}
      options={sourcesArr}
      onOpenAction={handleOpenAction}
    />
  );
};
