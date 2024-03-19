import { CategoriesCombobox } from "./components/features/filters/comboboxs/CategoriesCombobox";
import { NewsListWrapper } from "./components/features/news/NewsListWrapper";
import { SearchInput } from "./components/features/filters/SearchInput/SearchInput";
import { SorucesCombobox } from "./components/features/filters/comboboxs/SorucesCombobox";
import { DatePicker } from "./components/features/filters/datePicker/datePicker";

function App() {
  return (
    <div className="">
      <div className="py-10 " />
      <div className="py-5 w-full border-b border-gray-200 shadow-sm fixed top-0 z-50 bg-white/90 backdrop-blur-lg">
        <div className="container mx-auto flex w-full items-center gap-4 ">
          <SearchInput />
          <SorucesCombobox />
          <CategoriesCombobox />
          <DatePicker />
        </div>
      </div>
      <div className="container mx-auto">
        <NewsListWrapper />
      </div>
    </div>
  );
}

export default App;
