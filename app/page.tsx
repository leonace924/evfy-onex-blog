import Image from "next/image";
import { Breadcrumb } from "@/components/breadcrumb";
import { RelatedArticles } from "@/components/related-articles";
import { RecommendedArticles } from "@/components/recommended-articles";

export default function NewsDetail() {
  return (
    <main className="min-h-screen">
      <div className="container grid grid-cols-1 gap-20 lg:grid-cols-12 lg:gap-6 pb-20">
        <div className="lg:col-span-8 lg:col-start-1 max-w-[752px]">
          <Breadcrumb />
          <h1 className="text-5xl text-foreground font-semibold mb-12">
            Biden sets electric vehicle target in drive to cut emissions
          </h1>

          <Image
            src="/images/img-blog-featured.jpg"
            alt="Blog Featured"
            width={752}
            height={387}
            placeholder="blur"
            blurDataURL="/images/img-blog-featured.jpg"
            className="w-full rounded"
          />
          <div className="mt-4">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </div>

          <p className="mt-10 mb-8 text-xl leading-[1.6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
            faucibus id vitae suspendisse. Ipsum erat malesuada sit faucibus
            faucibus massa. Mauris et morbi vitae habitant sit. Maecenas pretium
            in consectetur velit auctor. Porttitor tellus ut pretium,
            scelerisque orci erat. Etiam imperdiet ridiculus eu tincidunt. Vel
            dui, pulvinar vivamus lorem risus.
          </p>
          <p className="mb-8 text-xl leading-[1.6]">
            Bibendum aliquet adipiscing sed interdum. Arcu consequat fames
            blandit nisi. Vulputate dignissim tempus duis ultrices. Arcu sed
            porttitor morbi lobortis mattis pellentesque. Dui quam sed eu
            ultrices ut nullam. Maecenas tortor auctor eros erat volutpat sapien
            dui pretium.
          </p>
          <p className="text-xl leading-[1.6]">
            Hac sed diam tristique in consequat in suspendisse habitant. Et
            mauris venenatis posuere auctor tortor, placerat. Quisque tincidunt
            euismod dictum neque, massa nisi. Sagittis, dictum nibh bibendum
            cursus neque, nunc molestie. Odio viverra sagittis, platea nibh
            eget. Egestas a cras bibendum amet, mi magna cursus. Ante suscipit
            felis vitae amet.
          </p>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <RelatedArticles />
        </div>
      </div>

      <RecommendedArticles />
    </main>
  );
}
