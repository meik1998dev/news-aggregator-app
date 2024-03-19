import { useFilters } from "@/contexts/filterContext";
import { useNewsItems } from "@/contexts/newsListContext";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export const SearchInput = () => {
  const { filters, setFilters } = useFilters();
  const { setNewsItems } = useNewsItems();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const inputElement = event.currentTarget[0] as HTMLInputElement;
    const { value } = inputElement;

    setFilters({
      ...filters,
      keyword: value,
      page: 1,
    });

    setNewsItems([]);
  }

  return (
    <form className="flex items-center w-full" onSubmit={handleSubmit}>
      <div className="flex items-center ml-3 w-full">
        <MagnifyingGlassIcon className="-mr-6 text-gray-500 w-4 h-4" />
        <input
          type="search"
          name="search"
          placeholder="Search for an article.."
          className="flex transition-all h-9 pl-8 w-full rounded-md outline-none border-gray-300 border focus-visible:ring-1 focus-visible:ring-gray-950 bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-gray-500"
        />
      </div>
      <button className="hidden" type="submit"></button>
    </form>
  );
};
