"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Icons } from "./icons";

type Language = {
  name: string;
  icon: string;
};

const languages: Language[] = [
  {
    name: "singapore",
    icon: "/flags/SG.png",
  },
  {
    name: "english",
    icon: "/flags/EN.png",
  },
  {
    name: "german",
    icon: "/flags/DE.png",
  },
  {
    name: "france",
    icon: "/flags/FR.png",
  },
];

export const LanguageSelect = () => {
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<
    Language | undefined
  >(languages[0]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="focus:outline-none border-0 flex gap-2 lg:gap-4 items-center"
        >
          {selectedLanguage && (
            <Image
              src={selectedLanguage.icon}
              width={512}
              height={512}
              className="w-7"
              alt="icon"
            />
          )}
          <Icons.arrowDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" side="bottom" align="start">
        <Command>
          <CommandList>
            <CommandGroup className="z-50 bg-white">
              {languages.map((lang) => (
                <CommandItem
                  key={lang.name}
                  value={lang.name}
                  onSelect={(value) => {
                    console.log("value", value);
                    setSelectedLanguage(
                      languages.find((el) => el.name === value)
                    );
                    setOpen(false);
                  }}
                  className="flex items-center gap-2"
                >
                  <Image
                    src={lang.icon}
                    width={512}
                    height={512}
                    className="w-7"
                    alt="icon"
                  />
                  <span className="capitalize">{lang.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
