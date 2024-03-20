import { SearchInput } from "../features/filters/SearchInput/SearchInput";
import { CategoriesCombobox } from "../features/filters/comboboxs/CategoriesCombobox";
import { SorucesCombobox } from "../features/filters/comboboxs/SorucesCombobox";
import { DatePicker } from "../features/filters/datePicker/datePicker";
import { MobileFilter } from "../features/filters/mobileFilter/mobileFilter";

export const Header = () => {
  return (
    <>
      <div className="lg:py-10 py-16" />

      <div className="md:py-5 py-2 w-full border-b border-gray-200 shadow-sm fixed top-0 z-50 bg-white/85 backdrop-blur-2xl">
        <div className="container mx-auto flex lg:flex-row flex-col w-full max-md:px-4 lg:items-center items-start md:gap-4 gap-2 ">
          <SearchInput />

          <MobileFilter />

          <div className="max-md:hidden flex md:flex-row flex-col items-center lg:gap-4 gap-2 lg:w-fit w-full">
            <SorucesCombobox />
            <CategoriesCombobox />
            <DatePicker />
          </div>
        </div>
      </div>
    </>
  );
};
