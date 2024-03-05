import Link from "next/link";
import Image from "next/image";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { LanguageSelect } from "@/components/language-select";
import { Icons } from "./icons";

export const SiteHeader = () => {
  return (
    <div className="container py-3 flex items-center gap-4 lg:gap-8">
      <Link href="/">
        <Image
          src="/logo.svg"
          width={400}
          height={50}
          alt="logo"
          className="w-20 lg:w-[153px]"
        />
      </Link>

      <Menubar className="hidden md:flex border-0 gap-4">
        <MenubarMenu>
          <MenubarTrigger className="text-text-main flex items-center gap-2 text-base font-semibold">
            Find EV Cars
            <Icons.arrowDown />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Menu 1</MenubarItem>
            <MenubarItem>Menu 2</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-text-main flex items-center gap-2 text-base font-semibold">
            EV Guides
            <Icons.arrowDown />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Menu 1</MenubarItem>
            <MenubarItem>Menu 2</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <div className="flex items-center gap-4 lg:gap-8 ml-auto">
        <LanguageSelect />
        <Button
          variant="ghost"
          className="text-base text-text-main font-semibold"
        >
          Log In / Sign Up
        </Button>
      </div>
    </div>
  );
};
