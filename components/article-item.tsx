import Image from "next/image";
import { ArticleDto } from "@/types";

interface ArticleProps {
  article: ArticleDto;
}
export const ArticleItem = ({ article }: ArticleProps) => {
  return (
    <div>
      <div className="relative rounded overflow-hidden mb-8 aspect-[1.71]">
        <Image src={article.featuredImage} alt="news-image" fill />
      </div>
      <div className="gap-2">
        <h4 className="text-base font-medium leading-5 mb-2 line-clamp-1">
          {article.title}
        </h4>
        <p className="text-sm leading-5 line-clamp-2">{article.description}</p>
      </div>
    </div>
  );
};
