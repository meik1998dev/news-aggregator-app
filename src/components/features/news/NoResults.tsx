import no_result from "@/assets/no-results.png";

export const NoResults = () => {
  return (
    <div className="my-5 py-7 flex flex-col w-full gap-6 flex-1 rounded-lg min-h-60">
      <img src={no_result} alt="no results" className="max-w-xs lg:w-full w-56 mx-auto" />
      <p className="text-black text-center font-semibold md:text-5xl text-xl">No results found</p>
    </div>
  );
};
