import { Combobox } from "../../../ui/combobox";
import { useFilters } from "@/contexts/filterContext";
import { useCategoriesItems } from "@/contexts/categoriesContext";
import { useState } from "react";

export const CategoriesCombobox = () => {
  const { categoriesItems } = useCategoriesItems();
  const { filters, setFilters } = useFilters();
  const [categoriesArr, setCategoriesArr] = useState<Array<string>>([]);

  const handleOpenAction = () => {
    setCategoriesArr([...categoriesItems]);
  };

  const handleSelect = (value: string) => {
    setFilters({ ...filters, category: value });
  };

  return (
    <Combobox
      handleSelect={handleSelect}
      type={"category"}
      options={categoriesArr}
      onOpenAction={handleOpenAction}
    />
  );
};
