import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export const SearchInput = () => {
  return (
    <div className="flex items-center w-full">
      <MagnifyingGlassIcon className="-mr-6 text-gray-500 w-4 h-4" />
      <input
        placeholder="Search for an article.."
        className="flex transition-all h-9 pl-8 w-full rounded-md outline-none border-gray-300 border focus-visible:ring-1 focus-visible:ring-gray-950 bg-transparent px-3 py-1 text-sm shadow-sm   placeholder:text-gray-500"
      />
    </div>
  );
};
