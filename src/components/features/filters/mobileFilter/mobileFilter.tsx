import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@radix-ui/react-collapsible";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { CategoriesCombobox } from "../comboboxs/CategoriesCombobox";
import { SorucesCombobox } from "../comboboxs/SorucesCombobox";
import { DatePicker } from "../datePicker/datePicker";
import { useFilters } from "@/contexts/filterContext";

export const MobileFilter = () => {
  const { filters } = useFilters();
  const label =
    Object.values({ 1: filters.category, 2: filters.source }).filter(Boolean).join(", ") ||
    "Filter";

  return (
    <Collapsible className="w-full md:hidden">
      <CollapsibleTrigger className="w-full bg-white flex items-center shadow-teal-500 gap-2 px-3 py-1 hover:shadow-md transition-all rounded-md border-teal-700 border-2">
        <MixerHorizontalIcon />
        <span className="font-semibold capitalize">{label}</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="w-full mt-4">
        <div className="flex md:flex-row flex-col items-center lg:gap-4 gap-2 lg:w-fit w-full">
          <SorucesCombobox />
          <CategoriesCombobox />
          <DatePicker />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
