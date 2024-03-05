import Link from "next/link";
import { Button } from "./ui/button";

export const Breadcrumb = () => {
  return (
    <ol className="list-none flex text-gray-600 text-sm mt-10 mb-4">
      <li className="flex items-center">
        <Button asChild variant="link" className="p-0">
          <Link
            href="/news"
            className="text-primary-foreground uppercase font-medium"
          >
            News
          </Link>
        </Button>
        <svg
          className="w-3 h-3 mx-2 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 6.707a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414zM10 4a1 1 0 011 1v4a1 1 0 01-2 0V5a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </li>
      <li className="flex items-center text-foreground-light">
        <span>September 21, 2021</span>
      </li>
    </ol>
  );
};
