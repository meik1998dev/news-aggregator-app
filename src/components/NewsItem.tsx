import { NewsItem as TNewsItem } from "@/types";

export const NewsItem = ({ data }: { data: TNewsItem }) => {
  return (
    <a
      href={data.url}
      className="hover:border-teal-600 group transition-all hover:shadow-teal-100 duration-500 flex flex-col border-2 hover:shadow-md border-gray-300 shadow-sm rounded"
    >
      <div className="w-full relative aspect-[16/10] rounded-t">
        <img src={data.imageUrl!} className="w-full aspect-[16/10] object-cover rounded-t" alt="" />
        <div className="bg-blue-950 text-white absolute top-2 right-2 font-semibold px-2 text-sm py-0.5 rounded w-fit">
          {data.source}
        </div>
      </div>
      <div className="flex flex-col p-4 gap-2">
        <div className="flex justify-between items-center">
          {data.category ? (
            <div className="bg-teal-800 text-white font-semibold px-2 text-sm py-0.5 rounded w-fit">
              {data.category}
            </div>
          ) : (
            <div></div>
          )}

          <span className="text-gray-800">{data.publishedAt.split("T")[0]}</span>
        </div>
        <h2 className="font-bold text-lg line-clamp-3">{data.title}</h2>
        <p className="line-clamp-3 text-sm text-gray-600">{data.description}</p>
      </div>
    </a>
  );
};
