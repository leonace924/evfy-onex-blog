import { ArticleItem } from "./article-item";
import { newsObject } from "@/config/constant";

export const RecommendedArticles = () => {
  return (
    <div className="bg-gray-50 py-[108px]">
      <div className="container">
        <h2 className="text-[34px] leading-[43px] font-semibold mb-8">
          Other Articles You May Like
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsObject.map((news, index) => (
            <ArticleItem article={news} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
