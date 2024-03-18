import { NewsList } from "./components/NewsList";
import { SearchInput } from "./components/SearchInput";
import { Combobox } from "./components/common/combobox";
import { DatePicker } from "./components/common/datePicker";

function App() {
  return (
    <div className="">
      <div className="py-10 " />
      <div className="py-5 flex items-center gap-4 container mx-auto border-b border-gray-200 shadow-sm fixed top-0 z-50 bg-white/90 backdrop-blur-lg">
        <SearchInput />
        <Combobox type={"source"} options={[]} />
        <Combobox type={"category"} options={[]} />
        <DatePicker />
      </div>
      <div className="container mx-auto">
        <NewsList />
      </div>
    </div>
  );
}

export default App;
