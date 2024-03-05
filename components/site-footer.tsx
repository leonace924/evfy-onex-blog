import * as React from "react";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { LanguageSelect } from "./language-select";
import { footerObject } from "@/config/constant";
import { cn } from "@/lib/utils";

export const SiteFooter = ({
  className,
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <footer className={cn(className, "container pt-[113px]")}>
      <div className="mb-16 lg:mb-24 grid grid-cols-1 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-start-1 lg:col-span-3">
          <Link href="/">
            <Image
              src="/logo.svg"
              width={400}
              height={50}
              alt="logo"
              className="w-20 lg:w-[210px]"
            />
          </Link>

          <h3 className="text-2xl leading-9 text-black font-medium mt-14 mb-4">
            Stay up to date on the latest EVFY news
          </h3>

          <p className="mb-6 text-foreground-light">
            Our newsletters are a concentrated blast of all the latest from
            EVFY: news, events, product information and more.
          </p>

          <Button variant="secondary" size="lg" className="w-[171px] h-[52px]">
            Subscribe
          </Button>
        </div>

        <div className="mt-14 lg:mt-0 lg:col-span-8 lg:col-start-5 grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-14">
          {footerObject.map((menu, index) => (
            <ul key={index}>
              <li>
                <h4 className="text-base leading-9 text-black font-medium">
                  {menu.title}
                </h4>
              </li>
              {menu.children.map((item, id) => (
                <li key={id}>
                  <Button
                    asChild
                    variant="link"
                    className="p-0 text-foreground font-normal"
                  >
                    <Link href={item.link}>{item.title}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="border-t-[0.5px] border-t-border pt-8 flex items-center justify-between gap-6 lg:gap-10 mb-16">
        <span className="text-xs text-foreground">
          © Copyright 2021 EVFY Pte Ltd. All Rights Reserved.
        </span>

        <LanguageSelect />
      </div>
    </footer>
  );
};
