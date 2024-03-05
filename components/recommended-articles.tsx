import Image from "next/image";

import { newsObject } from "@/config/constant";
import { cn } from "@/lib/utils";

export const RecommendedArticles = () => {
  return (
    <div className="bg-gray-50 py-[108px]">
      <div className="container">
        <h2 className="text-[34px] leading-[43px] font-semibold mb-8">
          Other Articles You May Like
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsObject.map((news, index) => (
            <div key={index}>
              <div className=" relative rounded overflow-hidden mb-8 aspect-[1.71]">
                <Image src={news.featuredImage} alt="news-image" fill />
              </div>
              <div className="gap-2">
                <h4 className="text-base font-medium leading-5 mb-2 line-clamp-1">
                  {news.title}
                </h4>
                <p className="text-sm leading-5 line-clamp-2">
                  {news.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
