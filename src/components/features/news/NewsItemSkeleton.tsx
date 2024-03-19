export const NewsItemSkeleton = () => {
  return (
    <div className="group transition-all  animate-pulse duration-900 flex flex-col border-2 hover:shadow-md border-gray-300 shadow-sm rounded">
      <div className="w-full relative aspect-[16/10] rounded-t">
        <div className="w-full bg-slate-200 aspect-[16/10] object-cover rounded-t" />
      </div>
      <div className="flex flex-col p-4 gap-2">
        <div className="bg-slate-200 w-16 h-4"></div>
        <div className="flex flex-col gap-1">
          <div className="bg-slate-200 w-full h-4 rounded-sm"></div>
          <div className="bg-slate-200 w-full h-4 rounded-sm"></div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="bg-slate-200 w-full h-3 rounded-sm"></div>
          <div className="bg-slate-200 w-full h-3 rounded-sm"></div>
          <div className="bg-slate-200 w-full h-3 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};
