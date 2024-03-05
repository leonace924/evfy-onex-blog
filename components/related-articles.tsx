import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { newsObject } from "@/config/constant";

export const RelatedArticles = () => {
  return (
    <div>
      <h3 className="text-xl leading-tight font-semibold mb-6">
        Related Articles
      </h3>

      <div className="grid grid-cols-1 gap-8">
        {newsObject.map((news, index) => (
          <div
            key={index}
            className={cn("grid grid-cols-[auto__1fr] gap-6 items-center", {
              "pb-8 border-b-[0.5px] border-b-gray-200":
                index < newsObject.length - 1,
            })}
          >
            <div className="w-[78px] h-[78px] relative rounded overflow-hidden">
              <Image
                src={news.featuredImage}
                alt="news-image"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <Badge
                className={cn("uppercase tracking-[1px] rounded-sm", {
                  "bg-transparent hover:bg-transparent p-0": !news.isFeatured,
                })}
              >
                {news.isFeatured ? "Featured" : "News"}
              </Badge>
              <h4 className="text-base font-medium leading-5 line-clamp-2">
                {news.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
